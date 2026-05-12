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
      right-4
      z-9999

      w-14
      h-14

      rounded-full

      flex
      items-center
      justify-center

      shadow-xl

      hover:scale-105
      active:scale-95

      smooth-transition

      backdrop-blur-xl
      border border-white/20
      "
      style={{
        background:
          'linear-gradient(135deg, rgba(249,168,37,0.95), rgba(236,72,153,0.95), rgba(147,51,234,0.95))',
      }}
    >

      <FiInstagram
        className="text-[22px] text-white"
      />

    </a>
  )
}