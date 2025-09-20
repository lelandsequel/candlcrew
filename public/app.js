// CandlCrew Advanced Restaurant Training Platform - Version 2.0

class CandlCrewAdvancedTraining {
  constructor() {
    this.currentMode = null
    this.sections = []
    this.currentSection = null
    this.currentQuestionIndex = 0
    this.score = 0
    this.timeRemaining = 0
    this.timer = null
    this.gameConfig = {}
    this.answers = []
    this.startTime = null
    this.employeeId = this.generateEmployeeId()
    this.badges = []
    this.certifications = []
    this.analytics = {}
    
    this.initGame()
  }

  generateEmployeeId() {
    return localStorage.getItem('candlcrew_employee_id') || 
           'EMP' + Date.now().toString(36).toUpperCase()
  }

  async initGame() {
    try {
      // Load sections and game config
      const sectionsResponse = await axios.get('/api/sections')
      this.sections = sectionsResponse.data.sections
      this.gameConfig = sectionsResponse.data.gameConfig
      
      // Load badges and employee progress
      const badgesResponse = await axios.get('/api/badges')
      this.badges = badgesResponse.data
      
      // Load analytics (for managers)
      try {
        const analyticsResponse = await axios.get('/api/analytics/restaurant')
        this.analytics = analyticsResponse.data
      } catch (e) {
        // Not a manager, skip analytics
      }
      
      this.renderDashboard()
      localStorage.setItem('candlcrew_employee_id', this.employeeId)
    } catch (error) {
      console.error('Failed to initialize training platform:', error)
      this.showError('Failed to load training platform. Please refresh the page.')
    }
  }

  renderDashboard() {
    const app = document.getElementById('app')
    
    app.innerHTML = `
      <div class="training-dashboard">
        <!-- Header with employee info -->
        <div class="dashboard-header">
          <div class="employee-info">
            <div class="employee-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div>
              <h3>Welcome to CandlCrew Training</h3>
              <p>Employee ID: ${this.employeeId}</p>
              <div class="badge-display">
                ${this.renderBadges()}
              </div>
            </div>
          </div>
          <div class="dashboard-stats">
            <div class="stat-card">
              <i class="fas fa-trophy"></i>
              <span>Badges Earned</span>
              <strong>${this.badges.filter(b => b.earned).length}</strong>
            </div>
            <div class="stat-card">
              <i class="fas fa-chart-line"></i>
              <span>Progress</span>
              <strong>78%</strong>
            </div>
            <div class="stat-card">
              <i class="fas fa-certificate"></i>
              <span>Certifications</span>
              <strong>${this.certifications.length}</strong>
            </div>
          </div>
        </div>

        <!-- Training Mode Selection -->
        <div class="mode-selection">
          <h2><i class="fas fa-graduation-cap"></i> Choose Your Training Path</h2>
          <div class="mode-grid">
            <div class="mode-card" onclick="training.startMode('knowledge')">
              <i class="fas fa-book"></i>
              <h3>Knowledge Training</h3>
              <p>Learn menu items, ingredients, and restaurant basics</p>
              <span class="mode-badge">11 Sections</span>
            </div>
            <div class="mode-card simulation" onclick="training.startMode('simulation')">
              <i class="fas fa-users"></i>
              <h3>Service Simulation</h3>
              <p>Practice real customer interactions and scenarios</p>
              <span class="mode-badge">Interactive</span>
            </div>
            <div class="mode-card certification" onclick="training.startMode('certification')">
              <i class="fas fa-certificate"></i>
              <h3>Certification</h3>
              <p>Complete official food safety and service certifications</p>
              <span class="mode-badge">Required</span>
            </div>
            <div class="mode-card practical" onclick="training.startMode('practical')">
              <i class="fas fa-wine-glass"></i>
              <h3>Practical Skills</h3>
              <p>POS training, wine pairing, and hands-on practice</p>
              <span class="mode-badge">Advanced</span>
            </div>
          </div>
        </div>

        <!-- Quick Stats Dashboard -->
        <div class="quick-stats">
          <div class="stat-section">
            <h3><i class="fas fa-clock"></i> Recent Activity</h3>
            <ul class="activity-feed">
              <li><i class="fas fa-check"></i> Completed "Food Safety Basics" - 95%</li>
              <li><i class="fas fa-star"></i> Earned "Service Excellence" badge</li>
              <li><i class="fas fa-wine-glass"></i> Practiced wine pairing - 88%</li>
            </ul>
          </div>
          <div class="stat-section">
            <h3><i class="fas fa-target"></i> Next Goals</h3>
            <ul class="goals-list">
              <li><i class="fas fa-arrow-right"></i> Complete POS Training</li>
              <li><i class="fas fa-arrow-right"></i> Master Table Service Scenarios</li>
              <li><i class="fas fa-arrow-right"></i> Earn Sommelier Badge</li>
            </ul>
          </div>
        </div>

        <!-- Manager Analytics (if applicable) -->
        ${this.renderManagerAnalytics()}
      </div>
    `
  }

