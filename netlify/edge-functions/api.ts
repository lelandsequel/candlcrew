import { Hono } from 'hono'
import { handle } from 'hono/netlify'
import { cors } from 'hono/cors'

// Quiz Data (simplified for demo - in production you'd import from a separate file)
const quizData = [
  {
    id: 'bread-spreads',
    title: 'Bread & Spreads',
    description: 'Learn about our signature bread offerings and accompaniments',
    passingScore: 80,
    questions: [
      {
        id: 'bread-1',
        type: 'multiple-choice',
        question: 'What is included with the Daily Bread (V)?',
        options: [
          'Butter and jam',
          'House-baked focaccia & sourdough with herbed olive oil',
          'Garlic bread with marinara sauce',
          'Pita bread with hummus'
        ],
        correctAnswer: 'House-baked focaccia & sourdough with herbed olive oil',
        explanation: 'The Daily Bread is our signature vegetarian appetizer featuring fresh baked breads with herbed olive oil.',
        difficulty: 'easy'
      },
      {
        id: 'bread-2',
        type: 'true-false',
        question: 'Pão com Tomate can have jamón serrano added for an additional charge.',
        correctAnswer: 'True',
        explanation: 'Jamón serrano can be added for +$3.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'general',
    title: 'General Restaurant Knowledge',
    description: 'Important service standards and restaurant policies',
    passingScore: 90,
    questions: [
      {
        id: 'general-1',
        type: 'multiple-choice',
        question: 'What does the ★ symbol indicate on the menu?',
        options: ['Chef\'s recommendation', 'Popular item', 'Items that may be served rare', 'Spicy dish'],
        correctAnswer: 'Items that may be served rare',
        explanation: 'Important for food safety and customer awareness.',
        difficulty: 'medium'
      }
    ]
  }
]

const gameConfig = {
  timeLimit: 30,
  minPassingScore: 70,
  maxAttempts: 3,
  pointsPerCorrect: 10,
  bonusTimePoints: 5,
}

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
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default handle(app)