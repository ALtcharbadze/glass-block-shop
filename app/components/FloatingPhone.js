'use client'

import { Phone } from 'lucide-react'

export default function FloatingPhone() {

  return (

    <a
      href="tel:+995568504726"
      className="
      fixed
      bottom-24
      right-5
      z-9999
      w-15
      h-15
      rounded-full
      flex
      items-center
      justify-center
      shadow-2xl
      smooth-transition
      hover:scale-110
      "
      style={{
  background:
    'linear-gradient(135deg, #22c55e, #16a34a)',
}}
    >

      <Phone
        size={28}
        color="white"
        strokeWidth={2.2}
      />

    </a>

  )
}