// CandlCrew Restaurant Training Quiz Data - Complete Version
// All 11 sections from the original comprehensive training manual

export interface Question {
  id: string
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'scenario' | 'table-service' | 'pos-training' | 'food-safety' | 'wine-pairing' | 'image-recognition'
  question: string
  options?: string[]
  correctAnswer: string | string[]
  explanation?: string
  difficulty: 'easy' | 'medium' | 'hard'
  imageUrl?: string
  scenario?: TableServiceScenario
  posSimulation?: POSSimulation
  foodSafetyData?: FoodSafetyData
  wineData?: WinePairingData
}

export interface TableServiceScenario {
  customerType: 'regular' | 'difficult' | 'allergic' | 'celebration' | 'business' | 'family'
  situation: string
  customerLines: string[]
  correctResponses: string[]
  upsellOpportunities?: string[]
  points: number
  timeLimit?: number
}

export interface POSSimulation {
  orderItems: POSItem[]
  modifiers: POSModifier[]
  paymentMethod: string
  expectedTotal: number
  steps: string[]
}

export interface POSItem {
  name: string
  category: string
  price: number
  modifiable: boolean
}

export interface POSModifier {
  name: string
  price: number
  category: string
}

export interface FoodSafetyData {
  scenario: string
  hazardType: 'temperature' | 'cross-contamination' | 'allergen' | 'hygiene' | 'storage'
  correctProcedure: string[]
  consequences: string
}

export interface WinePairingData {
  dish: string
  wineOptions: WineOption[]
  correctPairing: string
  reasoning: string
  pricePoint: 'budget' | 'mid-range' | 'premium'
}

export interface WineOption {
  name: string
  type: 'red' | 'white' | 'rosé' | 'sparkling' | 'dessert'
  characteristics: string[]
  price: number
}

export interface QuizSection {
  id: string
  title: string
  description: string
  questions: Question[]
  passingScore: number
  category: 'knowledge' | 'simulation' | 'certification' | 'practical'
  prerequisites?: string[]
  estimatedTime: number
  badge?: string
  icon: string
}

