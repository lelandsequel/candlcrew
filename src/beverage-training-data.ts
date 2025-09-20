// CandlCrew Advanced Beverage Training - Level 1 Sommelier Equivalent
// Wine • Beer • Whiskey • Tequila • Rum Mastery Programs

import { Question, QuizSection } from './quiz-data.ts'

export interface BeverageCategory {
  id: string
  name: string
  description: string
  certificationLevel: string
  estimatedStudyTime: number
  sections: QuizSection[]
}

export interface TastingNote {
  appearance: string
  aroma: string[]
  palate: string[]
  finish: string
  servingTemp: string
  glassware: string
}

export interface BeverageProduct {
  name: string
  category: string
  subcategory: string
  region: string
  abv: number
  price: number
  tastingNotes: TastingNote
  foodPairings: string[]
  serveWith: string[]
  sellingPoints: string[]
}

// ============================================
// WINE SOMMELIER LEVEL 1 CERTIFICATION
// ============================================

export const wineSommelierTraining: QuizSection[] = [
  {
    id: 'wine-fundamentals',
    title: 'Wine Fundamentals & Viticulture',
    description: 'Essential wine knowledge: grape varieties, regions, and production methods',
    passingScore: 85,
    category: 'certification',
    estimatedTime: 45,
    icon: 'fas fa-grape-cluster',
    badge: 'Wine Scholar',
    questions: [
      {
        id: 'wine-fund-1',
        type: 'multiple-choice',
        question: 'What are the "Noble Grapes" of Bordeaux red wines?',
        options: [
          'Pinot Noir, Chardonnay, Riesling',
          'Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, Malbec',
          'Tempranillo, Garnacha, Graciano',
          'Sangiovese, Nebbiolo, Barbera'
        ],
        correctAnswer: 'Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, Malbec',
        explanation: 'These five grapes form the foundation of Bordeaux blends and are considered among the world\'s finest red wine grapes.',
        difficulty: 'medium'
      },
      {
        id: 'wine-fund-2',
        type: 'multiple-choice',
        question: 'What does "terroir" mean in wine terms?',
        options: [
          'The winemaker\'s technique',
          'The combination of soil, climate, topography, and tradition that gives wine its unique character',
          'The age of the vineyard',
          'The type of oak barrels used'
        ],
        correctAnswer: 'The combination of soil, climate, topography, and tradition that gives wine its unique character',
        explanation: 'Terroir encompasses all environmental factors that influence grape growing and wine character.',
        difficulty: 'easy'
      },
      {
        id: 'wine-fund-3',
        type: 'multiple-choice',
        question: 'Which Portuguese wine region produces Vinho Verde?',
        options: ['Douro', 'Minho', 'Alentejo', 'Dão'],
        correctAnswer: 'Minho',
        explanation: 'Minho region in northwest Portugal produces the light, refreshing Vinho Verde wines.',
        difficulty: 'medium'
      },
      {
        id: 'wine-fund-4',
        type: 'true-false',
        question: 'Malolactic fermentation converts harsh malic acid into softer lactic acid.',
        correctAnswer: 'True',
        explanation: 'This secondary fermentation creates the buttery, creamy textures in wines like Chardonnay.',
        difficulty: 'medium'
      },
      {
        id: 'wine-fund-5',
        type: 'fill-blank',
        question: 'The ideal serving temperature for full-bodied red wines is ______°F to ______°F.',
        correctAnswer: ['60', '68'],
        explanation: 'Full-bodied reds show best at cellar temperature, allowing their complex flavors to express fully.',
        difficulty: 'medium'
      },
      {
        id: 'wine-fund-6',
        type: 'multiple-choice',
        question: 'What makes Champagne legally "Champagne"?',
        options: [
          'Any sparkling wine can be called Champagne',
          'Must be made in the Champagne region of France using traditional method',
          'Must contain at least 12% alcohol',
          'Must be aged for 5 years minimum'
        ],
        correctAnswer: 'Must be made in the Champagne region of France using traditional method',
        explanation: 'Champagne is a protected designation - only sparkling wine from Champagne, France can use this name.',
        difficulty: 'easy'
      }
    ]
  },
  
  {
    id: 'wine-service',
    title: 'Wine Service & Presentation',
    description: 'Professional wine service, glassware selection, and customer presentation',
    passingScore: 90,
    category: 'practical',
    estimatedTime: 30,
    icon: 'fas fa-wine-glass',
    questions: [
      {
        id: 'wine-serv-1',
        type: 'multiple-choice',
        question: 'What is the correct order for wine service?',
        options: [
          'Pour, present label, taste, approve',
          'Present label, open, pour taste, get approval, serve table',
          'Open, taste, pour, present',
          'Taste first, then present to customer'
        ],
        correctAnswer: 'Present label, open, pour taste, get approval, serve table',
        explanation: 'Always show the label first for confirmation, then follow proper tasting protocol.',
        difficulty: 'medium'
      },
      {
        id: 'wine-serv-2',
        type: 'multiple-choice',
        question: 'How full should you fill a wine glass?',
        options: ['To the rim', 'Half full', 'One-third full', 'Two-thirds full'],
        correctAnswer: 'One-third full',
        explanation: 'This allows room for swirling and concentrates aromas in the bowl of the glass.',
        difficulty: 'easy'
      },
      {
        id: 'wine-serv-3',
        type: 'scenario',
        question: 'A customer complains their Pinot Noir tastes "off" and wants to return it. How do you handle this professionally?',
        correctAnswer: 'Apologize, taste it yourself (if policy allows), offer a replacement or different wine, never argue about taste preferences',
        explanation: 'Customer satisfaction is paramount. Wine is subjective, and a professional server accommodates preferences.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'wine-regions',
    title: 'Major Wine Regions & Styles',
    description: 'World wine regions, key characteristics, and style identification',
    passingScore: 85,
    category: 'knowledge',
    estimatedTime: 40,
    icon: 'fas fa-globe',
    questions: [
      {
        id: 'wine-reg-1',
        type: 'multiple-choice',
        question: 'Which Portuguese region is famous for Port wine?',
        options: ['Vinho Verde', 'Douro', 'Alentejo', 'Bairrada'],
        correctAnswer: 'Douro',
        explanation: 'The Douro Valley produces both Port wines and excellent dry reds and whites.',
        difficulty: 'easy'
      },
      {
        id: 'wine-reg-2',
        type: 'multiple-choice',
        question: 'What grape variety dominates Burgundy red wines?',
        options: ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Syrah'],
        correctAnswer: 'Pinot Noir',
        explanation: 'Burgundy\'s red wines are exclusively Pinot Noir, showing incredible terroir expression.',
        difficulty: 'medium'
      }
    ]
  }
]

// ============================================
// BEER CICERONE LEVEL 1 CERTIFICATION
// ============================================

export const beerCiceroneTraining: QuizSection[] = [
  {
    id: 'beer-fundamentals',
    title: 'Beer Fundamentals & Brewing',
    description: 'Essential brewing knowledge: ingredients, process, and beer styles',
    passingScore: 85,
    category: 'certification',
    estimatedTime: 40,
    icon: 'fas fa-beer',
    badge: 'Beer Expert',
    questions: [
      {
        id: 'beer-fund-1',
        type: 'multiple-choice',
        question: 'What are the four essential ingredients in beer?',
        options: [
          'Water, malt, hops, yeast',
          'Water, barley, sugar, alcohol',
          'Malt, hops, corn, yeast',
          'Water, grain, fruit, yeast'
        ],
        correctAnswer: 'Water, malt, hops, yeast',
        explanation: 'These four ingredients form the foundation of all beer, following the German Reinheitsgebot purity law.',
        difficulty: 'easy'
      },
      {
        id: 'beer-fund-2',
        type: 'multiple-choice',
        question: 'What\'s the difference between ales and lagers?',
        options: [
          'Ales are darker than lagers',
          'Ales use top-fermenting yeast at warmer temperatures, lagers use bottom-fermenting yeast at cooler temperatures',
          'Lagers are stronger than ales',
          'Ales contain hops, lagers don\'t'
        ],
        correctAnswer: 'Ales use top-fermenting yeast at warmer temperatures, lagers use bottom-fermenting yeast at cooler temperatures',
        explanation: 'This fundamental difference in yeast behavior creates distinct flavor profiles between ales and lagers.',
        difficulty: 'medium'
      },
      {
        id: 'beer-fund-3',
        type: 'multiple-choice',
        question: 'What does IBU measure in beer?',
        options: ['Alcohol content', 'Color intensity', 'Bitterness level', 'Carbonation'],
        correctAnswer: 'Bitterness level',
        explanation: 'International Bitterness Units measure the concentration of alpha acids from hops.',
        difficulty: 'medium'
      },
      {
        id: 'beer-fund-4',
        type: 'multiple-choice',
        question: 'Which Portuguese beer is most commonly served at CandlCrew?',
        options: ['Super Bock', 'Sagres', 'Cristal', 'Unicer'],
        correctAnswer: 'Sagres',
        explanation: 'Sagres is our featured Portuguese lager, representing authentic Portuguese brewing tradition.',
        difficulty: 'easy'
      },
      {
        id: 'beer-fund-5',
        type: 'true-false',
        question: 'IPA stands for India Pale Ale, originally brewed for British troops in India.',
        correctAnswer: 'True',
        explanation: 'The high hop content helped preserve the beer during long sea voyages to India.',
        difficulty: 'easy'
      }
    ]
  },

  {
    id: 'beer-styles',
    title: 'Beer Styles & Characteristics',
    description: 'Major beer styles, flavor profiles, and food pairing principles',
    passingScore: 85,
    category: 'knowledge',
    estimatedTime: 35,
    icon: 'fas fa-glass-cheers',
    questions: [
      {
        id: 'beer-style-1',
        type: 'multiple-choice',
        question: 'What beer style pairs best with spicy Portuguese chouriço?',
        options: ['Light lager', 'IPA', 'Stout', 'Wheat beer'],
        correctAnswer: 'IPA',
        explanation: 'The hop bitterness and citrus notes in IPA complement and cool spicy, fatty meats.',
        difficulty: 'medium'
      },
      {
        id: 'beer-style-2',
        type: 'multiple-choice',
        question: 'Which beer style originated in Belgium and features wild yeast fermentation?',
        options: ['Lambic', 'Pilsner', 'Porter', 'Märzen'],
        correctAnswer: 'Lambic',
        explanation: 'Lambics use wild airborne yeasts for spontaneous fermentation, creating unique sour flavors.',
        difficulty: 'hard'
      }
    ]
  }
]

// ============================================
// WHISKEY SPECIALIST CERTIFICATION
// ============================================

export const whiskeySpecialistTraining: QuizSection[] = [
  {
    id: 'whiskey-fundamentals',
    title: 'Whiskey Production & Types',
    description: 'Whiskey production methods, regional differences, and classification systems',
    passingScore: 85,
    category: 'certification',
    estimatedTime: 45,
    icon: 'fas fa-glass-whiskey',
    badge: 'Whiskey Connoisseur',
    questions: [
      {
        id: 'whiskey-fund-1',
        type: 'multiple-choice',
        question: 'What makes Scotch whisky legally "Scotch"?',
        options: [
          'Any whisky made with Scottish water',
          'Must be distilled in Scotland, aged minimum 3 years in oak, bottled at minimum 40% ABV',
          'Must use only Scottish barley',
          'Must be aged in Scotland for 12 years'
        ],
        correctAnswer: 'Must be distilled in Scotland, aged minimum 3 years in oak, bottled at minimum 40% ABV',
        explanation: 'Strict legal requirements protect the integrity and quality of Scotch whisky worldwide.',
        difficulty: 'medium'
      },
      {
        id: 'whiskey-fund-2',
        type: 'multiple-choice',
        question: 'What\'s the difference between Bourbon and Tennessee whiskey?',
        options: [
          'Tennessee whiskey is aged longer',
          'Tennessee whiskey undergoes charcoal filtering (Lincoln County Process)',
          'Bourbon uses different grains',
          'They\'re exactly the same'
        ],
        correctAnswer: 'Tennessee whiskey undergoes charcoal filtering (Lincoln County Process)',
        explanation: 'The Lincoln County Process gives Tennessee whiskey its distinctive smooth character.',
        difficulty: 'medium'
      },
      {
        id: 'whiskey-fund-3',
        type: 'fill-blank',
        question: 'Bourbon must contain at least ______% corn in its mash bill.',
        correctAnswer: ['51'],
        explanation: 'This legal requirement ensures bourbon\'s characteristic sweet, corn-forward flavor profile.',
        difficulty: 'medium'
      },
      {
        id: 'whiskey-fund-4',
        type: 'multiple-choice',
        question: 'What does "single malt" mean in Scotch whisky?',
        options: [
          'Made from a single grain type',
          'Made at a single distillery from 100% malted barley',
          'Aged in a single type of barrel',
          'Made by a single master distiller'
        ],
        correctAnswer: 'Made at a single distillery from 100% malted barley',
        explanation: 'Single malt represents the purest expression of a distillery\'s character and terroir.',
        difficulty: 'medium'
      },
      {
        id: 'whiskey-fund-5',
        type: 'multiple-choice',
        question: 'Which Irish whiskey spelling includes the "e"?',
        options: ['Whisky (no e)', 'Whiskey (with e)', 'Both spellings are used', 'Neither is correct'],
        correctAnswer: 'Whiskey (with e)',
        explanation: 'Irish and American whiskeys use the "e", while Scotch, Canadian, and Japanese use "whisky".',
        difficulty: 'easy'
      }
    ]
  },

  {
    id: 'whiskey-regions',
    title: 'Whiskey Regions & Flavor Profiles',
    description: 'Major whiskey-producing regions and their distinctive characteristics',
    passingScore: 85,
    category: 'knowledge',
    estimatedTime: 35,
    icon: 'fas fa-mountain',
    questions: [
      {
        id: 'whiskey-reg-1',
        type: 'multiple-choice',
        question: 'Which Scotch region is known for peated, smoky whiskies?',
        options: ['Highlands', 'Speyside', 'Islay', 'Lowlands'],
        correctAnswer: 'Islay',
        explanation: 'Islay\'s maritime climate and peat bogs create intensely smoky, maritime-influenced whiskies.',
        difficulty: 'medium'
      },
      {
        id: 'whiskey-reg-2',
        type: 'multiple-choice',
        question: 'What gives Japanese whisky its unique character?',
        options: [
          'Different grain varieties',
          'Mizunara oak aging and Japanese water sources',
          'Higher alcohol content',
          'Longer aging periods'
        ],
        correctAnswer: 'Mizunara oak aging and Japanese water sources',
        explanation: 'Mizunara oak imparts distinctive sandalwood and coconut notes, while pure mountain water enhances clarity.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'whiskey-service',
    title: 'Whiskey Service & Appreciation',
    description: 'Professional whiskey service, glassware, and tasting techniques',
    passingScore: 90,
    category: 'practical',
    estimatedTime: 25,
    icon: 'fas fa-concierge-bell',
    questions: [
      {
        id: 'whiskey-serv-1',
        type: 'multiple-choice',
        question: 'What\'s the proper glassware for neat whiskey service?',
        options: ['Rocks glass', 'Glencairn glass or tulip-shaped nosing glass', 'Wine glass', 'Shot glass'],
        correctAnswer: 'Glencairn glass or tulip-shaped nosing glass',
        explanation: 'The tulip shape concentrates aromas while the wide bottom allows for gentle swirling.',
        difficulty: 'medium'
      },
      {
        id: 'whiskey-serv-2',
        type: 'multiple-choice',
        question: 'When should you offer water with whiskey?',
        options: ['Never', 'Only with cheap whiskey', 'Always offer it on the side', 'Only if customer requests'],
        correctAnswer: 'Always offer it on the side',
        explanation: 'A few drops of water can open up whiskey flavors and reduce alcohol burn for better appreciation.',
        difficulty: 'easy'
      }
    ]
  }
]

// ============================================
// TEQUILA SPECIALIST CERTIFICATION
// ============================================

export const tequilaSpecialistTraining: QuizSection[] = [
  {
    id: 'tequila-fundamentals',
    title: 'Tequila Production & Classification',
    description: 'Authentic tequila production, agave cultivation, and official classifications',
    passingScore: 85,
    category: 'certification',
    estimatedTime: 40,
    icon: 'fas fa-pepper-hot',
    badge: 'Tequila Master',
    questions: [
      {
        id: 'tequila-fund-1',
        type: 'multiple-choice',
        question: 'What makes tequila legally "tequila"?',
        options: [
          'Any agave-based spirit',
          'Must be made from Blue Weber agave in specific Mexican regions, minimum 51% agave',
          'Must be made in Mexico with any agave variety',
          'Must be 100% agave from anywhere in Mexico'
        ],
        correctAnswer: 'Must be made from Blue Weber agave in specific Mexican regions, minimum 51% agave',
        explanation: 'Strict denominación de origen protects tequila\'s authenticity and quality standards.',
        difficulty: 'medium'
      },
      {
        id: 'tequila-fund-2',
        type: 'multiple-choice',
        question: 'What\'s the difference between "100% de Agave" and "Mixto" tequila?',
        options: [
          'No significant difference',
          '100% agave uses only agave sugars; Mixto blends agave with other sugars (minimum 51% agave)',
          'Mixto is always better quality',
          '100% agave is always more expensive'
        ],
        correctAnswer: '100% agave uses only agave sugars; Mixto blends agave with other sugars (minimum 51% agave)',
        explanation: '100% agave tequilas offer purer agave flavor and typically higher quality than mixto tequilas.',
        difficulty: 'medium'
      },
      {
        id: 'tequila-fund-3',
        type: 'multiple-choice',
        question: 'How long does it take for Blue Weber agave to mature for harvest?',
        options: ['2-3 years', '5-6 years', '7-10 years', '15-20 years'],
        correctAnswer: '7-10 years',
        explanation: 'Agave\'s long maturation creates complex sugars that contribute to tequila\'s distinctive flavor.',
        difficulty: 'medium'
      },
      {
        id: 'tequila-fund-4',
        type: 'fill-blank',
        question: 'The heart of the agave plant used for tequila production is called the _______.',
        correctAnswer: ['piña'],
        explanation: 'The piña contains the concentrated sugars needed for fermentation and distillation.',
        difficulty: 'easy'
      },
      {
        id: 'tequila-fund-5',
        type: 'true-false',
        question: 'Mezcal and tequila are the same spirit.',
        correctAnswer: 'False',
        explanation: 'Tequila is a specific type of mezcal made only from Blue Weber agave in designated regions.',
        difficulty: 'easy'
      }
    ]
  },

  {
    id: 'tequila-categories',
    title: 'Tequila Categories & Aging',
    description: 'Understanding Blanco, Reposado, Añejo, and Extra Añejo classifications',
    passingScore: 85,
    category: 'knowledge',
    estimatedTime: 30,
    icon: 'fas fa-clock',
    questions: [
      {
        id: 'tequila-cat-1',
        type: 'multiple-choice',
        question: 'What defines Reposado tequila?',
        options: [
          'Aged 2+ months in oak',
          'Aged 2-12 months in oak',
          'Aged 1-3 years in oak',
          'Aged 3+ years in oak'
        ],
        correctAnswer: 'Aged 2-12 months in oak',
        explanation: 'Reposado ("rested") balances agave character with subtle oak influence from brief aging.',
        difficulty: 'medium'
      },
      {
        id: 'tequila-cat-2',
        type: 'multiple-choice',
        question: 'Which tequila category shows the purest agave flavor?',
        options: ['Blanco/Silver', 'Reposado', 'Añejo', 'Extra Añejo'],
        correctAnswer: 'Blanco/Silver',
        explanation: 'Unaged Blanco tequila showcases the clean, pure essence of agave without oak influence.',
        difficulty: 'easy'
      },
      {
        id: 'tequila-cat-3',
        type: 'multiple-choice',
        question: 'What food pairs excellently with Añejo tequila?',
        options: ['Raw oysters', 'Spicy ceviche', 'Dark chocolate or aged cheese', 'Light salads'],
        correctAnswer: 'Dark chocolate or aged cheese',
        explanation: 'Añejo\'s rich, complex flavors from extended oak aging complement equally rich foods.',
        difficulty: 'medium'
      }
    ]
  },

  {
    id: 'tequila-service',
    title: 'Tequila Service & Cocktails',
    description: 'Professional tequila service, glassware selection, and classic cocktails',
    passingScore: 90,
    category: 'practical',
    estimatedTime: 25,
    icon: 'fas fa-cocktail',
    questions: [
      {
        id: 'tequila-serv-1',
        type: 'multiple-choice',
        question: 'What\'s the proper way to serve premium tequila neat?',
        options: [
          'In a shot glass with salt and lime',
          'In a snifter or wine glass at room temperature',
          'Over ice in a rocks glass',
          'Mixed with lime juice'
        ],
        correctAnswer: 'In a snifter or wine glass at room temperature',
        explanation: 'Premium tequila should be sipped and savored like fine whiskey or cognac to appreciate its complexity.',
        difficulty: 'medium'
      },
      {
        id: 'tequila-serv-2',
        type: 'scenario',
        question: 'A customer wants "good tequila for sipping" and mentions they usually drink whiskey. What do you recommend and why?',
        correctAnswer: 'Recommend Añejo or Extra Añejo 100% agave tequila, explain oak aging similarities to whiskey, offer neat service in proper glassware',
        explanation: 'Aged tequilas share characteristics with aged spirits whiskey drinkers appreciate.',
        difficulty: 'hard'
      }
    ]
  }
]

// ============================================
// RUM SPECIALIST CERTIFICATION
// ============================================

export const rumSpecialistTraining: QuizSection[] = [
  {
    id: 'rum-fundamentals',
    title: 'Rum Production & Origins',
    description: 'Rum production methods, sugarcane processing, and historical context',
    passingScore: 85,
    category: 'certification',
    estimatedTime: 40,
    icon: 'fas fa-ship',
    badge: 'Rum Captain',
    questions: [
      {
        id: 'rum-fund-1',
        type: 'multiple-choice',
        question: 'What is rum made from?',
        options: [
          'Fermented grain mash',
          'Sugarcane juice or molasses',
          'Agave plant',
          'Fermented fruit'
        ],
        correctAnswer: 'Sugarcane juice or molasses',
        explanation: 'Rum\'s sweet, complex character comes from sugarcane-derived raw materials.',
        difficulty: 'easy'
      },
      {
        id: 'rum-fund-2',
        type: 'multiple-choice',
        question: 'What\'s the difference between agricultural rum (rhum agricole) and traditional rum?',
        options: [
          'Agricultural rum is organic',
          'Agricultural rum is made from fresh sugarcane juice, traditional rum from molasses',
          'Traditional rum is stronger',
          'Agricultural rum is aged longer'
        ],
        correctAnswer: 'Agricultural rum is made from fresh sugarcane juice, traditional rum from molasses',
        explanation: 'This fundamental difference creates distinct flavor profiles between the two styles.',
        difficulty: 'medium'
      },
      {
        id: 'rum-fund-3',
        type: 'multiple-choice',
        question: 'Which region is considered the birthplace of rum?',
        options: ['Jamaica', 'Barbados', 'Cuba', 'Puerto Rico'],
        correctAnswer: 'Barbados',
        explanation: 'Barbados has the oldest rum-producing traditions, dating back to the 1640s.',
        difficulty: 'medium'
      },
      {
        id: 'rum-fund-4',
        type: 'true-false',
        question: 'All rum must be aged in oak barrels.',
        correctAnswer: 'False',
        explanation: 'White/silver rums are typically unaged or briefly aged, while darker rums undergo extended aging.',
        difficulty: 'easy'
      },
      {
        id: 'rum-fund-5',
        type: 'fill-blank',
        question: 'The process of burning off alcohol vapors during distillation is called _______.',
        correctAnswer: ['heads and tails'],
        explanation: 'Removing heads and tails ensures only the pure "heart" of the distillation is kept for aging.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'rum-styles',
    title: 'Rum Styles & Regional Characteristics',
    description: 'Major rum-producing regions and their distinctive style characteristics',
    passingScore: 85,
    category: 'knowledge',
    estimatedTime: 35,
    icon: 'fas fa-globe-americas',
    questions: [
      {
        id: 'rum-style-1',
        type: 'multiple-choice',
        question: 'What characterizes Jamaican rum style?',
        options: [
          'Light and clean',
          'High ester content creating fruity, funky flavors',
          'Heavily spiced',
          'Always white/clear'
        ],
        correctAnswer: 'High ester content creating fruity, funky flavors',
        explanation: 'Jamaican rums are known for their bold, distinctive character from extended fermentation.',
        difficulty: 'medium'
      },
      {
        id: 'rum-style-2',
        type: 'multiple-choice',
        question: 'Which rum style is best for classic Daiquiri cocktails?',
        options: ['Heavy Jamaican rum', 'Light Cuban/Puerto Rican style', 'Spiced rum', 'Navy strength rum'],
        correctAnswer: 'Light Cuban/Puerto Rican style',
        explanation: 'Clean, light rums allow other ingredients to shine while providing subtle sweetness.',
        difficulty: 'medium'
      },
      {
        id: 'rum-style-3',
        type: 'multiple-choice',
        question: 'What does "Navy Strength" mean in rum terms?',
        options: [
          'Made for naval officers',
          'Bottled at 57% ABV (114 proof) - the strength where gunpowder will still ignite',
          'Aged on ships',
          'Made with seawater'
        ],
        correctAnswer: 'Bottled at 57% ABV (114 proof) - the strength where gunpowder will still ignite',
        explanation: 'This historical standard ensured rum wouldn\'t compromise gunpowder if barrels leaked.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'rum-cocktails',
    title: 'Classic Rum Cocktails & Service',
    description: 'Essential rum cocktails, proper techniques, and service standards',
    passingScore: 90,
    category: 'practical',
    estimatedTime: 30,
    icon: 'fas fa-glass-martini-alt',
    questions: [
      {
        id: 'rum-cocktail-1',
        type: 'multiple-choice',
        question: 'What are the three ingredients in a classic Daiquiri?',
        options: [
          'Rum, lime juice, simple syrup',
          'Rum, lime juice, sugar, mint',
          'Rum, lemon juice, simple syrup',
          'Rum, lime juice, triple sec'
        ],
        correctAnswer: 'Rum, lime juice, simple syrup',
        explanation: 'The classic Daiquiri is elegantly simple, showcasing quality rum with balanced acidity and sweetness.',
        difficulty: 'easy'
      },
      {
        id: 'rum-cocktail-2',
        type: 'multiple-choice',
        question: 'Which rum cocktail pairs best with our Portuguese seafood dishes?',
        options: ['Dark \'n\' Stormy', 'Caipirinha (made with cachaça)', 'Light Daiquiri or Mojito', 'Rum and Coke'],
        correctAnswer: 'Light Daiquiri or Mojito',
        explanation: 'Light, citrus-forward cocktails complement seafood without overpowering delicate flavors.',
        difficulty: 'medium'
      }
    ]
  }
]

// Export combined beverage training data
export const beverageTrainingData: BeverageCategory[] = [
  {
    id: 'wine-sommelier',
    name: 'Wine Sommelier Level 1',
    description: 'Professional wine knowledge for exceptional service and sales',
    certificationLevel: 'Level 1 Sommelier Equivalent',
    estimatedStudyTime: 120,
    sections: wineSommelierTraining
  },
  {
    id: 'beer-cicerone',
    name: 'Beer Cicerone Level 1',
    description: 'Comprehensive beer expertise and service excellence',
    certificationLevel: 'Certified Beer Server Equivalent',
    estimatedStudyTime: 75,
    sections: beerCiceroneTraining
  },
  {
    id: 'whiskey-specialist',
    name: 'Whiskey Specialist',
    description: 'Master whiskey knowledge from production to service',
    certificationLevel: 'Professional Whiskey Specialist',
    estimatedStudyTime: 105,
    sections: whiskeySpecialistTraining
  },
  {
    id: 'tequila-specialist',
    name: 'Tequila Specialist', 
    description: 'Authentic tequila expertise and premium service',
    certificationLevel: 'Certified Tequila Professional',
    estimatedStudyTime: 95,
    sections: tequilaSpecialistTraining
  },
  {
    id: 'rum-specialist',
    name: 'Rum Specialist',
    description: 'Complete rum knowledge and cocktail expertise',
    certificationLevel: 'Professional Rum Specialist',
    estimatedStudyTime: 105,
    sections: rumSpecialistTraining
  }
]