import { Hono } from 'hono'
import { handle } from 'hono/netlify'
import { cors } from 'hono/cors'
import { quizData, gameConfig } from '../../src/quiz-data.ts'

const app = new Hono().basePath('/api')

// Enable CORS
app.use('/*', cors())

// API Routes
app.get('/sections', (c) => {
  const sections = quizData.map(section => ({
    id: section.id,
    title: section.title,
    description: section.description,
    questionCount: section.questions.length,
    passingScore: section.passingScore
  }))
  return c.json({ sections, gameConfig })
})

app.get('/section/:id', (c) => {
  const sectionId = c.req.param('id')
  const section = quizData.find(s => s.id === sectionId)
  
  if (!section) {
    return c.json({ error: 'Section not found' }, 404)
  }
  
  return c.json(section)
})

app.post('/progress', (c) => {
  return c.json({ success: true })
})

app.get('/health', (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    sections: quizData.length,
    totalQuestions: quizData.reduce((acc, section) => acc + section.questions.length, 0)
  })
})

export default handle(app)