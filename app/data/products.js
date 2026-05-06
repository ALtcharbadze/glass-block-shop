import { Images } from "lucide-react"

const products = [
  {
    id: 1,
    name: 'მინის ბლოკის საკავა მაგიდა',
    price: 349,
    category: 'მაგიდები',
    description: 'ხელნაკეთი საკავა მაგიდა 12 მინის ბლოკისგან.',
    image: '/table1.jpg',
  },

  {
    id: 2,
    name: 'მინის ბლოკის პიედესტალი - პატარა',
    price: 149,
    category: 'პიედესტალები',
    description: 'შესანიშნავი მცენარის სადგამი ხის ზედაპირით.',
    image: '/padestal1.jpg',
  },

  {
    id: 3,
    name: 'მინის ბლოკის პიედესტალი - დიდი',
    price: 229,
    category: 'პიედესტალები',
    description: 'მაღალი პიედესტალი LED განათებით შიგნით.',
    image: '/padestal2.jpg',
  },

{
  id: 4,

  name: 'შუშის ბლოკის მაგიდა',

  price: 199,

  category: 'მაგიდები',

  description: 'კომპაქტური გვერდითი მაგიდა 10 მინის ბლოკისგან.',

  images: [
    '/table4.jpg',
    '/table3.jpg',
    '/table5.jpg'
  ],

  videos: [],
},

  {
    id: 5,
    name: 'LED განათების პიედესტალი',
    price: 279,
    category: 'პიედესტალები',
    description: 'მინის ბლოკის პიედესტალი ჩაშენებული LED განათებით.',
    image: '/padestal3.jpg',
  },

  {
    id: 6,
    name: 'ინდივიდუალური შეკვეთა',
    price: 499,
    category: 'ინდივიდუალური',
    description: 'გვითხარით თქვენი ზომა და სტილი — ჩვენ ავაშენებთ.',
    image: '/custom1.jpg',
  },
]

export default products