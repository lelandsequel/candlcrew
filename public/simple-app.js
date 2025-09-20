// CandlCrew Restaurant Training Game - SIMPLE WORKING VERSION

class CandlCrewTrainingGame {
  constructor() {
    this.currentMode = null
    this.sections = []
    this.currentSection = null
    this.currentQuestionIndex = 0
    this.score = 0
    this.answers = []
    this.startTime = null
    
    this.initGame()
  }

  async initGame() {
    try {
      console.log('Loading sections...')
      const response = await axios.get('/api/sections')
      this.sections = response.data.sections.slice(0, 11) // Only original 11 sections
      console.log('Loaded sections:', this.sections.length)
      this.hideLoading()
      this.renderSections()
    } catch (error) {
      console.error('Failed to load quiz data:', error)
      this.showError('Failed to load quiz data. Please refresh the page.')
    }
  }

  hideLoading() {
    document.getElementById('loading-screen').classList.add('hidden')
    document.getElementById('game-container').classList.remove('hidden')
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
        <div class="flex">
          <span><i class="fas fa-question-circle"></i> ${section.questions?.length || section.questionCount || 0} questions</span>
          <span><i class="fas fa-target"></i> ${section.passingScore}% to pass</span>
        </div>
        <button>
          <i class="fas fa-play"></i>Start Training
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
      this.startTime = Date.now()
      
      this.showQuiz()
      this.renderQuestion()
    } catch (error) {
      console.error('Failed to load section:', error)
      alert('Failed to load quiz section. Please try again.')
    }
  }

  showSections() {
    document.getElementById('quiz-container').classList.add('hidden')
    document.getElementById('results-container').classList.add('hidden')
    document.getElementById('sections-container').parentElement.classList.remove('hidden')
  }

  showQuiz() {
    document.getElementById('sections-container').parentElement.classList.add('hidden')
    document.getElementById('quiz-container').classList.remove('hidden')
    document.getElementById('results-container').classList.add('hidden')
  }

  renderQuestion() {
    if (!this.currentSection || !this.currentSection.questions) return
    
    const question = this.currentSection.questions[this.currentQuestionIndex]
    if (!question) return

    // Update progress
    document.getElementById('question-counter').textContent = 
      `Question ${this.currentQuestionIndex + 1} of ${this.currentSection.questions.length}`
    
    const progressPercent = ((this.currentQuestionIndex + 1) / this.currentSection.questions.length) * 100
    document.getElementById('progress-fill').style.width = `${progressPercent}%`
    
    // Update score
    const currentScore = this.answers.length > 0 ? 
      Math.round((this.answers.filter(a => a.correct).length / this.answers.length) * 100) : 0
    document.getElementById('current-score').textContent = currentScore

    // Render question
    document.getElementById('question-title').textContent = question.question
    document.getElementById('question-content').innerHTML = question.imageUrl ? 
      `<img src="${question.imageUrl}" alt="Question image" class="max-w-full h-auto rounded-lg mb-4">` : ''
    
    // Render options
    const optionsContainer = document.getElementById('options-container')
    if (question.type === 'multiple-choice') {
      optionsContainer.innerHTML = question.options.map((option, index) => `
        <label class="option-label">
          <input type="radio" name="answer" value="${option}">
          <span>${option}</span>
        </label>
      `).join('')
    } else if (question.type === 'true-false') {
      optionsContainer.innerHTML = `
        <label class="option-label">
          <input type="radio" name="answer" value="True">
          <span>True</span>
        </label>
        <label class="option-label">
          <input type="radio" name="answer" value="False">
          <span>False</span>
        </label>
      `
    }

    // Reset buttons
    document.getElementById('submit-button').classList.remove('hidden')
    document.getElementById('next-button').classList.add('hidden')
    document.getElementById('explanation').classList.add('hidden')
  }

  submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked')
    if (!selectedAnswer) {
      alert('Please select an answer before submitting.')
      return
    }

    const question = this.currentSection.questions[this.currentQuestionIndex]
    const isCorrect = selectedAnswer.value === question.correctAnswer

    this.answers.push({
      questionId: question.id,
      answer: selectedAnswer.value,
      correct: isCorrect
    })

    // Show explanation
    const explanationDiv = document.getElementById('explanation')
    explanationDiv.innerHTML = `
      <div class="explanation" style="border-left-color: ${isCorrect ? '#10b981' : '#ef4444'}; background-color: ${isCorrect ? '#f0fdf4' : '#fef2f2'};">
        <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
          <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}" style="color: ${isCorrect ? '#10b981' : '#ef4444'}; margin-right: 0.5rem;"></i>
          <span style="font-weight: 600; color: ${isCorrect ? '#065f46' : '#991b1b'};">
            ${isCorrect ? 'Correct!' : 'Incorrect'}
          </span>
        </div>
        ${question.explanation ? `<p style="color: #374151;">${question.explanation}</p>` : ''}
      </div>
    `
    explanationDiv.classList.remove('hidden')

    // Update buttons
    document.getElementById('submit-button').classList.add('hidden')
    document.getElementById('next-button').classList.remove('hidden')
  }

  nextQuestion() {
    this.currentQuestionIndex++
    
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

    document.getElementById('quiz-container').classList.add('hidden')
    document.getElementById('results-container').classList.remove('hidden')

    // Update results display
    document.getElementById('final-score').textContent = `${finalScore}%`
    document.getElementById('results-title').textContent = passed ? 'Great Job!' : 'Keep Learning!'
    document.getElementById('results-icon').className = `fas ${passed ? 'fa-trophy' : 'fa-medal'} results-icon`
    
    const message = passed ? 
      `Congratulations! You passed the ${this.currentSection.title} training with ${correctAnswers}/${totalQuestions} correct answers.` :
      `You scored ${correctAnswers}/${totalQuestions} correct. You need ${this.currentSection.passingScore}% to pass. Keep studying and try again!`
    
    document.getElementById('results-message').textContent = message
  }

  retrySection() {
    if (this.currentSection) {
      this.currentQuestionIndex = 0
      this.score = 0
      this.answers = []
      this.startTime = Date.now()
      this.showQuiz()
      this.renderQuestion()
    }
  }

  showError(message) {
    document.getElementById('loading-screen').classList.add('hidden')
    document.getElementById('game-container').classList.add('hidden')
    document.getElementById('error-container').classList.remove('hidden')
    document.getElementById('error-message').textContent = message
  }
}

// Initialize game when page loads
window.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing CandlCrew Training Game...')
  window.game = new CandlCrewTrainingGame()
})