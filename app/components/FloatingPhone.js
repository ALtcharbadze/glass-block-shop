'use client'

import { Phone } from 'lucide-react'

export default function FloatingPhone() {

  return (

    <a
      href="tel:+995599123456"
      className="
      fixed
      bottom-24
      right-4
      z-9999

      w-14
      h-14

      rounded-full

      flex
      items-center
      justify-center

      shadow-xl
      smooth-transition

      hover:scale-105
      active:scale-95

      backdrop-blur-xl
      border border-white/30
      "
      style={{
        background:
          'linear-gradient(135deg, rgba(34,197,94,0.92), rgba(22,163,74,0.92))',
      }}
    >

      <Phone
        size={24}
        color="white"
        strokeWidth={2.4}
      />

    </a>

  )
}