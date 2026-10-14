export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  category: 'starters' | 'signature' | 'mains' | 'sides' | 'drinks' | 'desserts'
  featured?: boolean
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Smokey Pork Belly Bites',
    description: 'Crispy, caramelised pork belly with burnt apple glaze.',
    price: 'RM22',
    category: 'starters',
    featured: true,
  },
  {
    id: '2',
    name: 'Fire-Kissed Pork Ribs',
    description: 'Low and slow, lacquered with house rub.',
    price: 'RM45',
    category: 'signature',
    featured: true,
  },
  {
    id: '3',
    name: 'Char-Grilled Pork Chop',
    description: 'Thick-cut chop, served with roasted spuds and peppercorn jus.',
    price: 'RM38',
    category: 'mains',
  },
  {
    id: '4',
    name: 'Pulled Pork Brioche',
    description: '16-hour pulled pork, slaw and pickles.',
    price: 'RM24',
    category: 'mains',
  },
  {
    id: '5',
    name: 'Crispy Pork Skins',
    description: 'Lightly seasoned with smoked salt.',
    price: 'RM10',
    category: 'starters',
  },
  {
    id: '6',
    name: 'Roasted Sweet Potatoes',
    description: 'Charred and tossed with chilli lime butter.',
    price: 'RM10',
    category: 'sides',
  },
  {
    id: '7',
    name: 'Burnt Ends Platter',
    description: 'Sticky, saucy burnt ends to share.',
    price: 'RM36',
    category: 'signature',
    featured: true,
  },
  {
    id: '8',
    name: 'House Slaw',
    description: 'Crisp, creamy, bright and fresh.',
    price: 'RM8',
    category: 'sides',
  },
  {
    id: '9',
    name: 'Chocolate & Salted Caramel Tart',
    description: 'Silken chocolate with a pinch of sea salt.',
    price: 'RM16',
    category: 'desserts',
  },
  {
    id: '10',
    name: 'Craft Soda Selection',
    description: 'Rotating house-made sodas.',
    price: 'RM10',
    category: 'drinks',
  },
]
