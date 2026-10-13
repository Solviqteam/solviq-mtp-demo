export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  category: 'starters' | 'signature' | 'mains' | 'sides' | 'drinks' | 'desserts'
  image: string
  featured?: boolean
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Smokey Pork Belly Bites',
    description: 'Crispy, caramelised pork belly with burnt apple glaze. *Illustrative demo price.*',
    price: '฿245',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    name: 'Fire-Kissed Pork Ribs',
    description: 'Low and slow, lacquered with house rub. *Illustrative demo price.*',
    price: '฿695',
    category: 'signature',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    name: 'Char-Grilled Pork Chop',
    description: 'Thick-cut chop, served with roasted spuds and peppercorn jus. *Illustrative demo price.*',
    price: '฿545',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Pulled Pork Brioche',
    description: '16-hour pulled pork, slaw and pickles. *Illustrative demo price.*',
    price: '฿325',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2058&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Crispy Pork Skins',
    description: 'Lightly seasoned with smoked salt. *Illustrative demo price.*',
    price: '฿95',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1980&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Roasted Sweet Potatoes',
    description: 'Charred and tossed with chilli lime butter. *Illustrative demo price.*',
    price: '฿95',
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Burnt Ends Platter',
    description: 'Sticky, saucy burnt ends to share. *Illustrative demo price.*',
    price: '฿495',
    category: 'signature',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '8',
    name: 'House Slaw',
    description: 'Crisp, creamy, bright and fresh. *Illustrative demo price.*',
    price: '฿75',
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop',
  },
  {
    id: '9',
    name: 'Chocolate & Salted Caramel Tart',
    description: 'Silken chocolate with a pinch of sea salt. *Illustrative demo price.*',
    price: '฿165',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: '10',
    name: 'Craft Soda Selection',
    description: 'Rotating house-made sodas. *Illustrative demo price.*',
    price: '฿95',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=1974&auto=format&fit=crop',
  },
]
