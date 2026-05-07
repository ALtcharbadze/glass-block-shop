'use client'

import { FiInstagram } from 'react-icons/fi'

export default function FloatingInstagram() {

  return (

    <a
      href="https://instagram.com/sama.conceptstore"
      target="_blank"
      rel="noopener noreferrer"
className="
  fixed
  bottom-5
  right-5
  z-[999]
w-12 h-12 md:w-14 md:h-14
  rounded-full
  text-white
  flex
  items-center
  justify-center
  shadow-2xl
  hover:scale-110
  transition
  bg-gradient-to-tr
  from-yellow-400
  via-pink-500
  to-purple-600
"
    >

      <FiInstagram className="text-[20px] md:text-[24px]" />

    </a>
  )
}