import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { quizData, gameConfig } from './data/quiz-data'

const app = new Hono()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

app.use(renderer)

// Main application route
app.get('/', (c) => {
  return c.render(
    <div id="app">
      <div class="hero-section">
        <h1 class="hero-title">
          <i class="fas fa-utensils"></i>
          CandlCrew Restaurant Training Game
        </h1>
        <p class="hero-subtitle">Master our menu, ace your training!</p>
        <div class="game-modes">
          <button class="btn btn-primary" onclick="startGame('practice')">
            <i class="fas fa-play"></i>
            Practice Mode
          </button>
          <button class="btn btn-secondary" onclick="startGame('timed')">
            <i class="fas fa-clock"></i>
            Timed Challenge
          </button>
          <button class="btn btn-success" onclick="startGame('certification')">
            <i class="fas fa-certificate"></i>
            Certification Test
          </button>
        </div>
      </div>

      <div class="sections-grid">
        <h2>Training Sections</h2>
        <div id="sections-container" class="sections"></div>
      </div>

      <div id="game-container" class="game-container hidden">
        <div class="game-header">
          <div class="progress-info">
            <span id="current-section">Section</span>
            <span id="question-counter">1/5</span>
            <div class="progress-bar">
              <div id="progress-fill" class="progress-fill"></div>
            </div>
          </div>
          <div class="game-stats">
            <div class="stat">
              <span>Score: </span><span id="current-score">0</span>
            </div>
            <div class="stat">
              <span>Time: </span><span id="timer">--</span>
            </div>
          </div>
        </div>

        <div class="question-container">
          <div id="question-content"></div>
          <div id="answer-options" class="answer-options"></div>
          <div class="question-actions">
            <button id="submit-answer" class="btn btn-primary" disabled>Submit Answer</button>
            <button id="next-question" class="btn btn-secondary hidden">Next Question</button>
          </div>
        </div>

        <div id="feedback" class="feedback hidden"></div>
      </div>

      <div id="results-container" class="results-container hidden">
        <div class="results-content">
          <h2 id="results-title">Quiz Complete!</h2>
          <div id="results-stats"></div>
          <div class="results-actions">
            <button class="btn btn-primary" onclick="resetGame()">Try Again</button>
            <button class="btn btn-secondary" onclick="goHome()">Home</button>
          </div>
        </div>
      </div>
    </div>
  )
})

// API Routes
app.get('/api/sections', (c) => {
  const sections = quizData.map(section => ({
    id: section.id,
    title: section.title,
    description: section.description,
    questionCount: section.questions.length,
    passingScore: section.passingScore
  }))
  return c.json({ sections, gameConfig })
})

app.get('/api/section/:id', (c) => {
  const sectionId = c.req.param('id')
  const section = quizData.find(s => s.id === sectionId)
  
  if (!section) {
    return c.json({ error: 'Section not found' }, 404)
  }
  
  return c.json(section)
})

app.post('/api/progress', (c) => {
  // In a real app, this would save to a database
  // For now, we'll just return success
  return c.json({ success: true })
})

export default app
