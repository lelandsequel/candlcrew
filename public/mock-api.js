// Mock API for development when Edge Functions aren't available
window.mockAPI = {
  sections: [
    {
      id: 'bread-spreads',
      title: 'Bread & Spreads',
      description: 'Learn about our signature bread offerings and accompaniments',
      questionCount: 5,
      passingScore: 80,
      category: 'knowledge',
      estimatedTime: 8,
      icon: 'fas fa-bread-slice'
    },
    {
      id: 'wine-sommelier-fundamentals', 
      title: 'Wine Sommelier - Fundamentals',
      description: 'Essential wine knowledge: grape varieties, regions, and production methods',
      questionCount: 6,
      passingScore: 85,
      category: 'certification',
      estimatedTime: 45,
      icon: 'fas fa-wine-bottle',
      badge: 'Wine Scholar'
    },
    {
      id: 'beer-cicerone-fundamentals',
      title: 'Beer Cicerone - Fundamentals', 
      description: 'Essential brewing knowledge: ingredients, process, and beer styles',
      questionCount: 3,
      passingScore: 85,
      category: 'certification',
      estimatedTime: 40,
      icon: 'fas fa-beer',
      badge: 'Beer Expert'
    },
    {
      id: 'table-service',
      title: 'Table Service Simulator',
      description: 'Interactive scenarios for taking orders, handling complaints, and upselling',
      questionCount: 4,
      passingScore: 85,
      category: 'simulation',
      estimatedTime: 25,
      icon: 'fas fa-concierge-bell',
      badge: 'Service Excellence'
    }
  ],
  
  gameConfig: {
    timeLimit: 30,
    minPassingScore: 70,
    maxAttempts: 3,
    pointsPerCorrect: 10,
    bonusTimePoints: 5,
    badges: [
      { id: 'wine-scholar', name: 'Wine Scholar', icon: 'fas fa-wine-bottle' },
      { id: 'beer-expert', name: 'Beer Expert', icon: 'fas fa-beer' },
      { id: 'service-excellence', name: 'Service Excellence', icon: 'fas fa-star' }
    ]
  },

  analytics: {
    totalEmployees: 24,
    averageCompletionRate: 78.5,
    mostDifficultSections: ['wine-pairing', 'food-safety', 'large-format'],
    topPerformers: ['Maria Santos', 'John Rodriguez', 'Sarah Chen']
  }
}

// Mock axios to use our mock data
if (typeof axios !== 'undefined') {
  const originalAxios = axios
  window.axios = {
    get: (url) => {
      console.log('Mock API called:', url)
      
      if (url === '/api/sections') {
        return Promise.resolve({
          data: {
            sections: window.mockAPI.sections,
            gameConfig: window.mockAPI.gameConfig
          }
        })
      }
      
      if (url === '/api/badges') {
        return Promise.resolve({
          data: window.mockAPI.gameConfig.badges
        })
      }
      
      if (url === '/api/analytics/restaurant') {
        return Promise.resolve({
          data: window.mockAPI.analytics
        })
      }
      
      if (url.startsWith('/api/section/')) {
        const sectionId = url.split('/').pop()
        const section = window.mockAPI.sections.find(s => s.id === sectionId)
        if (section) {
          return Promise.resolve({
            data: {
              ...section,
              questions: [
                {
                  id: 'demo-1',
                  type: 'multiple-choice',
                  question: 'This is a demo question. What would you like to see?',
                  options: [
                    'More wine training',
                    'Beer knowledge', 
                    'Service scenarios',
                    'All of the above!'
                  ],
                  correctAnswer: 'All of the above!',
                  explanation: 'This training platform covers everything your restaurant staff needs to know!',
                  difficulty: 'easy'
                }
              ]
            }
          })
        }
      }
      
      // Fallback to original axios for other requests
      return originalAxios.get(url)
    }
  }
}

console.log('Mock API initialized - Edge Functions not available, using mock data')