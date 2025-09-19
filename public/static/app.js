// Taberna Restaurant Training Game JavaScript

class TabernaTrainingGame {
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
    
    this.initGame()
  }

  async initGame() {
    try {
      const response = await axios.get('/api/sections')
      this.sections = response.data.sections
      this.gameConfig = response.data.gameConfig
      this.renderSections()
    } catch (error) {
      console.error('Failed to load quiz data:', error)
      this.showError('Failed to load quiz data. Please refresh the page.')
    }
  }

  renderSections() {
    const container = document.getElementById('sections-container')
    
    container.innerHTML = this.sections.map(section => `
      <div class="section-card" onclick="game.startSection('${section.id}')">
        <h3>
          <i class="fas ${this.getSectionIcon(section.id)}"></i>
          ${section.title}
        </h3>
        <p>${section.description}</p>
        <div class="section-meta">
          <span><i class="fas fa-question-circle"></i> ${section.questionCount} questions</span>
          <span><i class="fas fa-target"></i> ${section.passingScore}% to pass</span>
        </div>
        <div class="section-progress">
          <div class="section-progress-fill" style="width: ${this.getSectionProgress(section.id)}%"></div>
        </div>
        <div class="mt-4">
          <button class="btn btn-primary" onclick="event.stopPropagation(); game.startSection('${section.id}')">
            <i class="fas fa-play"></i>
            Start Section
          </button>
        </div>
      </div>
    `).join('')
  }

  getSectionIcon(sectionId) {
    const icons = {
      'bread-spreads': 'fa-bread-slice',
      'petiscos': 'fa-pepper-hot',
      'sandwiches': 'fa-hamburger',
      'salads': 'fa-leaf',
      'soups': 'fa-bowl-food',
      'pizza': 'fa-pizza-slice',
      'vegetarian': 'fa-seedling',
      'meat': 'fa-drumstick-bite',
      'seafood': 'fa-fish',
      'large-format': 'fa-users',
      'general': 'fa-clipboard-list'
    }
    return icons[sectionId] || 'fa-utensils'
  }

  getSectionProgress(sectionId) {
    // In a real app, this would come from saved progress
    return Math.floor(Math.random() * 100)
  }

  startGame(mode) {
    this.currentMode = mode
    document.querySelector('.hero-section').style.display = 'none'
    document.querySelector('.sections-grid').style.display = 'block'
    
    // Update instructions based on mode
    const instructions = {
      practice: 'Choose a section to practice. Take your time and learn!',
      timed: 'Each question has a time limit. Answer quickly for bonus points!',
      certification: 'Complete all sections with 80%+ to earn your certificate!'
    }
    
    document.querySelector('.sections-grid h2').textContent = 
      `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode - ${instructions[mode]}`
  }

  async startSection(sectionId) {
    try {
      const response = await axios.get(`/api/section/${sectionId}`)
      this.currentSection = response.data
      this.currentQuestionIndex = 0
      this.score = 0
      this.answers = []
      this.startTime = Date.now()
      
      this.showGameContainer()
      this.renderQuestion()
      
      if (this.currentMode === 'timed') {
        this.startTimer()
      }
    } catch (error) {
      console.error('Failed to load section:', error)
      this.showError('Failed to load section. Please try again.')
    }
  }

  showGameContainer() {
    document.querySelector('.sections-grid').style.display = 'none'
    document.getElementById('game-container').classList.remove('hidden')
    
    // Update header info
    document.getElementById('current-section').textContent = this.currentSection.title
    document.getElementById('current-score').textContent = this.score
    this.updateProgress()
  }

  renderQuestion() {
    const question = this.currentSection.questions[this.currentQuestionIndex]
    const questionContent = document.getElementById('question-content')
    const answerOptions = document.getElementById('answer-options')
    
    // Update question counter
    document.getElementById('question-counter').textContent = 
      `${this.currentQuestionIndex + 1}/${this.currentSection.questions.length}`
    
    // Render question based on type
    switch (question.type) {
      case 'multiple-choice':
        this.renderMultipleChoice(question, questionContent, answerOptions)
        break
      case 'true-false':
        this.renderTrueFalse(question, questionContent, answerOptions)
        break
      case 'fill-blank':
        this.renderFillBlank(question, questionContent, answerOptions)
        break
      case 'scenario':
        this.renderScenario(question, questionContent, answerOptions)
        break
    }
    
    // Reset buttons
    document.getElementById('submit-answer').disabled = true
    document.getElementById('submit-answer').classList.remove('hidden')
    document.getElementById('next-question').classList.add('hidden')
    document.getElementById('feedback').classList.add('hidden')
  }

  renderMultipleChoice(question, questionContent, answerOptions) {
    questionContent.innerHTML = `
      <h3>${question.question}</h3>
    `
    
    answerOptions.innerHTML = question.options.map((option, index) => `
      <div class="answer-option" onclick="game.selectOption(${index})">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span>${option}</span>
      </div>
    `).join('')
  }

  renderTrueFalse(question, questionContent, answerOptions) {
    questionContent.innerHTML = `
      <h3>${question.question}</h3>
    `
    
    answerOptions.innerHTML = `
      <div class="answer-option" onclick="game.selectOption(0)">
        <span class="option-letter">T</span>
        <span>True</span>
      </div>
      <div class="answer-option" onclick="game.selectOption(1)">
        <span class="option-letter">F</span>
        <span>False</span>
      </div>
    `
  }

  renderFillBlank(question, questionContent, answerOptions) {
    const blanks = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
    let questionText = question.question
    
    // Replace blanks with input fields
    blanks.forEach((_, index) => {
      questionText = questionText.replace('_______', 
        `<input type="text" class="blank-input" id="blank-${index}" onchange="game.checkBlanks()">`
      )
    })
    
    questionContent.innerHTML = `<h3>${questionText}</h3>`
    answerOptions.innerHTML = ''
  }

  renderScenario(question, questionContent, answerOptions) {
    questionContent.innerHTML = `
      <h3>${question.question}</h3>
      <p class="text-sm text-gray-600 mt-2">Provide a detailed answer in the text area below.</p>
    `
    
    answerOptions.innerHTML = `
      <textarea 
        id="scenario-answer" 
        class="w-full p-4 border-2 border-gray-300 rounded-lg"
        rows="4" 
        placeholder="Enter your answer here..."
        onchange="game.checkScenario()"
      ></textarea>
    `
  }

  selectOption(index) {
    // Clear previous selections
    document.querySelectorAll('.answer-option').forEach(option => {
      option.classList.remove('selected')
    })
    
    // Select current option
    document.querySelectorAll('.answer-option')[index].classList.add('selected')
    this.selectedAnswer = index
    document.getElementById('submit-answer').disabled = false
  }

  checkBlanks() {
    const question = this.currentSection.questions[this.currentQuestionIndex]
    const blanks = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
    
    let allFilled = true
    for (let i = 0; i < blanks.length; i++) {
      const input = document.getElementById(`blank-${i}`)
      if (!input || !input.value.trim()) {
        allFilled = false
        break
      }
    }
    
    document.getElementById('submit-answer').disabled = !allFilled
  }

  checkScenario() {
    const textarea = document.getElementById('scenario-answer')
    document.getElementById('submit-answer').disabled = !textarea.value.trim()
  }

  submitAnswer() {
    const question = this.currentSection.questions[this.currentQuestionIndex]
    let userAnswer = null
    let isCorrect = false
    
    // Get user answer based on question type
    switch (question.type) {
      case 'multiple-choice':
        userAnswer = question.options[this.selectedAnswer]
        isCorrect = userAnswer === question.correctAnswer
        break
        
      case 'true-false':
        userAnswer = this.selectedAnswer === 0 ? 'True' : 'False'
        isCorrect = userAnswer === question.correctAnswer
        break
        
      case 'fill-blank':
        const blanks = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
        userAnswer = []
        isCorrect = true
        
        for (let i = 0; i < blanks.length; i++) {
          const input = document.getElementById(`blank-${i}`)
          const value = input.value.trim().toLowerCase()
          userAnswer.push(value)
          
          if (value !== blanks[i].toLowerCase()) {
            isCorrect = false
          }
        }
        break
        
      case 'scenario':
        userAnswer = document.getElementById('scenario-answer').value.trim()
        // For scenarios, we'll consider any non-empty answer as correct for now
        // In a real app, this could use AI to grade or require manual review
        isCorrect = userAnswer.length > 20 // Require at least 20 characters
        break
    }
    
    // Record answer
    this.answers.push({
      questionId: question.id,
      userAnswer,
      correctAnswer: question.correctAnswer,
      isCorrect,
      timeSpent: this.currentMode === 'timed' ? this.gameConfig.timeLimit - this.timeRemaining : null
    })
    
    // Update score
    if (isCorrect) {
      let points = this.gameConfig.pointsPerCorrect
      if (this.currentMode === 'timed' && this.timeRemaining > this.gameConfig.timeLimit / 2) {
        points += this.gameConfig.bonusTimePoints
      }
      this.score += points
      document.getElementById('current-score').textContent = this.score
    }
    
    // Show feedback
    this.showFeedback(isCorrect, question)
    
    // Hide submit button, show next button
    document.getElementById('submit-answer').classList.add('hidden')
    document.getElementById('next-question').classList.remove('hidden')
    
    // Stop timer for this question
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  showFeedback(isCorrect, question) {
    const feedback = document.getElementById('feedback')
    feedback.classList.remove('hidden', 'correct', 'incorrect')
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect')
    
    let feedbackHTML = `
      <h4>
        <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        ${isCorrect ? 'Correct!' : 'Incorrect'}
      </h4>
    `
    
    if (!isCorrect) {
      if (question.type === 'multiple-choice' || question.type === 'true-false') {
        feedbackHTML += `<p><strong>Correct answer:</strong> ${question.correctAnswer}</p>`
      } else if (question.type === 'fill-blank') {
        const blanks = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
        feedbackHTML += `<p><strong>Correct answer:</strong> ${blanks.join(', ')}</p>`
      }
    }
    
    if (question.explanation) {
      feedbackHTML += `<p>${question.explanation}</p>`
    }
    
    feedback.innerHTML = feedbackHTML
    
    // Highlight correct/incorrect options for multiple choice
    if (question.type === 'multiple-choice' || question.type === 'true-false') {
      const options = document.querySelectorAll('.answer-option')
      options.forEach((option, index) => {
        const text = option.querySelector('span:last-child').textContent
        if (text === question.correctAnswer) {
          option.classList.add('correct')
        } else if (index === this.selectedAnswer && !isCorrect) {
          option.classList.add('incorrect')
        }
      })
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++
    
    if (this.currentQuestionIndex < this.currentSection.questions.length) {
      this.renderQuestion()
      this.updateProgress()
      
      if (this.currentMode === 'timed') {
        this.startTimer()
      }
    } else {
      this.finishSection()
    }
  }

  startTimer() {
    this.timeRemaining = this.gameConfig.timeLimit
    document.getElementById('timer').textContent = this.timeRemaining
    
    this.timer = setInterval(() => {
      this.timeRemaining--
      document.getElementById('timer').textContent = this.timeRemaining
      
      if (this.timeRemaining <= 5) {
        document.getElementById('timer').classList.add('warning')
      }
      
      if (this.timeRemaining <= 0) {
        clearInterval(this.timer)
        this.submitAnswer() // Auto-submit when time runs out
      }
    }, 1000)
  }

  updateProgress() {
    const progress = ((this.currentQuestionIndex + 1) / this.currentSection.questions.length) * 100
    document.getElementById('progress-fill').style.width = `${progress}%`
  }

  finishSection() {
    const totalQuestions = this.currentSection.questions.length
    const correctAnswers = this.answers.filter(a => a.isCorrect).length
    const percentage = Math.round((correctAnswers / totalQuestions) * 100)
    const passed = percentage >= this.currentSection.passingScore
    const totalTime = Math.round((Date.now() - this.startTime) / 1000)
    
    document.getElementById('game-container').classList.add('hidden')
    document.getElementById('results-container').classList.remove('hidden')
    
    // Update results
    document.getElementById('results-title').textContent = 
      passed ? '🎉 Congratulations!' : '📚 Keep Studying!'
    
    document.getElementById('results-stats').innerHTML = `
      <div class="result-stat">
        <span class="result-stat-value">${percentage}%</span>
        <div class="result-stat-label">Final Score</div>
      </div>
      <div class="result-stat">
        <span class="result-stat-value">${correctAnswers}/${totalQuestions}</span>
        <div class="result-stat-label">Questions Correct</div>
      </div>
      <div class="result-stat">
        <span class="result-stat-value">${this.score}</span>
        <div class="result-stat-label">Points Earned</div>
      </div>
      <div class="result-stat">
        <span class="result-stat-value">${totalTime}s</span>
        <div class="result-stat-label">Time Taken</div>
      </div>
    `
    
    if (passed && this.currentMode === 'certification') {
      this.showCertificate()
    }
  }

  showCertificate() {
    document.getElementById('results-stats').insertAdjacentHTML('beforeend', `
      <div class="certificate mt-4">
        <div class="certificate-title">
          <i class="fas fa-certificate"></i>
          Certificate of Completion
        </div>
        <div class="certificate-body">
          This certifies that you have successfully completed the<br>
          <strong>${this.currentSection.title}</strong><br>
          training section at Taberna Restaurant
        </div>
      </div>
    `)
    
    // Add confetti effect
    this.addConfetti()
  }

  addConfetti() {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div')
        confetti.className = 'confetti'
        confetti.style.left = Math.random() * 100 + 'vw'
        confetti.style.animationDelay = Math.random() * 3 + 's'
        confetti.style.backgroundColor = ['#f1770a', '#4299e1', '#38a169', '#6b46c1'][Math.floor(Math.random() * 4)]
        document.body.appendChild(confetti)
        
        setTimeout(() => confetti.remove(), 3000)
      }, i * 50)
    }
  }

  resetGame() {
    document.getElementById('results-container').classList.add('hidden')
    document.querySelector('.hero-section').style.display = 'block'
    document.querySelector('.sections-grid').style.display = 'none'
    
    // Reset game state
    this.currentMode = null
    this.currentSection = null
    this.currentQuestionIndex = 0
    this.score = 0
    this.answers = []
    
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  goHome() {
    this.resetGame()
  }

  showError(message) {
    const errorDiv = document.createElement('div')
    errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50'
    errorDiv.innerHTML = `
      <div class="flex items-center gap-2">
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-2">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `
    document.body.appendChild(errorDiv)
    
    setTimeout(() => errorDiv.remove(), 5000)
  }
}

// Global functions for HTML onclick events
function startGame(mode) {
  game.startGame(mode)
}

function resetGame() {
  game.resetGame()
}

function goHome() {
  game.goHome()
}

// Initialize game when page loads
let game
document.addEventListener('DOMContentLoaded', () => {
  game = new TabernaTrainingGame()
  
  // Add event listeners
  document.getElementById('submit-answer').addEventListener('click', () => game.submitAnswer())
  document.getElementById('next-question').addEventListener('click', () => game.nextQuestion())
})