  renderBadges() {
    if (!this.badges.length) return '<span class="no-badges">No badges earned yet</span>'
    
    return this.badges
      .filter(badge => badge.earned)
      .map(badge => `<span class="badge ${badge.id}"><i class="${badge.icon}"></i> ${badge.name}</span>`)
      .join('')
  }

  renderManagerAnalytics() {
    if (!this.analytics.totalEmployees) return ''
    
    return `
      <div class="manager-analytics">
        <h2><i class="fas fa-chart-bar"></i> Restaurant Training Analytics</h2>
        <div class="analytics-grid">
          <div class="analytics-card">
            <h4>Team Overview</h4>
            <div class="metric">
              <span>Total Employees</span>
              <strong>${this.analytics.totalEmployees}</strong>
            </div>
            <div class="metric">
              <span>Average Completion</span>
              <strong>${this.analytics.averageCompletionRate}%</strong>
            </div>
          </div>
          <div class="analytics-card">
            <h4>Challenging Areas</h4>
            <ul>
              ${this.analytics.mostDifficultSections.map(section => 
                `<li><i class="fas fa-exclamation-triangle"></i> ${section}</li>`
              ).join('')}
            </ul>
          </div>
          <div class="analytics-card">
            <h4>Top Performers</h4>
            <ul>
              ${this.analytics.topPerformers.map(performer => 
                `<li><i class="fas fa-star"></i> ${performer}</li>`
              ).join('')}
            </ul>
          </div>
        </div>
      </div>
    `
  }

  startMode(mode) {
    const filteredSections = this.sections.filter(section => section.category === mode)
    this.currentMode = mode
    this.renderSectionGrid(filteredSections, mode)
  }

  renderSectionGrid(sections, mode) {
    const app = document.getElementById('app')
    
    const modeInfo = {
      knowledge: {
        title: 'Knowledge Training',
        description: 'Master the menu and restaurant fundamentals',
        icon: 'fas fa-book'
      },
      simulation: {
        title: 'Service Simulation',
        description: 'Practice real-world customer service scenarios',
        icon: 'fas fa-users'
      },
      certification: {
        title: 'Certification Training',
        description: 'Complete required certifications for your role',
        icon: 'fas fa-certificate'
      },
      practical: {
        title: 'Practical Skills',
        description: 'Hands-on training for daily operations',
        icon: 'fas fa-tools'
      }
    }

    app.innerHTML = `
      <div class="section-grid-container">
        <div class="mode-header">
          <button onclick="training.renderDashboard()" class="btn-back">
            <i class="fas fa-arrow-left"></i> Back to Dashboard
          </button>
          <div class="mode-info">
            <h1><i class="${modeInfo[mode].icon}"></i> ${modeInfo[mode].title}</h1>
            <p>${modeInfo[mode].description}</p>
          </div>
        </div>

        <div class="sections-grid">
          ${sections.map(section => this.renderSectionCard(section)).join('')}
        </div>
      </div>
    `
  }

