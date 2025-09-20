// CandlCrew Beverage & Food Pairing Matrix
// Professional pairing recommendations for all menu items

export interface MenuPairing {
  dishId: string
  dishName: string
  category: string
  wineRecs: WineRecommendation[]
  beerRecs: BeerRecommendation[]
  spiritsRecs: SpiritsRecommendation[]
  cocktailRecs: CocktailRecommendation[]
  sellingPoints: string[]
  upsellStrategy: string
}

export interface WineRecommendation {
  type: string
  specific: string[]
  reasoning: string
  pricePoint: 'budget' | 'mid-range' | 'premium'
}

export interface BeerRecommendation {
  style: string
  specific: string[]
  reasoning: string
}

export interface SpiritsRecommendation {
  category: string
  specific: string[]
  reasoning: string
  service: 'neat' | 'rocks' | 'cocktail'
}

export interface CocktailRecommendation {
  name: string
  baseSpirit: string
  description: string
  reasoning: string
}

export const candlCrewBeveragePairings: MenuPairing[] = [
  // BREAD & SPREADS
  {
    dishId: 'daily-bread',
    dishName: 'Daily Bread (V)',
    category: 'Bread & Spreads',
    wineRecs: [
      {
        type: 'Vinho Verde',
        specific: ['Portuguese Vinho Verde', 'Gazela', 'Casal Garcia'],
        reasoning: 'Light, crisp acidity cuts through olive oil while enhancing herb flavors',
        pricePoint: 'budget'
      },
      {
        type: 'Sauvignon Blanc',
        specific: ['Loire Valley', 'Marlborough', 'Portuguese Sauvignon Blanc'],
        reasoning: 'Herbal notes complement the herbed olive oil beautifully',
        pricePoint: 'mid-range'
      }
    ],
    beerRecs: [
      {
        style: 'Portuguese Lager',
        specific: ['Sagres', 'Super Bock'],
        reasoning: 'Clean, light beer won\'t overpower delicate bread flavors'
      },
      {
        style: 'Wheat Beer',
        specific: ['Hoegaarden', 'Blue Moon', 'Portuguese Wheat'],
        reasoning: 'Bread-adjacent flavors create harmonious pairing'
      }
    ],
    spiritsRecs: [
      {
        category: 'None recommended',
        specific: ['Save spirits for main courses'],
        reasoning: 'Bread course should prepare palate, not overwhelm it',
        service: 'neat'
      }
    ],
    cocktailRecs: [
      {
        name: 'Portuguese Spritz',
        baseSpirit: 'Vinho Verde',
        description: 'Vinho Verde, elderflower, soda, lemon',
        reasoning: 'Light aperitif that enhances rather than competes'
      }
    ],
    sellingPoints: [
      'Start light to prepare your palate for the amazing meal ahead',
      'Portuguese Vinho Verde is the perfect authentic pairing',
      'Our herbed olive oil pairs beautifully with crisp white wines'
    ],
    upsellStrategy: 'Position as palate preparation for wine throughout meal'
  },

  {
    dishId: 'pao-com-chorizo',
    dishName: 'Pão com Chorizo',
    category: 'Bread & Spreads',
    wineRecs: [
      {
        type: 'Portuguese Red',
        specific: ['Douro Red', 'Dão', 'Touriga Nacional'],
        reasoning: 'Portuguese reds complement Spanish chorizo\'s spice and fat perfectly',
        pricePoint: 'mid-range'
      },
      {
        type: 'Tempranillo',
        specific: ['Rioja Crianza', 'Ribera del Duero', 'Spanish Tempranillo'],
        reasoning: 'Classic Spanish pairing - what grows together, goes together',
        pricePoint: 'mid-range'
      }
    ],
    beerRecs: [
      {
        style: 'IPA',
        specific: ['Portuguese IPA', 'American IPA', 'English IPA'],
        reasoning: 'Hop bitterness cuts through chorizo fat, citrus complements spice'
      }
    ],
    spiritsRecs: [
      {
        category: 'Aged Rum',
        specific: ['Barbados Rum', 'Venezuelan Rum', 'Cuban Aged Rum'],
        reasoning: 'Sweetness balances spice, complexity matches chorizo richness',
        service: 'neat'
      }
    ],
    cocktailRecs: [
      {
        name: 'Spiced Old Fashioned',
        baseSpirit: 'Bourbon',
        description: 'Bourbon, Spanish sherry, orange, spiced syrup',
        reasoning: 'Complements chorizo spices while adding complexity'
      }
    ],
    sellingPoints: [
      'Portuguese and Spanish wines are historic partners',
      'The spice in chorizo awakens your palate for wine',
      'This is where bold flavors meet bold wines'
    ],
    upsellStrategy: 'Emphasize authentic Iberian Peninsula wine pairing tradition'
  },

  // PETISCOS
  {
    dishId: 'petiscos-plate',
    dishName: 'Petiscos Plate',
    category: 'Petiscos',
    wineRecs: [
      {
        type: 'Rosé',
        specific: ['Portuguese Rosé', 'Provence Rosé', 'Spanish Rosado'],
        reasoning: 'Versatile enough for cheese, olives, and cured meats without overwhelming any element',
        pricePoint: 'mid-range'
      },
      {
        type: 'Portuguese White Blend',
        specific: ['Alvarinho blend', 'Vinho Regional blend'],
        reasoning: 'Local pairing tradition with petiscos culture',
        pricePoint: 'budget'
      }
    ],
    beerRecs: [
      {
        style: 'Saison',
        specific: ['Belgian Saison', 'American Saison'],
        reasoning: 'Farmhouse character complements rustic, traditional petiscos'
      }
    ],
    spiritsRecs: [
      {
        category: 'Portuguese Brandy',
        specific: ['Macieira Brandy', 'Portuguese Aguardente'],
        reasoning: 'Traditional Portuguese digestif with petiscos',
        service: 'neat'
      }
    ],
    cocktailRecs: [
      {
        name: 'Portuguese Aperitivo',
        baseSpirit: 'Gin',
        description: 'Portuguese gin, elderflower, lemon, Portuguese olives',
        reasoning: 'Botanical elements enhance the variety of petiscos flavors'
      }
    ],
    sellingPoints: [
      'Rosé is the ultimate sharing wine for sharing plates',
      'This is authentic Portuguese drinking culture',
      'Perfect opportunity to try multiple beverages with varied flavors'
    ],
    upsellStrategy: 'Suggest wine flight or cocktail + wine pairing for variety'
  },

  // SEAFOOD SPECIALTIES
  {
    dishId: 'bacalhau-a-bras',
    dishName: 'Bacalhau à Brás',
    category: 'Seafood',
    wineRecs: [
      {
        type: 'Alvarinho',
        specific: ['Portuguese Alvarinho', 'Spanish Albariño'],
        reasoning: 'Mineral complexity complements salt cod, citrus cuts through egg richness',
        pricePoint: 'mid-range'
      },
      {
        type: 'White Burgundy',
        specific: ['Chablis', 'Burgundian Chardonnay'],
        reasoning: 'Mineral-driven wine enhances salt cod while butter notes complement eggs',
        pricePoint: 'premium'
      }
    ],
    beerRecs: [
      {
        style: 'Portuguese Lager',
        specific: ['Sagres', 'Super Bock'],
        reasoning: 'Clean, crisp beer cleanses palate between rich, salty bites'
      }
    ],
    spiritsRecs: [
      {
        category: 'Aged White Rum',
        specific: ['Barbados aged rum', 'Venezuelan rum'],
        reasoning: 'Tropical character enhances cod preparation, smoothness complements eggs',
        service: 'neat'
      }
    ],
    cocktailRecs: [
      {
        name: 'Portuguese Martini',
        baseSpirit: 'Gin',
        description: 'Portuguese gin, dry vermouth, lemon twist',
        reasoning: 'Clean, mineral-driven cocktail won\'t compete with delicate salt cod'
      }
    ],
    sellingPoints: [
      'This is Portugal\'s national dish meeting Portugal\'s greatest wines',
      'Alvarinho is considered the perfect bacalhau partner',
      'The mineral wines enhance the oceanic salt cod flavors'
    ],
    upsellStrategy: 'Emphasize authentic Portuguese pairing tradition and cultural significance'
  },

  {
    dishId: 'camarones-piri-piri',
    dishName: 'Camarões Piri Piri',
    category: 'Seafood',
    wineRecs: [
      {
        type: 'Vinho Verde',
        specific: ['Loureiro', 'Arinto-based Vinho Verde'],
        reasoning: 'Acidity and slight effervescence cool piri piri heat while enhancing shrimp sweetness',
        pricePoint: 'budget'
      },
      {
        type: 'Riesling',
        specific: ['German Riesling Kabinett', 'Alsace Riesling'],
        reasoning: 'Touch of sweetness balances heat, acidity complements seafood',
        pricePoint: 'mid-range'
      }
    ],
    beerRecs: [
      {
        style: 'Wheat Beer',
        specific: ['Portuguese wheat beer', 'Belgian witbier'],
        reasoning: 'Smooth, cooling effect against piri piri heat'
      }
    ],
    spiritsRecs: [
      {
        category: 'Silver Tequila',
        specific: ['100% agave blanco', 'Premium silver tequila'],
        reasoning: 'Agave\'s natural sweetness complements shrimp, handles spice well',
        service: 'cocktail'
      }
    ],
    cocktailRecs: [
      {
        name: 'Piri Piri Margarita',
        baseSpirit: 'Silver Tequila',
        description: 'Silver tequila, lime, agave, hint of piri piri salt rim',
        reasoning: 'Embraces the heat while cooling with citrus and agave'
      }
    ],
    sellingPoints: [
      'Vinho Verde is the traditional cooling partner for piri piri',
      'The bubbles and acidity make each bite feel fresh again',
      'This pairing is pure Portuguese coastal cuisine culture'
    ],
    upsellStrategy: 'Offer multiple glasses - wine cools, tequila enhances the heat experience'
  },

  // MEAT DISHES
  {
    dishId: 'piri-piri-bbq-chicken',
    dishName: 'Piri Piri BBQ Chicken',
    category: 'Meat',
    wineRecs: [
      {
        type: 'Portuguese Red',
        specific: ['Douro blend', 'Touriga Nacional', 'Portuguese Syrah'],
        reasoning: 'Bold reds stand up to BBQ smokiness and piri piri spice complexity',
        pricePoint: 'mid-range'
      },
      {
        type: 'Zinfandel',
        specific: ['California Zinfandel', 'Paso Robles Zin'],
        reasoning: 'Fruit-forward wine complements BBQ sweetness while handling spice',
        pricePoint: 'mid-range'
      }
    ],
    beerRecs: [
      {
        style: 'IPA',
        specific: ['American IPA', 'Portuguese IPA'],
        reasoning: 'Hop bitterness cuts through BBQ sauce, citrus notes cool piri piri heat'
      },
      {
        style: 'Porter',
        specific: ['Robust Porter', 'Smoked Porter'],
        reasoning: 'Smoke-on-smoke pairing enhances BBQ character'
      }
    ],
    spiritsRecs: [
      {
        category: 'Bourbon',
        specific: ['Kentucky Bourbon', 'High-rye bourbon'],
        reasoning: 'BBQ and bourbon are classic American partners, sweetness balances heat',
        service: 'rocks'
      },
      {
        category: 'Highland Scotch',
        specific: ['Highland single malt', 'Speyside'],
        reasoning: 'Subtle smoke complements BBQ without overwhelming chicken',
        service: 'neat'
      }
    ],
    cocktailRecs: [
      {
        name: 'Smoky Old Fashioned',
        baseSpirit: 'Bourbon',
        description: 'Bourbon, smoked simple syrup, orange, cherry',
        reasoning: 'Enhances the BBQ smoke character while providing cooling sweetness'
      }
    ],
    sellingPoints: [
      'Portuguese reds are built to handle bold, spiced flavors',
      'BBQ and bold wines are a match made in heaven',
      'This is comfort food that deserves comfort wine'
    ],
    upsellStrategy: 'Suggest trying both wine and whiskey to experience different flavor enhancements'
  },

  {
    dishId: 'linguica-assada',
    dishName: 'Linguiça Assada (Flambéed)',
    category: 'Meat',
    wineRecs: [
      {
        type: 'Portuguese Red',
        specific: ['Bairrada', 'Dão red', 'Alentejo blend'],
        reasoning: 'Earthy Portuguese reds complement smoky linguiça and flambé drama',
        pricePoint: 'mid-range'
      }
    ],
    beerRecs: [
      {
        style: 'Portuguese Lager',
        specific: ['Sagres', 'Super Bock'],
        reasoning: 'Traditional Portuguese pairing - crisp beer balances rich sausage'
      }
    ],
    spiritsRecs: [
      {
        category: 'Portuguese Brandy',
        specific: ['Macieira', 'Portuguese Aguardente'],
        reasoning: 'What flambées the dish can also accompany it - traditional approach',
        service: 'neat'
      }
    ],
    cocktailRecs: [
      {
        name: 'Portuguese Fire',
        baseSpirit: 'Portuguese Brandy',
        description: 'Portuguese brandy, honey, lemon, dash of fire',
        reasoning: 'Celebrates the flambé drama with complementary spirits'
      }
    ],
    sellingPoints: [
      'The flambé deserves a drink with equal drama',
      'Portuguese brandy ties the whole experience together',
      'This is pure Portuguese tavern culture'
    ],
    upsellStrategy: 'Play up the theatrical aspect - offer a "fire and fire" pairing'
  },

  // VEGETARIAN DISHES  
  {
    dishId: 'portobello',
    dishName: 'Portobello with White Truffle Oil',
    category: 'Vegetarian',
    wineRecs: [
      {
        type: 'Pinot Noir',
        specific: ['Burgundy Pinot Noir', 'Oregon Pinot Noir'],
        reasoning: 'Earthy wine complements mushroom umami and enhances truffle aromatics',
        pricePoint: 'premium'
      },
      {
        type: 'Portuguese Red',
        specific: ['Dão Touriga Nacional', 'Portuguese Pinot Noir'],
        reasoning: 'Earthy complexity matches mushroom depth, won\'t overpower truffle',
        pricePoint: 'mid-range'
      }
    ],
    beerRecs: [
      {
        style: 'Brown Ale',
        specific: ['English Brown Ale', 'American Brown Ale'],
        reasoning: 'Nutty, earthy flavors complement mushroom and truffle earthiness'
      }
    ],
    spiritsRecs: [
      {
        category: 'Aged Rum',
        specific: ['Barbados aged rum', 'Venezuelan rum'],
        reasoning: 'Rich, complex flavors match truffle luxury without overwhelming mushroom',
        service: 'neat'
      }
    ],
    cocktailRecs: [
      {
        name: 'Truffle Martini',
        baseSpirit: 'Vodka',
        description: 'Premium vodka, dry vermouth, hint of truffle oil, mushroom garnish',
        reasoning: 'Enhances the luxury truffle experience with complementary umami'
      }
    ],
    sellingPoints: [
      'Truffle oil demands a wine with equal sophistication',
      'Earthy wines bring out the mushroom\'s natural depth',
      'This is vegetarian cuisine at its most luxurious'
    ],
    upsellStrategy: 'Position as fine dining experience worthy of premium wine investment'
  },

  // LARGE FORMAT DISHES
  {
    dishId: 'paelha-portuguesa',
    dishName: 'Paelha Portuguesa',
    category: 'Large Format',
    wineRecs: [
      {
        type: 'Portuguese White',
        specific: ['Alvarinho', 'Arinto', 'Portuguese blend'],
        reasoning: 'Crisp whites complement seafood elements while handling saffron complexity',
        pricePoint: 'mid-range'
      },
      {
        type: 'Rosé',
        specific: ['Portuguese Rosé', 'Provence Rosé'],
        reasoning: 'Versatile enough for mixed seafood and meat, perfect for sharing',
        pricePoint: 'mid-range'
      },
      {
        type: 'Light Red',
        specific: ['Portuguese light red', 'Spanish Garnacha'],
        reasoning: 'Light enough for seafood, bold enough for chorizo and meat elements',
        pricePoint: 'mid-range'
      }
    ],
    beerRecs: [
      {
        style: 'Pilsner',
        specific: ['Portuguese Pilsner', 'Czech Pilsner'],
        reasoning: 'Clean, crisp beer won\'t compete with complex paelha flavors'
      }
    ],
    spiritsRecs: [
      {
        category: 'Gin',
        specific: ['Portuguese gin', 'Spanish gin', 'London Dry'],
        reasoning: 'Botanical complexity complements saffron and herbs in paelha',
        service: 'cocktail'
      }
    ],
    cocktailRecs: [
      {
        name: 'Saffron G&T',
        baseSpirit: 'Gin',
        description: 'Portuguese gin, tonic, saffron syrup, lemon',
        reasoning: 'Saffron bridge between cocktail and dish creates harmony'
      }
    ],
    sellingPoints: [
      'Large format dishes deserve large format wine sharing',
      'Rosé is the ultimate paelha partner - handles everything beautifully',
      'This is celebration food that calls for celebration drinks'
    ],
    upsellStrategy: 'Suggest multiple bottles for the table, offer wine flight to complement dish complexity'
  }
]

// Quick lookup functions
export const getPairingsByDish = (dishId: string): MenuPairing | undefined => {
  return candlCrewBeveragePairings.find(pairing => pairing.dishId === dishId)
}

export const getPairingsByCategory = (category: string): MenuPairing[] => {
  return candlCrewBeveragePairings.filter(pairing => pairing.category === category)
}

export const getAllUpsellStrategies = (): string[] => {
  return candlCrewBeveragePairings.map(pairing => pairing.upsellStrategy)
}

export const getSellingPointsForDish = (dishId: string): string[] => {
  const pairing = getPairingsByDish(dishId)
  return pairing?.sellingPoints || []
}