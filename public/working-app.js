// CandlCrew Restaurant Training Game - WORKING VERSION

class CandlCrewTrainingGame {
  constructor() {
    this.sections = []
    this.currentSection = null
    this.currentQuestionIndex = 0
    this.score = 0
    this.answers = []
    
    // Wait for DOM to load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initGame())
    } else {
      this.initGame()
    }
  }

  async initGame() {
    try {
      console.log('Loading sections...')
      const response = await axios.get('/api/sections')
      this.sections = response.data.sections.slice(0, 11) // Only first 11 sections
      console.log('Loaded sections:', this.sections.length)
      this.renderSections()
    } catch (error) {
      console.error('Failed to load quiz data:', error)
      document.getElementById('sections-container').innerHTML = `
        <div class="error">
          <h3>Unable to load training sections</h3>
          <p>Please refresh the page to try again.</p>
        </div>
      `
    }
  }

  renderSections() {
    const container = document.getElementById('sections-container')
    if (!container) {
      console.error('sections-container not found')
      return
    }
    
    container.innerHTML = this.sections.map(section => `
      <div class="section-card" onclick="game.startSection('${section.id}')">
        <h3>
          <i class="fas ${this.getSectionIcon(section.id)}"></i>
          ${section.title}
        </h3>
        <p>${section.description}</p>
        <div class="section-meta">
          <span><i class="fas fa-question-circle"></i> ${section.questions?.length || section.questionCount || 0} questions</span>
          <span><i class="fas fa-target"></i> ${section.passingScore}% to pass</span>
        </div>
        <div class="section-progress">
          <div class="section-progress-fill" style="width: 0%"></div>
        </div>
        <button class="btn btn-primary" onclick="event.stopPropagation(); game.startSection('${section.id}')">
          <i class="fas fa-play"></i>
          Start Training
        </button>
      </div>
    `).join('')
  }

  getSectionIcon(sectionId) {
    const icons = {
      'bread-spreads': 'fa-bread-slice',
      'petiscos': 'fa-utensils', 
      'sandwiches': 'fa-hamburger',
      'salads': 'fa-leaf',
      'soups': 'fa-bowl-hot',
      'pizza': 'fa-pizza-slice',
      'vegetarian': 'fa-seedling',
      'meat': 'fa-drumstick-bite',
      'seafood': 'fa-fish',
      'large-format': 'fa-users',
      'general': 'fa-clipboard-list'
    }
    return icons[sectionId] || 'fa-book'
  }

  async startSection(sectionId) {
    console.log('Starting section:', sectionId)
    try {
      const response = await axios.get(`/api/section/${sectionId}`)
      this.currentSection = response.data
      this.currentQuestionIndex = 0
      this.score = 0
      this.answers = []
      
      this.showGame()
      this.renderQuestion()
    } catch (error) {
      console.error('Failed to load section:', error)
      alert('Failed to load quiz section. Please try again.')
    }
  }

  showGame() {
    // Hide sections, show game
    document.querySelector('.sections-grid').classList.add('hidden')
    document.getElementById('game-container').classList.remove('hidden')
    
    // Update header
    document.getElementById('current-section').textContent = this.currentSection.title
  }

  renderQuestion() {
    if (!this.currentSection || !this.currentSection.questions) return
    
    const question = this.currentSection.questions[this.currentQuestionIndex]
    if (!question) return

    // Update progress
    const totalQuestions = this.currentSection.questions.length
    const currentNum = this.currentQuestionIndex + 1
    
    document.getElementById('question-counter').textContent = `${currentNum}/${totalQuestions}`
    document.getElementById('progress-fill').style.width = `${(currentNum / totalQuestions) * 100}%`
    
    // Update score
    const currentScore = this.answers.length > 0 ? 
      Math.round((this.answers.filter(a => a.correct).length / this.answers.length) * 100) : 0
    document.getElementById('current-score').textContent = `${currentScore}%`

    // Render question
    document.getElementById('question-content').innerHTML = `
      <h3>${question.question}</h3>
      ${question.imageUrl ? `<img src="${question.imageUrl}" alt="Question image" style="max-width: 100%; height: auto; margin: 20px 0; border-radius: 10px;">` : ''}
    `
    
    // Render options
    const optionsContainer = document.getElementById('answer-options')
    if (question.type === 'multiple-choice') {
      optionsContainer.innerHTML = question.options.map((option, index) => `
        <div class="option" onclick="game.selectOption(this, '${option}')">
          ${option}
        </div>
      `).join('')
    } else if (question.type === 'true-false') {
      optionsContainer.innerHTML = `
        <div class="option" onclick="game.selectOption(this, 'True')">True</div>
        <div class="option" onclick="game.selectOption(this, 'False')">False</div>
      `
    }

    // Reset buttons
    document.getElementById('submit-answer').disabled = true
    document.getElementById('submit-answer').classList.remove('hidden')
    document.getElementById('next-question').classList.add('hidden')
    document.getElementById('feedback').classList.add('hidden')
  }

  selectOption(element, answer) {
    // Remove selection from all options
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'))
    
    // Select this option
    element.classList.add('selected')
    this.selectedAnswer = answer
    
    // Enable submit button
    document.getElementById('submit-answer').disabled = false
  }

  submitAnswer() {
    if (!this.selectedAnswer) return

    const question = this.currentSection.questions[this.currentQuestionIndex]
    const isCorrect = this.selectedAnswer === question.correctAnswer

    this.answers.push({
      questionId: question.id,
      answer: this.selectedAnswer,
      correct: isCorrect
    })

    // Show feedback
    const feedbackDiv = document.getElementById('feedback')
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`
    feedbackDiv.innerHTML = `
      <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong>
      ${question.explanation ? `<p>${question.explanation}</p>` : ''}
    `
    feedbackDiv.classList.remove('hidden')

    // Update buttons
    document.getElementById('submit-answer').classList.add('hidden')
    document.getElementById('next-question').classList.remove('hidden')
  }

  nextQuestion() {
    this.currentQuestionIndex++
    this.selectedAnswer = null
    
    if (this.currentQuestionIndex >= this.currentSection.questions.length) {
      this.showResults()
    } else {
      this.renderQuestion()
    }
  }

  showResults() {
    const correctAnswers = this.answers.filter(a => a.correct).length
    const totalQuestions = this.answers.length
    const finalScore = Math.round((correctAnswers / totalQuestions) * 100)
    const passed = finalScore >= this.currentSection.passingScore

    // Hide game, show results
    document.getElementById('game-container').classList.add('hidden')
    document.getElementById('results-container').classList.remove('hidden')

    // Update results
    document.getElementById('results-title').textContent = passed ? 'Great Job!' : 'Keep Learning!'
    
    document.getElementById('results-stats').innerHTML = `
      <div style="font-size: 3rem; font-weight: bold; color: ${passed ? '#10b981' : '#f1770a'}; margin-bottom: 20px;">
        ${finalScore}%
      </div>
      <p>You scored ${correctAnswers} out of ${totalQuestions} questions correctly.</p>
      <p style="margin-top: 10px;">
        ${passed ? 
          `Congratulations! You passed the ${this.currentSection.title} training.` :
          `You need ${this.currentSection.passingScore}% to pass. Keep studying and try again!`
        }
      </p>
    `
  }
}

// Global functions for buttons
function startGame(mode) {
  console.log('Starting game in', mode, 'mode')
  // For now, just scroll to sections
  document.querySelector('.sections-grid').scrollIntoView({ behavior: 'smooth' })
}

function resetGame() {
  if (window.game && window.game.currentSection) {
    window.game.currentQuestionIndex = 0
    window.game.score = 0
    window.game.answers = []
    window.game.selectedAnswer = null
    window.game.showGame()
    window.game.renderQuestion()
  }
}

function goHome() {
  document.getElementById('game-container').classList.add('hidden')
  document.getElementById('results-container').classList.add('hidden')
  document.querySelector('.sections-grid').classList.remove('hidden')
}

// Global event handlers for game buttons
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submit-answer')
  const nextBtn = document.getElementById('next-question')
  
  if (submitBtn) {
    submitBtn.addEventListener('click', () => window.game.submitAnswer())
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => window.game.nextQuestion())
  }
})

// Initialize game
window.game = new CandlCrewTrainingGame()