  renderSectionCard(section) {
    const progress = this.getSectionProgress(section.id)
    const isLocked = section.prerequisites && !this.hasCompletedPrerequisites(section.prerequisites)
    
    return `
      <div class="section-card ${section.category} ${isLocked ? 'locked' : ''}" 
           onclick="training.startSection('${section.id}')">
        <div class="section-header">
          <i class="${section.icon}"></i>
          <h3>${section.title}</h3>
          ${section.badge ? `<span class="section-badge">${section.badge}</span>` : ''}
        </div>
        
        <p>${section.description}</p>
        
        <div class="section-meta">
          <div class="meta-item">
            <i class="fas fa-question-circle"></i>
            <span>${section.questionCount} questions</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-clock"></i>
            <span>${section.estimatedTime} min</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-target"></i>
            <span>${section.passingScore}% to pass</span>
          </div>
        </div>

        <div class="section-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-text">${progress}% Complete</span>
        </div>

        ${isLocked ? 
          `<div class="locked-overlay">
            <i class="fas fa-lock"></i>
            <span>Complete prerequisites first</span>
          </div>` :
          `<button class="btn btn-primary section-start-btn">
            <i class="fas fa-play"></i>
            ${progress > 0 ? 'Continue' : 'Start'} Training
          </button>`
        }
      </div>
    `
  }

  hasCompletedPrerequisites(prerequisites) {
    // Mock check - in real app, check against employee progress
    return prerequisites.every(prereq => Math.random() > 0.3)
  }

  getSectionProgress(sectionId) {
    // Mock progress - in real app, get from employee data
    return Math.floor(Math.random() * 100)
  }

  async startSection(sectionId) {
    try {
      const response = await axios.get(`/api/section/${sectionId}`)
      this.currentSection = response.data
      this.currentQuestionIndex = 0
      this.score = 0
      this.answers = []
      this.startTime = Date.now()
      
      this.renderQuestion()
    } catch (error) {
      console.error('Failed to load section:', error)
      this.showError('Failed to load section. Please try again.')
    }
  }

  renderQuestion() {
    const question = this.currentSection.questions[this.currentQuestionIndex]
    const app = document.getElementById('app')
    
    // Handle different question types
    switch (question.type) {
      case 'table-service':
        this.renderTableServiceScenario(question)
        break
      case 'pos-training':
        this.renderPOSTraining(question)
        break
      case 'food-safety':
        this.renderFoodSafetyQuestion(question)
        break
      case 'wine-pairing':
        this.renderWinePairingQuestion(question)
        break
      default:
        this.renderStandardQuestion(question)
    }
  }

