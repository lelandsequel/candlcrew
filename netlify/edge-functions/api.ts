import { Hono } from 'hono'
import { handle } from 'hono/netlify'
import { cors } from 'hono/cors'
import { quizData, gameConfig, EmployeeProgress, RestaurantAnalytics } from '../../src/quiz-data.ts'
import { beverageTrainingData } from '../../src/beverage-training-data.ts'
import { candlCrewBeveragePairings, getPairingsByDish, getPairingsByCategory } from '../../src/beverage-menu-pairings.ts'

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

// Beverage Training Endpoints
app.get('/beverages', (c) => {
  return c.json({
    categories: beverageTrainingData.map(category => ({
      id: category.id,
      name: category.name,
      description: category.description,
      certificationLevel: category.certificationLevel,
      estimatedStudyTime: category.estimatedStudyTime,
      sectionCount: category.sections.length
    }))
  })
})

app.get('/beverage/:categoryId', (c) => {
  const categoryId = c.req.param('categoryId')
  const category = beverageTrainingData.find(cat => cat.id === categoryId)
  
  if (!category) {
    return c.json({ error: 'Beverage category not found' }, 404)
  }
  
  return c.json(category)
})

app.get('/beverage/:categoryId/section/:sectionId', (c) => {
  const categoryId = c.req.param('categoryId')
  const sectionId = c.req.param('sectionId')
  
  const category = beverageTrainingData.find(cat => cat.id === categoryId)
  if (!category) {
    return c.json({ error: 'Beverage category not found' }, 404)
  }
  
  const section = category.sections.find(sec => sec.id === sectionId)
  if (!section) {
    return c.json({ error: 'Section not found' }, 404)
  }
  
  return c.json(section)
})

app.get('/pairing-recommendations/:dishId', (c) => {
  const dishId = c.req.param('dishId')
  const pairing = getPairingsByDish(dishId)
  
  if (!pairing) {
    return c.json({
      error: 'Dish not found',
      availableDishes: candlCrewBeveragePairings.map(p => p.dishId)
    }, 404)
  }
  
  return c.json(pairing)
})

app.get('/pairings/category/:category', (c) => {
  const category = c.req.param('category')
  const pairings = getPairingsByCategory(category)
  
  return c.json({
    category,
    pairings,
    count: pairings.length
  })
})

app.get('/pairings/all', (c) => {
  return c.json({
    pairings: candlCrewBeveragePairings,
    categories: [...new Set(candlCrewBeveragePairings.map(p => p.category))],
    totalPairings: candlCrewBeveragePairings.length
  })
})

app.get('/health', (c) => {
  const beverageQuestionCount = beverageTrainingData.reduce((acc, category) => 
    acc + category.sections.reduce((secAcc, section) => secAcc + section.questions.length, 0), 0)
  
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    sections: quizData.length,
    totalQuestions: quizData.reduce((acc, section) => acc + section.questions.length, 0),
    beverageCategories: beverageTrainingData.length,
    beverageQuestions: beverageQuestionCount,
    menuPairings: candlCrewBeveragePairings.length,
    features: [
      'Core Menu Training (11 sections)',
      'Table Service Simulator', 
      'POS Training System',
      'Food Safety Certification',
      'Wine Sommelier Level 1',
      'Beer Cicerone Level 1',
      'Whiskey Specialist Program',
      'Tequila Master Certification',
      'Rum Captain Training',
      'Professional Beverage Service',
      'Comprehensive Menu Pairings',
      'Progress Analytics',
      'Badge & Achievement System',
      'Role-Based Certifications',
      'Manager Reporting Dashboard'
    ],
    certificationLevels: [
      'Server Certification',
      'Bartender Master',
      'Sommelier Professional',
      'Kitchen Staff',
      'Management Complete'
    ],
    version: '3.0.0-beverage-master'
  })
})

export default handle(app)