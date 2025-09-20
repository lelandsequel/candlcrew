import { Hono } from 'hono'
import { handle } from 'hono/netlify'
import { cors } from 'hono/cors'
import { quizData, gameConfig, EmployeeProgress, RestaurantAnalytics } from '../../src/quiz-data.ts'

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

// Employee Progress Tracking
app.post('/progress', async (c) => {
  const { employeeId, sectionId, score, timeSpent } = await c.req.json()
  
  // In a real app, this would save to a database
  // For now, return success with mock data
  return c.json({ 
    success: true, 
    employeeId,
    sectionId,
    score,
    timeSpent,
    badgesEarned: score >= 90 ? ['high-achiever'] : [],
    certificationProgress: 75
  })
})

app.get('/employee/:id/progress', (c) => {
  const employeeId = c.req.param('id')
  
  // Mock employee progress data
  const mockProgress: EmployeeProgress = {
    id: employeeId,
    name: 'Training Employee',
    role: 'server',
    startDate: '2024-01-15',
    completedSections: ['bread-spreads', 'general'],
    badges: ['food-safety-certified'],
    scores: {
      'bread-spreads': 85,
      'general': 92
    },
    certificationStatus: 'in-progress',
    weakAreas: ['wine-pairing', 'large-format'],
    strengths: ['food-safety', 'general'],
    totalTrainingTime: 120
  }
  
  return c.json(mockProgress)
})

app.get('/analytics/restaurant', (c) => {
  // Mock restaurant analytics
  const mockAnalytics: RestaurantAnalytics = {
    totalEmployees: 24,
    averageCompletionRate: 78.5,
    mostDifficultSections: ['wine-pairing', 'food-safety', 'large-format'],
    topPerformers: ['Maria Santos', 'John Rodriguez', 'Sarah Chen'],
    certificationRates: {
      server: 85,
      kitchen: 92,
      host: 78,
      manager: 100
    },
    monthlyProgress: [
      { month: '2024-01', completions: 12 },
      { month: '2024-02', completions: 18 },
      { month: '2024-03', completions: 15 }
    ]
  }
  
  return c.json(mockAnalytics)
})

app.get('/badges', (c) => {
  return c.json(gameConfig.badges)
})

app.get('/certification/:role', (c) => {
  const role = c.req.param('role') as keyof typeof gameConfig.certificationRequirements
  const requirements = gameConfig.certificationRequirements[role]
  
  return c.json({
    role,
    requiredSections: requirements,
    description: `Certification requirements for ${role} position`
  })
})

app.get('/health', (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    sections: quizData.length,
    totalQuestions: quizData.reduce((acc, section) => acc + section.questions.length, 0),
    features: [
      'Quiz System',
      'Table Service Simulator', 
      'POS Training',
      'Food Safety Certification',
      'Wine Pairing Guide',
      'Progress Tracking',
      'Badge System',
      'Manager Analytics'
    ],
    version: '2.0.0-advanced'
  })
})

export default handle(app)