  renderTableServiceScenario(question) {
    const scenario = question.scenario
    const app = document.getElementById('app')
    
    app.innerHTML = `
      <div class="scenario-container">
        <div class="scenario-header">
          <h2><i class="fas fa-concierge-bell"></i> Table Service Scenario</h2>
          <div class="scenario-info">
            <span class="customer-type ${scenario.customerType}">
              <i class="fas fa-user"></i> ${scenario.customerType.toUpperCase()} CUSTOMER
            </span>
            <span class="scenario-points">
              <i class="fas fa-star"></i> ${scenario.points} points possible
            </span>
          </div>
        </div>

        <div class="scenario-situation">
          <h3>Situation</h3>
          <p>${scenario.situation}</p>
        </div>

        <div class="scenario-dialogue">
          <h3>Customer Says:</h3>
          <div class="dialogue-box customer">
            ${scenario.customerLines.map(line => `
              <div class="dialogue-line">
                <i class="fas fa-user"></i>
                <span>${line}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="response-area">
          <h3>Your Response:</h3>
          <textarea id="service-response" placeholder="Type your response here..." rows="4"></textarea>
          
          ${scenario.upsellOpportunities && scenario.upsellOpportunities.length > 0 ? `
            <div class="upsell-hints">
              <h4><i class="fas fa-lightbulb"></i> Upsell Opportunities:</h4>
              <ul>
                ${scenario.upsellOpportunities.map(opp => `<li>${opp}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          
          <button onclick="training.submitServiceResponse()" class="btn btn-primary">
            <i class="fas fa-check"></i> Submit Response
          </button>
        </div>
      </div>
    `
  }

  renderPOSTraining(question) {
    const pos = question.posSimulation
    const app = document.getElementById('app')
    
    app.innerHTML = `
      <div class="pos-container">
        <div class="pos-header">
          <h2><i class="fas fa-cash-register"></i> POS System Training</h2>
          <div class="pos-info">
            <span>Expected Total: <strong>$${pos.expectedTotal.toFixed(2)}</strong></span>
          </div>
        </div>

        <div class="pos-order">
          <h3>Order Details</h3>
          <p>${question.question}</p>
        </div>

        <div class="pos-interface">
          <div class="pos-left">
            <div class="pos-categories">
              <button class="pos-category" data-category="sandwiches">Sandwiches</button>
              <button class="pos-category" data-category="vegetarian">Vegetarian</button>
              <button class="pos-category" data-category="beverages">Beverages</button>
              <button class="pos-category" data-category="petiscos">Petiscos</button>
            </div>
            
            <div class="pos-items" id="pos-items">
              <!-- Items will populate based on category selection -->
            </div>
          </div>

          <div class="pos-right">
            <div class="pos-ticket">
              <h4>Order Ticket</h4>
              <div id="pos-ticket-items">
                <!-- Selected items appear here -->
              </div>
              <div class="pos-total">
                <strong>Total: $<span id="pos-total">0.00</span></strong>
              </div>
            </div>
            
            <button onclick="training.submitPOSOrder()" class="btn btn-success pos-submit">
              <i class="fas fa-credit-card"></i> Process Payment
            </button>
          </div>
        </div>
      </div>
    `
    
    this.initializePOSInterface(pos)
  }

  renderFoodSafetyQuestion(question) {
    const safety = question.foodSafetyData
    const app = document.getElementById('app')
    
    app.innerHTML = `
      <div class="safety-container">
        <div class="safety-header">
          <h2><i class="fas fa-shield-alt"></i> Food Safety Scenario</h2>
          <div class="hazard-type ${safety.hazardType}">
            <i class="fas fa-exclamation-triangle"></i>
            ${safety.hazardType.toUpperCase()} HAZARD
          </div>
        </div>

        <div class="safety-scenario">
          <h3>Scenario</h3>
          <p>${safety.scenario}</p>
        </div>

        <div class="safety-question">
          <h3>Question</h3>
          <p>${question.question}</p>
        </div>

        <div class="safety-procedures">
          <h3>What should you do? (Select all correct procedures)</h3>
          <div class="procedure-options">
            ${this.shuffleArray([...safety.correctProcedure, ...this.generateIncorrectProcedures()])
              .map((procedure, index) => `
                <label class="procedure-option">
                  <input type="checkbox" value="${procedure}" id="procedure-${index}">
                  <span>${procedure}</span>
                </label>
              `).join('')}
          </div>
          
          <button onclick="training.submitSafetyResponse()" class="btn btn-danger">
            <i class="fas fa-check-circle"></i> Submit Safety Protocol
          </button>
        </div>
      </div>
    `
  }

  renderWinePairingQuestion(question) {
    const wine = question.wineData
    const app = document.getElementById('app')
    
    app.innerHTML = `
      <div class="wine-container">
        <div class="wine-header">
          <h2><i class="fas fa-wine-glass-alt"></i> Wine Pairing Guide</h2>
          <div class="price-point ${wine.pricePoint}">
            ${wine.pricePoint.toUpperCase()} PRICE POINT
          </div>
        </div>

        <div class="wine-dish">
          <h3>Dish</h3>
          <div class="dish-card">
            <h4>${wine.dish}</h4>
          </div>
        </div>

        <div class="wine-question">
          <h3>Question</h3>
          <p>${question.question}</p>
        </div>

        <div class="wine-options">
          <h3>Wine Options</h3>
          <div class="wine-grid">
            ${wine.wineOptions.map((wineOption, index) => `
              <div class="wine-card" onclick="training.selectWine('${wineOption.name}')" data-wine="${wineOption.name}">
                <div class="wine-type ${wineOption.type}">${wineOption.type}</div>
                <h4>${wineOption.name}</h4>
                <p class="wine-price">$${wineOption.price}</p>
                <ul class="wine-characteristics">
                  ${wineOption.characteristics.map(char => `<li>${char}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
          
          <button onclick="training.submitWineChoice()" class="btn btn-primary" id="wine-submit" disabled>
            <i class="fas fa-wine-bottle"></i> Confirm Pairing Choice
          </button>
        </div>
      </div>
    `
  }

  renderStandardQuestion(question) {
    const app = document.getElementById('app')
    const progress = Math.round(((this.currentQuestionIndex + 1) / this.currentSection.questions.length) * 100)
    
    app.innerHTML = `
      <div class="question-container">
        <div class="question-header">
          <div class="section-info">
            <h2>${this.currentSection.title}</h2>
            <p>Question ${this.currentQuestionIndex + 1} of ${this.currentSection.questions.length}</p>
          </div>
          <div class="progress-indicator">
            <div class="progress-circle">
              <span>${progress}%</span>
            </div>
          </div>
        </div>

        <div class="question-content">
          <h3>${question.question}</h3>
          
          ${question.imageUrl ? `<img src="${question.imageUrl}" alt="Question image" class="question-image">` : ''}
          
          <div class="answer-options">
            ${this.renderAnswerOptions(question)}
          </div>
        </div>

        <div class="question-actions">
          <button onclick="training.submitAnswer()" class="btn btn-primary" id="submit-answer">
            <i class="fas fa-check"></i> Submit Answer
          </button>
        </div>
      </div>
    `
  }

  renderAnswerOptions(question) {
    switch (question.type) {
      case 'multiple-choice':
        return question.options.map((option, index) => `
          <label class="answer-option">
            <input type="radio" name="answer" value="${option}" id="option-${index}">
            <span>${option}</span>
          </label>
        `).join('')
        
      case 'true-false':
        return `
          <label class="answer-option">
            <input type="radio" name="answer" value="True" id="option-true">
            <span>True</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="answer" value="False" id="option-false">
            <span>False</span>
          </label>
        `
        
      case 'fill-blank':
        return `<input type="text" id="fill-blank-answer" placeholder="Type your answer here...">`
        
      case 'scenario':
        return `<textarea id="scenario-answer" placeholder="Describe your response..." rows="4"></textarea>`
        
      default:
        return '<p>Question type not supported</p>'
    }
  }

  // Utility methods for advanced features
  shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  generateIncorrectProcedures() {
    return [
      'Continue working without cleaning',
      'Ignore the situation',
      'Use the same equipment',
      'Don\'t notify anyone'
    ]
  }

  showError(message) {
    const app = document.getElementById('app')
    app.innerHTML = `
      <div class="error-container">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>Training Error</h2>
        <p>${message}</p>
        <button onclick="training.renderDashboard()" class="btn btn-primary">
          Return to Dashboard
        </button>
      </div>
    `
  }

  // Placeholder methods for interactions - implement based on question type
  submitServiceResponse() { console.log('Service response submitted') }
  submitPOSOrder() { console.log('POS order submitted') }
  submitSafetyResponse() { console.log('Safety response submitted') }
  submitWineChoice() { console.log('Wine choice submitted') }
  submitAnswer() { console.log('Standard answer submitted') }
  
  initializePOSInterface(pos) { console.log('POS interface initialized') }
  selectWine(wineName) { console.log('Wine selected:', wineName) }
}

// Initialize the advanced training platform
let training
document.addEventListener('DOMContentLoaded', () => {
  training = new CandlCrewAdvancedTraining()
})