// CandlCrew Restaurant Training Quiz Data
// Parsed from comprehensive staff training manual

export interface Question {
  id: string
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'scenario'
  question: string
  options?: string[]
  correctAnswer: string | string[]
  explanation?: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface QuizSection {
  id: string
  title: string
  description: string
  questions: Question[]
  passingScore: number // percentage
}

export const quizData: QuizSection[] = [
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
      },
      {
        id: 'bread-3',
        type: 'fill-blank',
        question: 'Pão com Chorizo is made with _______ bread and _______ chorizo.',
        correctAnswer: ['potato', 'Spanish'],
        explanation: 'This dish features traditional Portuguese potato bread with authentic Spanish chorizo.',
        difficulty: 'medium'
      },
      {
        id: 'bread-4',
        type: 'multiple-choice',
        question: 'What is the price of Pão com Tomate?',
        options: ['$6.50', '$10.00', '$13.00', '$15.00'],
        correctAnswer: '$10.00',
        difficulty: 'easy'
      },
      {
        id: 'bread-5',
        type: 'multiple-choice',
        question: 'Which bread item is NOT vegetarian?',
        options: ['Daily Bread', 'Pão com Tomate', 'Pão com Chorizo', 'All are vegetarian'],
        correctAnswer: 'Pão com Chorizo',
        explanation: 'Pão com Chorizo contains Spanish chorizo, making it non-vegetarian.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'petiscos',
    title: 'Petiscos (Small Plates)',
    description: 'Master our selection of Portuguese-inspired small plates and appetizers',
    passingScore: 80,
    questions: [
      {
        id: 'petiscos-1',
        type: 'multiple-choice',
        question: 'What type of olives are used in the Almonds & Olives dish?',
        options: ['Kalamata', 'Cerignola', 'Castelvetrano', 'Green Spanish'],
        correctAnswer: 'Cerignola',
        difficulty: 'medium'
      },
      {
        id: 'petiscos-2',
        type: 'true-false',
        question: 'Croquetas de Bacalhau contains salted cod.',
        correctAnswer: 'True',
        explanation: 'Bacalhau refers to salted cod, a cornerstone of Portuguese cuisine.',
        difficulty: 'easy'
      },
      {
        id: 'petiscos-3',
        type: 'multiple-choice',
        question: 'The Petiscos Plate includes which Portuguese cheese?',
        options: ['Manchego', 'São Jorge', 'Serra da Estrela', 'Azeitão'],
        correctAnswer: 'São Jorge',
        explanation: 'São Jorge is a traditional Portuguese cheese from the Azores.',
        difficulty: 'medium'
      },
      {
        id: 'petiscos-4',
        type: 'multiple-choice',
        question: 'What makes the Duo of Hummus unique?',
        options: [
          'It\'s made with chickpeas only',
          'It\'s baked in the pizza oven',
          'It\'s served cold',
          'It contains meat'
        ],
        correctAnswer: 'It\'s baked in the pizza oven',
        explanation: 'Our hummus gets a unique smoky flavor from our wood-fired pizza oven.',
        difficulty: 'medium'
      },
      {
        id: 'petiscos-5',
        type: 'scenario',
        question: 'A customer asks about vegan options in the petiscos section. List three items you would recommend.',
        correctAnswer: ['Almonds & Olives (VG/GF)', 'Pimentas (VG/GF)', 'Duo of Hummus (VG)'],
        explanation: 'These items are all plant-based with no animal products. Always mention dietary symbols when recommending.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    description: 'Learn about our Portuguese-inspired sandwich offerings',
    passingScore: 80,
    questions: [
      {
        id: 'sandwich-1',
        type: 'multiple-choice',
        question: 'What Portuguese bread is used in the Prego sandwich?',
        options: ['Focaccia', 'Bolo do caco', 'Ciabatta', 'Sourdough'],
        correctAnswer: 'Bolo do caco',
        explanation: 'Bolo do caco is traditional Portuguese bread from Madeira.',
        difficulty: 'medium'
      },
      {
        id: 'sandwich-2',
        type: 'multiple-choice',
        question: 'The Francesinha originates from which Portuguese city?',
        options: ['Lisbon', 'Porto', 'Coimbra', 'Faro'],
        correctAnswer: 'Porto',
        explanation: 'Francesinha is Porto\'s most famous culinary export.',
        difficulty: 'medium'
      },
      {
        id: 'sandwich-3',
        type: 'fill-blank',
        question: 'The Francesinha is covered in _______-_______ sauce.',
        correctAnswer: ['tomato', 'beer'],
        explanation: 'The signature sauce combines tomato and beer for a unique Portuguese flavor.',
        difficulty: 'medium'
      },
      {
        id: 'sandwich-4',
        type: 'true-false',
        question: 'You can add a fried egg to the Prego for an additional $2.',
        correctAnswer: 'True',
        difficulty: 'easy'
      },
      {
        id: 'sandwich-5',
        type: 'multiple-choice',
        question: 'Which sandwich requires a fork and knife?',
        options: ['Prego', 'Francesinha', 'Both', 'Neither'],
        correctAnswer: 'Francesinha',
        explanation: 'The Francesinha is too tall and saucy to eat by hand.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'salads',
    title: 'Saladas (Salads)',
    description: 'Fresh salads with Portuguese and Mediterranean influences',
    passingScore: 80,
    questions: [
      {
        id: 'salad-1',
        type: 'multiple-choice',
        question: 'How much does it cost to add chicken or steak & shrimp to any salad?',
        options: ['$7', '$8', '$9', '$10'],
        correctAnswer: '$9',
        difficulty: 'easy'
      },
      {
        id: 'salad-2',
        type: 'multiple-choice',
        question: 'Which salad contains hearts of palm?',
        options: ['Rocket Salad', 'Salada Atlântico', 'Salada Marocaine', 'All of them'],
        correctAnswer: 'Salada Atlântico',
        difficulty: 'medium'
      },
      {
        id: 'salad-3',
        type: 'true-false',
        question: 'All three salads are gluten-free.',
        correctAnswer: 'True',
        difficulty: 'easy'
      },
      {
        id: 'salad-4',
        type: 'multiple-choice',
        question: 'The Salada Marocaine contains which type of nuts?',
        options: ['Almonds', 'Walnuts', 'Candied walnuts', 'Pistachios'],
        correctAnswer: 'Candied walnuts',
        difficulty: 'medium'
      },
      {
        id: 'salad-5',
        type: 'fill-blank',
        question: 'The Rocket Salad uses _______-_______ vinaigrette.',
        correctAnswer: ['balsamic', 'honey'],
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'soups',
    title: 'Sopa (Soups)',
    description: 'Traditional Portuguese soups and seafood stews',
    passingScore: 80,
    questions: [
      {
        id: 'soup-1',
        type: 'multiple-choice',
        question: 'Caldeirada is available in how many sizes and what are the prices?',
        options: ['One size - $18', 'Two sizes - $14/$24', 'Three sizes - $12/$18/$24', 'Two sizes - $16/$26'],
        correctAnswer: 'Two sizes - $14/$24',
        difficulty: 'medium'
      },
      {
        id: 'soup-2',
        type: 'true-false',
        question: 'Caldo Verde is naturally vegan.',
        correctAnswer: 'True',
        explanation: 'When made without chorizo, Caldo Verde is vegan (potato and kale base).',
        difficulty: 'easy'
      },
      {
        id: 'soup-3',
        type: 'multiple-choice',
        question: 'What type of cuisine style is Caldeirada based on?',
        options: ['Spanish paella', 'French bouillabaisse', 'Italian cioppino', 'Greek kakavia'],
        correctAnswer: 'French bouillabaisse',
        explanation: 'Caldeirada is a Portuguese adaptation of the French seafood stew.',
        difficulty: 'hard'
      },
      {
        id: 'soup-4',
        type: 'fill-blank',
        question: 'Caldo Verde is made with _______ and _______ as the main vegetables.',
        correctAnswer: ['potato', 'kale'],
        difficulty: 'easy'
      },
      {
        id: 'soup-5',
        type: 'multiple-choice',
        question: 'What spices are mentioned in the Caldeirada?',
        options: ['Portuguese spices', 'Moorish spices', 'Mediterranean spices', 'North African spices'],
        correctAnswer: 'Moorish spices',
        explanation: 'Reflects the Moorish influence on Portuguese cuisine.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'pizza',
    title: 'Pizza',
    description: 'Wood-fired pizza offerings with Portuguese touches',
    passingScore: 80,
    questions: [
      {
        id: 'pizza-1',
        type: 'multiple-choice',
        question: 'What are the two pizza options on the menu?',
        options: ['Margherita and Pepperoni', 'Basil Pesto and Shrimp & Crab', 'Vegetarian and Seafood', 'Portuguese and Mediterranean'],
        correctAnswer: 'Basil Pesto and Shrimp & Crab',
        difficulty: 'easy'
      },
      {
        id: 'pizza-2',
        type: 'true-false',
        question: 'The Basil Pesto pizza is vegetarian.',
        correctAnswer: 'True',
        difficulty: 'easy'
      },
      {
        id: 'pizza-3',
        type: 'multiple-choice',
        question: 'What is the price difference between the two pizzas?',
        options: ['$2', '$3', '$4', '$5'],
        correctAnswer: '$3',
        difficulty: 'medium'
      },
      {
        id: 'pizza-4',
        type: 'multiple-choice',
        question: 'The Shrimp & Crab pizza uses what type of base sauce?',
        options: ['Basil pesto', 'White sauce', 'Spicy tomato', 'Olive oil'],
        correctAnswer: 'Spicy tomato',
        difficulty: 'medium'
      },
      {
        id: 'pizza-5',
        type: 'fill-blank',
        question: 'Both pizzas are made in the restaurant\'s _______-_______ oven.',
        correctAnswer: ['wood', 'fired'],
        explanation: 'Wood-fired ovens give our pizzas their distinctive flavor and texture.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vegetarian',
    title: 'Vegetarian Entrees',
    description: 'Plant-based and vegetarian main course options',
    passingScore: 80,
    questions: [
      {
        id: 'veg-1',
        type: 'multiple-choice',
        question: 'Which vegetarian dish is finished with white truffle oil?',
        options: ['Charred Veggies', 'Portobello', 'Bruxelas', 'Couve-flor Assada'],
        correctAnswer: 'Portobello',
        difficulty: 'medium'
      },
      {
        id: 'veg-2',
        type: 'true-false',
        question: 'Feijão con Fideos contains feta cheese.',
        correctAnswer: 'True',
        difficulty: 'medium'
      },
      {
        id: 'veg-3',
        type: 'multiple-choice',
        question: 'What type of cheese is used in the Bruxelas dish?',
        options: ['Goat cheese', 'Manchego', 'São Jorge cheese', 'Feta'],
        correctAnswer: 'São Jorge cheese',
        difficulty: 'medium'
      },
      {
        id: 'veg-4',
        type: 'fill-blank',
        question: 'Couve-flor Assada is charred cauliflower served over _______-style corn purée.',
        correctAnswer: ['milho'],
        explanation: 'Milho is Portuguese for corn.',
        difficulty: 'hard'
      },
      {
        id: 'veg-5',
        type: 'multiple-choice',
        question: 'Which dish is served with garlic bread?',
        options: ['Batatas Bravas', 'Queijo de Cabra', 'Portobello', 'Feijão con Fideos'],
        correctAnswer: 'Queijo de Cabra',
        difficulty: 'medium'
      },
      {
        id: 'veg-6',
        type: 'multiple-choice',
        question: 'What cooking method is used for the potatoes in Batatas Bravas?',
        options: ['Mashed', 'Roasted', 'Crispy', 'Steamed'],
        correctAnswer: 'Crispy',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'meat',
    title: 'Carne (Meat)',
    description: 'Traditional and modern Portuguese meat dishes',
    passingScore: 80,
    questions: [
      {
        id: 'meat-1',
        type: 'multiple-choice',
        question: 'What cut of beef is used in the Bife à Portuguesa?',
        options: ['Ribeye', 'Filet mignon', 'Hanger steak', 'Sirloin'],
        correctAnswer: 'Hanger steak',
        difficulty: 'medium'
      },
      {
        id: 'meat-2',
        type: 'true-false',
        question: 'Pork Vindalho is a Goan-style curry.',
        correctAnswer: 'True',
        explanation: 'Vindalho reflects the Portuguese influence in Goan cuisine.',
        difficulty: 'medium'
      },
      {
        id: 'meat-3',
        type: 'multiple-choice',
        question: 'Which dish is flambéed tableside?',
        options: ['Piri Piri BBQ Chicken', 'Linguiça Assada', 'Almôndegas Marroquino', 'Lamb Ribs Mediterrâneo'],
        correctAnswer: 'Linguiça Assada',
        explanation: 'Creates a dramatic presentation for celebrations.',
        difficulty: 'medium'
      },
      {
        id: 'meat-4',
        type: 'fill-blank',
        question: 'The Piri Piri BBQ Chicken is _______ smoked and served with _______ piri piri.',
        correctAnswer: ['mesquite', 'whiskey'],
        difficulty: 'hard'
      },
      {
        id: 'meat-5',
        type: 'multiple-choice',
        question: 'What type of meat is used in Almôndegas Marroquino?',
        options: ['Beef only', 'Lamb only', 'Lamb-beef mixture', 'Pork and beef'],
        correctAnswer: 'Lamb-beef mixture',
        difficulty: 'medium'
      },
      {
        id: 'meat-6',
        type: 'multiple-choice',
        question: 'Which accompaniment is served with Pork Vindalho?',
        options: ['Rice and naan', 'Potatoes and vegetables', 'Salad and bread', 'Pasta and sauce'],
        correctAnswer: 'Rice and naan',
        explanation: 'Basmati rice, raita, and house naan complete this Goan-style dish.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'seafood',
    title: 'Mar (Seafood)',
    description: 'Fresh seafood preparations with Portuguese flair',
    passingScore: 80,
    questions: [
      {
        id: 'seafood-1',
        type: 'multiple-choice',
        question: 'What is the Portuguese name for octopus?',
        options: ['Bacalhau', 'Polvo', 'Linguiça', 'Camarões'],
        correctAnswer: 'Polvo',
        difficulty: 'medium'
      },
      {
        id: 'seafood-2',
        type: 'true-false',
        question: 'Bacalhau à Brás is a classic Portuguese dish.',
        correctAnswer: 'True',
        explanation: 'One of the most famous Portuguese preparations of salt cod.',
        difficulty: 'easy'
      },
      {
        id: 'seafood-3',
        type: 'multiple-choice',
        question: 'What cooking vessel is mentioned for the mussels dish?',
        options: ['Paella pan', 'Cataplana', 'Tagine', 'Wok'],
        correctAnswer: 'Cataplana',
        explanation: 'Traditional Portuguese copper cooking vessel.',
        difficulty: 'hard'
      },
      {
        id: 'seafood-4',
        type: 'fill-blank',
        question: 'Camarões Piri Piri includes gulf shrimp, piri piri, garlic, and _______ wine.',
        correctAnswer: ['Madeira'],
        explanation: 'Madeira wine is traditional in Portuguese cooking.',
        difficulty: 'hard'
      },
      {
        id: 'seafood-5',
        type: 'multiple-choice',
        question: 'What type of rice is used in the Scallop Farrotto?',
        options: ['Bomba rice', 'Basmati rice', 'Farro (not rice)', 'Arborio rice'],
        correctAnswer: 'Farro (not rice)',
        explanation: 'Farrotto uses farro grain, not rice.',
        difficulty: 'medium'
      },
      {
        id: 'seafood-6',
        type: 'multiple-choice',
        question: 'Which seafood dish can have linguiça added?',
        options: ['Polvo com Batatas', 'Bacalhau à Brás', 'Sardinhas Assadas', 'Cataplana Mussels'],
        correctAnswer: 'Bacalhau à Brás',
        explanation: 'Linguiça can be added for +$2.',
        difficulty: 'medium'
      },
      {
        id: 'seafood-7',
        type: 'multiple-choice',
        question: 'What makes the Portuguese Squid Fried Rice unique?',
        options: ['It\'s made with paella rice', 'It includes squid ink aioli', 'It\'s vegetarian', 'It\'s served cold'],
        correctAnswer: 'It includes squid ink aioli',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'large-format',
    title: 'For The Table (Large Format)',
    description: 'Shareable dishes designed for groups and special occasions',
    passingScore: 80,
    questions: [
      {
        id: 'large-1',
        type: 'multiple-choice',
        question: 'What type of fish is used in Peixe Grelhado?',
        options: ['Salmon', 'Gulf red snapper', 'Sea bass', 'Halibut'],
        correctAnswer: 'Gulf red snapper',
        difficulty: 'medium'
      },
      {
        id: 'large-2',
        type: 'true-false',
        question: 'Espetada de Carne is served hanging tableside.',
        correctAnswer: 'True',
        explanation: 'Creates dramatic presentation hanging on a traditional espetada stand.',
        difficulty: 'easy'
      },
      {
        id: 'large-3',
        type: 'multiple-choice',
        question: 'What type of rice is used in Paelha Portuguesa?',
        options: ['Basmati', 'Jasmine', 'Bomba', 'Arborio'],
        correctAnswer: 'Bomba',
        explanation: 'Bomba rice is traditional for paella and absorbs flavors well.',
        difficulty: 'medium'
      },
      {
        id: 'large-4',
        type: 'fill-blank',
        question: 'The Espetada de Carne uses _______ _______ as the cut of beef.',
        correctAnswer: ['beef', 'tenderloin'],
        difficulty: 'medium'
      },
      {
        id: 'large-5',
        type: 'multiple-choice',
        question: 'Which large format dish has "Market Price" instead of a set price?',
        options: ['Peixe Grelhado', 'Espetada de Carne', 'Paelha Portuguesa', 'None of them'],
        correctAnswer: 'Paelha Portuguesa',
        difficulty: 'medium'
      },
      {
        id: 'large-6',
        type: 'multiple-choice',
        question: 'What is served with the Espetada de Carne?',
        options: ['Rice and vegetables', 'Batatas fritas, grilled veggies, and bolo do caco', 'Salad and bread', 'Pasta and sauce'],
        correctAnswer: 'Batatas fritas, grilled veggies, and bolo do caco',
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
      },
      {
        id: 'general-2',
        type: 'true-false',
        question: '20% gratuity is automatically added to parties of 6 or more.',
        correctAnswer: 'True',
        explanation: 'Standard restaurant policy for large parties.',
        difficulty: 'easy'
      },
      {
        id: 'general-3',
        type: 'multiple-choice',
        question: 'What is piri piri?',
        options: ['A type of cheese', 'Portuguese bread', 'Spicy Portuguese chili sauce', 'A cooking method'],
        correctAnswer: 'Spicy Portuguese chili sauce',
        explanation: 'Fundamental Portuguese condiment used throughout our menu.',
        difficulty: 'easy'
      },
      {
        id: 'general-4',
        type: 'fill-blank',
        question: 'São Jorge is a Portuguese _______ from the _______.',
        correctAnswer: ['cheese', 'Azores'],
        explanation: 'Important to know our cheese origins for customer questions.',
        difficulty: 'medium'
      },
      {
        id: 'general-5',
        type: 'multiple-choice',
        question: 'What is bolo do caco?',
        options: ['A dessert', 'Traditional Portuguese bread', 'A cooking pot', 'A type of wine'],
        correctAnswer: 'Traditional Portuguese bread',
        explanation: 'Featured in our sandwiches and accompaniments.',
        difficulty: 'medium'
      },
      {
        id: 'general-6',
        type: 'true-false',
        question: 'Items may be cross-contaminated according to the menu disclaimer.',
        correctAnswer: 'True',
        explanation: 'Critical for allergy awareness and customer safety.',
        difficulty: 'easy'
      },
      {
        id: 'general-7',
        type: 'multiple-choice',
        question: 'What should servers always ask customers with dietary restrictions?',
        options: ['Their favorite food', 'About allergies', 'Their budget', 'Cooking preferences only'],
        correctAnswer: 'About allergies',
        explanation: 'Essential for customer safety and liability.',
        difficulty: 'easy'
      }
    ]
  }
]

// Game configuration
export const gameConfig = {
  timeLimit: 30, // seconds per question in timed mode
  minPassingScore: 70, // minimum overall passing percentage
  maxAttempts: 3, // maximum attempts per section
  pointsPerCorrect: 10,
  bonusTimePoints: 5, // bonus points for quick answers in timed mode
}

// Dietary symbols reference
export const dietarySymbols = {
  'V': 'Vegetarian',
  'VG': 'Vegan',
  'GF': 'Gluten-Free'
}