export const quizData: QuizSection[] = [
  {
    id: 'bread-spreads',
    title: 'Bread & Spreads',
    description: 'Learn about our signature bread offerings and accompaniments',
    passingScore: 80,
    category: 'knowledge',
    estimatedTime: 8,
    icon: 'fas fa-bread-slice',
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
    category: 'knowledge',
    estimatedTime: 10,
    icon: 'fas fa-utensils',
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
    category: 'knowledge',
    estimatedTime: 8,
    icon: 'fas fa-hamburger',
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
    category: 'knowledge',
    estimatedTime: 7,
    icon: 'fas fa-leaf',
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
    category: 'knowledge',
    estimatedTime: 8,
    icon: 'fas fa-bowl-food',
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
    category: 'knowledge',
    estimatedTime: 6,
    icon: 'fas fa-pizza-slice',
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
    category: 'knowledge',
    estimatedTime: 9,
    icon: 'fas fa-seedling',
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
    category: 'knowledge',
    estimatedTime: 12,
    icon: 'fas fa-drumstick-bite',
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
    category: 'knowledge',
    estimatedTime: 15,
    icon: 'fas fa-fish',
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
    category: 'knowledge',
    estimatedTime: 10,
    icon: 'fas fa-users',
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
    category: 'knowledge',
    estimatedTime: 12,
    icon: 'fas fa-info-circle',
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
  },
  
  // ============================================
  // ADVANCED TRAINING MODULES
  // ============================================
  
  {
    id: 'table-service',
    title: 'Table Service Simulator',
    description: 'Interactive scenarios for taking orders, handling complaints, and upselling',
    passingScore: 85,
    category: 'simulation',
    estimatedTime: 25,
    icon: 'fas fa-concierge-bell',
    badge: 'Service Excellence',
    questions: [
      {
        id: 'service-1',
        type: 'table-service',
        question: 'A family of four walks in. Two adults, two children (ages 8 and 12). How do you approach and greet them?',
        scenario: {
          customerType: 'family',
          situation: 'Family dinner with children, parents look tired from travel',
          customerLines: [
            'Hi, we don\'t have a reservation but we\'re hoping you can seat us.',
            'The kids are pretty hungry, do you have anything they might like?',
            'Is there a children\'s menu or smaller portions available?'
          ],
          correctResponses: [
            'Welcome to CandlCrew! I\'d be happy to find you a table for four.',
            'Absolutely! Let me show you some great options for the kids from our menu.',
            'I can recommend some dishes that work well for children, and we can do smaller portions of most items.'
          ],
          upsellOpportunities: [
            'Would you like to start with our Daily Bread for the table?',
            'For the adults, our wine selection pairs beautifully with Portuguese cuisine.',
            'We have a delicious dessert that kids absolutely love.'
          ],
          points: 15
        },
        correctAnswer: 'Greet warmly, acknowledge the children, offer family-friendly seating and menu options',
        explanation: 'Families need welcoming service with child-appropriate options and patient explanations.',
        difficulty: 'medium'
      },
      {
        id: 'service-2', 
        type: 'table-service',
        question: 'A business client complains their Francesinha is too saucy and demands a refund. How do you handle this?',
        scenario: {
          customerType: 'business',
          situation: 'Lunch meeting, client is unhappy and creating a scene',
          customerLines: [
            'This sandwich is swimming in sauce! I can\'t eat this mess during a business lunch.',
            'I want a full refund right now, this is completely unacceptable.',
            'Don\'t you people know how to make food properly?'
          ],
          correctResponses: [
            'I sincerely apologize for the inconvenience. Let me fix this right away.',
            'The Francesinha is traditionally very saucy, but I can have the kitchen prepare a new one with sauce on the side.',
            'I\'ll speak with my manager about the refund, but first let me get you something you\'ll enjoy.'
          ],
          upsellOpportunities: [],
          points: 20
        },
        correctAnswer: 'Apologize sincerely, explain the dish tradition, offer alternatives, get manager if needed',
        explanation: 'Business clients need quick, professional resolution. Never argue about food traditions when customer is upset.',
        difficulty: 'hard'
      },
      {
        id: 'service-3',
        type: 'table-service', 
        question: 'A couple is celebrating their anniversary. They seem unsure about wine pairings. Create the perfect upsell opportunity.',
        scenario: {
          customerType: 'celebration',
          situation: 'Anniversary dinner, couple wants something special but seems price-conscious',
          customerLines: [
            'It\'s our 10th anniversary, we want something special but not too crazy expensive.',
            'We\'re not really wine experts, what would you recommend?',
            'Should we do an appetizer to share?'
          ],
          correctResponses: [
            'Congratulations on your anniversary! I\'d love to help make this evening memorable.',
            'Let me recommend some perfect wine pairings that offer great value.',
            'I\'ll suggest a beautiful combination that will make your celebration extra special.'
          ],
          upsellOpportunities: [
            'Start with our Petiscos Plate to share - perfect for celebrating',
            'Our São Jorge cheese pairs wonderfully with a mid-range Portuguese wine',
            'I can recommend a wine flight so you can try multiple pairings'
          ],
          points: 25
        },
        correctAnswer: 'Acknowledge celebration, recommend mid-range options, create memorable experience',
        explanation: 'Celebrations are perfect upsell opportunities. Focus on value and creating memories, not just profit.',
        difficulty: 'medium'
      },
      {
        id: 'service-4',
        type: 'table-service',
        question: 'A customer has a severe shellfish allergy and is asking about menu options. Walk them through safe choices.',
        scenario: {
          customerType: 'allergic',
          situation: 'Severe food allergy, customer is nervous about cross-contamination',
          customerLines: [
            'I have a severe shellfish allergy - even cross-contamination can send me to the hospital.',
            'Can you guarantee that items are prepared separately?',
            'What would be the safest options for me?'
          ],
          correctResponses: [
            'I take food allergies very seriously. Let me get detailed information about our prep procedures.',
            'I\'ll speak directly with the kitchen about cross-contamination protocols for your order.',
            'Let me identify the safest menu options and confirm preparation methods with our chef.'
          ],
          upsellOpportunities: [],
          points: 30
        },
        correctAnswer: 'Take allergy seriously, consult with kitchen, identify safe options, no upselling',
        explanation: 'Food allergies are life-threatening. Priority is safety, not sales. Always involve management and kitchen staff.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'pos-training',
    title: 'POS System Training', 
    description: 'Master the point-of-sale system with realistic order entry practice',
    passingScore: 90,
    category: 'simulation',
    estimatedTime: 20,
    icon: 'fas fa-cash-register',
    badge: 'POS Expert',
    questions: [
      {
        id: 'pos-1',
        type: 'pos-training',
        question: 'Enter this order: Prego sandwich, add fried egg, side of Batatas Bravas, Sagres beer',
        posSimulation: {
          orderItems: [
            { name: 'Prego', category: 'Sandwiches', price: 16.00, modifiable: true },
            { name: 'Batatas Bravas', category: 'Vegetarian', price: 8.00, modifiable: false },
            { name: 'Sagres Beer', category: 'Beverages', price: 5.00, modifiable: false }
          ],
          modifiers: [
            { name: 'Add Fried Egg', price: 2.00, category: 'Sandwich Add-ons' }
          ],
          paymentMethod: 'Credit Card',
          expectedTotal: 31.00,
          steps: [
            'Navigate to Sandwiches category',
            'Select Prego sandwich',
            'Add modifier: Fried Egg (+$2)',
            'Navigate to Vegetarian category', 
            'Add Batatas Bravas',
            'Navigate to Beverages',
            'Add Sagres Beer',
            'Review total: $31.00',
            'Process payment'
          ]
        },
        correctAnswer: '$31.00',
        explanation: 'Prego ($16) + Fried Egg ($2) + Batatas Bravas ($8) + Sagres ($5) = $31.00',
        difficulty: 'easy'
      },
      {
        id: 'pos-2',
        type: 'pos-training',
        question: 'Process a split bill: Table ordered Paelha Portuguesa (Market Price: $45), two guests paying separately',
        posSimulation: {
          orderItems: [
            { name: 'Paelha Portuguesa', category: 'Large Format', price: 45.00, modifiable: false }
          ],
          modifiers: [],
          paymentMethod: 'Split Bill',
          expectedTotal: 22.50,
          steps: [
            'Select split bill function',
            'Divide Paelha Portuguesa by 2',
            'Create separate checks',
            'Each check: $22.50',
            'Process first payment',
            'Process second payment'
          ]
        },
        correctAnswer: '$22.50 each',
        explanation: 'Market price items must be split evenly unless specified otherwise. $45 ÷ 2 = $22.50 per person.',
        difficulty: 'medium'
      }
    ]
  },

  {
    id: 'food-safety',
    title: 'Food Safety Certification',
    description: 'Essential food handling, temperature control, and allergen awareness',
    passingScore: 95,
    category: 'certification',
    estimatedTime: 30,
    icon: 'fas fa-shield-alt',
    badge: 'Food Safety Certified',
    prerequisites: ['general'],
    questions: [
      {
        id: 'safety-1',
        type: 'food-safety',
        question: 'You notice raw chicken juice has dripped onto the prep counter where vegetables are chopped. What is the correct procedure?',
        foodSafetyData: {
          scenario: 'Cross-contamination between raw poultry and vegetables',
          hazardType: 'cross-contamination',
          correctProcedure: [
            'Stop all food preparation immediately',
            'Remove any vegetables that may have been contaminated', 
            'Clean and sanitize the entire prep surface',
            'Wash hands thoroughly',
            'Replace cutting boards and utensils',
            'Resume prep with clean equipment'
          ],
          consequences: 'Foodborne illness, potential restaurant closure, legal liability'
        },
        correctAnswer: 'Stop prep, sanitize surface, replace contaminated items, wash hands, use clean equipment',
        explanation: 'Cross-contamination from raw poultry is extremely dangerous and requires immediate action.',
        difficulty: 'medium'
      },
      {
        id: 'safety-2',
        type: 'food-safety',
        question: 'What is the safe internal temperature for serving our Piri Piri BBQ Chicken?',
        foodSafetyData: {
          scenario: 'Temperature verification for poultry service',
          hazardType: 'temperature',
          correctProcedure: [
            'Use calibrated thermometer',
            'Insert into thickest part of meat',
            'Avoid touching bone',
            'Verify 165°F (74°C) internal temperature',
            'If under temperature, return to kitchen'
          ],
          consequences: 'Salmonella, campylobacter, serious foodborne illness'
        },
        correctAnswer: '165°F (74°C)',
        explanation: 'Poultry must reach 165°F internal temperature to kill harmful bacteria. No exceptions.',
        difficulty: 'easy'
      },
      {
        id: 'safety-3',
        type: 'food-safety', 
        question: 'A customer says they have celiac disease and asks about gluten-free options. What must you verify?',
        foodSafetyData: {
          scenario: 'Severe gluten allergy requiring strict protocols',
          hazardType: 'allergen',
          correctProcedure: [
            'Inform kitchen about celiac customer',
            'Verify all ingredients are gluten-free',
            'Ensure separate prep surfaces are used',
            'Check that no cross-contamination occurred',
            'Use dedicated gluten-free utensils',
            'Double-check with chef before serving'
          ],
          consequences: 'Severe intestinal damage, hospitalization, legal action'
        },
        correctAnswer: 'Dedicated prep area, verified gluten-free ingredients, separate utensils, kitchen notification',
        explanation: 'Celiac disease is an autoimmune condition. Even trace gluten can cause severe health consequences.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'wine-pairing',
    title: 'Wine & Beverage Pairing Guide',
    description: 'Master wine and beverage pairings to enhance the dining experience',
    passingScore: 80,
    category: 'practical',
    estimatedTime: 18,
    icon: 'fas fa-wine-glass-alt',
    badge: 'Sommelier Apprentice',
    questions: [
      {
        id: 'wine-1',
        type: 'wine-pairing',
        question: 'A customer orders Bacalhau à Brás. What wine would you recommend and why?',
        wineData: {
          dish: 'Bacalhau à Brás',
          wineOptions: [
            {
              name: 'Vinho Verde',
              type: 'white',
              characteristics: ['Light', 'Crisp', 'Slightly effervescent', 'Portuguese'],
              price: 28
            },
            {
              name: 'Douro Red',
              type: 'red', 
              characteristics: ['Full-bodied', 'Bold', 'Tannic', 'Portuguese'],
              price: 45
            },
            {
              name: 'Alvarinho',
              type: 'white',
              characteristics: ['Mineral', 'Citrusy', 'Food-friendly', 'Portuguese'],
              price: 35
            }
          ],
          correctPairing: 'Alvarinho',
          reasoning: 'The mineral qualities complement the salt cod, while citrus cuts through the richness of eggs and potatoes',
          pricePoint: 'mid-range'
        },
        correctAnswer: 'Alvarinho - mineral qualities complement salt cod, citrus cuts richness',
        explanation: 'Portuguese salt cod dishes pair beautifully with Portuguese white wines that have mineral complexity.',
        difficulty: 'medium'
      },
      {
        id: 'wine-2',
        type: 'wine-pairing',
        question: 'Customers want to share the Petiscos Plate. Suggest a wine that complements multiple flavors.',
        wineData: {
          dish: 'Petiscos Plate (Mixed appetizers)',
          wineOptions: [
            {
              name: 'Rosé de Provence',
              type: 'rosé',
              characteristics: ['Versatile', 'Fresh', 'Food-friendly', 'Balanced'],
              price: 32
            },
            {
              name: 'Pinot Grigio',
              type: 'white',
              characteristics: ['Light', 'Neutral', 'Clean', 'Simple'],
              price: 26
            },
            {
              name: 'Sangria',
              type: 'red',
              characteristics: ['Fruity', 'Sweet', 'Refreshing', 'Shareable'],
              price: 24
            }
          ],
          correctPairing: 'Rosé de Provence',
          reasoning: 'Versatile enough to complement cheese, olives, and cured meats without overwhelming any single flavor',
          pricePoint: 'mid-range'
        },
        correctAnswer: 'Rosé de Provence - versatile, complements multiple flavors without overwhelming',
        explanation: 'Sharing plates need versatile wines that enhance rather than compete with diverse flavors.',
        difficulty: 'easy'
      }
    ]
  }
]

export const gameConfig = {
  timeLimit: 30,
  minPassingScore: 70,
  maxAttempts: 3,
  pointsPerCorrect: 10,
  bonusTimePoints: 5,
  
  // Advanced features
  badges: [
    { id: 'service-excellence', name: 'Service Excellence', icon: 'fas fa-star', requirements: ['table-service'] },
    { id: 'pos-expert', name: 'POS Expert', icon: 'fas fa-calculator', requirements: ['pos-training'] },
    { id: 'food-safety-certified', name: 'Food Safety Certified', icon: 'fas fa-certificate', requirements: ['food-safety'] },
    { id: 'sommelier-apprentice', name: 'Sommelier Apprentice', icon: 'fas fa-wine-bottle', requirements: ['wine-pairing'] },
    { id: 'menu-master', name: 'Menu Master', icon: 'fas fa-crown', requirements: ['bread-spreads', 'petiscos', 'sandwiches', 'salads', 'soups'] },
    { id: 'seafood-expert', name: 'Seafood Expert', icon: 'fas fa-anchor', requirements: ['seafood', 'large-format'] },
    { id: 'complete-training', name: 'Training Complete', icon: 'fas fa-graduation-cap', requirements: 'all' }
  ],
  
  leaderboard: {
    enabled: true,
    categories: ['overall', 'speed', 'accuracy', 'service-simulation'],
    resetPeriod: 'monthly'
  },
  
  certificationRequirements: {
    server: ['general', 'table-service', 'wine-pairing', 'food-safety'],
    kitchen: ['food-safety', 'general'],
    host: ['general', 'table-service'],
    manager: 'all'
  },
  
  analytics: {
    trackProgress: true,
    identifyWeakAreas: true,
    managerReporting: true,
    exportData: true
  }
}

// Employee tracking and progress data structures
export interface EmployeeProgress {
  id: string
  name: string
  role: 'server' | 'kitchen' | 'host' | 'manager'
  startDate: string
  completedSections: string[]
  badges: string[]
  scores: { [sectionId: string]: number }
  certificationStatus: 'pending' | 'in-progress' | 'certified'
  weakAreas: string[]
  strengths: string[]
  totalTrainingTime: number
}

export interface RestaurantAnalytics {
  totalEmployees: number
  averageCompletionRate: number
  mostDifficultSections: string[]
  topPerformers: string[]
  certificationRates: { [role: string]: number }
  monthlyProgress: { month: string; completions: number }[]
}