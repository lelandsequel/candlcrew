import { Hono } from 'hono'
import { handle } from 'hono/netlify'
import { cors } from 'hono/cors'

const app = new Hono().basePath('/api')

// Enable CORS
app.use('/*', cors())

// Simple test data
const simpleSections = [
  {
    id: 'bread-spreads',
    title: 'Bread & Spreads',
    description: 'Learn about our signature bread offerings and accompaniments',
    questionCount: 5,
    passingScore: 80
  },
  {
    id: 'wine-sommelier-fundamentals',
    title: 'Wine Sommelier - Fundamentals',
    description: 'Essential wine knowledge: grape varieties, regions, and production methods',
    questionCount: 6,
    passingScore: 85
  }
]

const simpleGameConfig = {
  timeLimit: 30,
  minPassingScore: 70,
  maxAttempts: 3,
  pointsPerCorrect: 10,
  bonusTimePoints: 5
}

// API Routes
app.get('/sections', (c) => {
  return c.json({ 
    sections: simpleSections, 
    gameConfig: simpleGameConfig 
  })
})

app.get('/health', (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    sections: simpleSections.length,
    message: 'Simple API working',
    version: '3.0.0-debug'
  })
})

export default handle(app)