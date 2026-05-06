'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import products from '@/app/data/products'
import { useCart } from '@/app/context/CartContext'

export default function ProductPage() {

  const params = useParams()

  const product = products.find(
    (p) => p.id === Number(params.id)
  )
const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(
  product.images ? product.images[0] : product.image
)
const [fullscreen, setFullscreen] = useState(false)

const currentImages = product.images
  ? product.images
  : [product.image]

const currentIndex = currentImages.indexOf(selectedImage)

const nextImage = () => {
  const next =
    (currentIndex + 1) % currentImages.length

  setSelectedImage(currentImages[next])
}

const prevImage = () => {
  const prev =
    (currentIndex - 1 + currentImages.length) %
    currentImages.length

  setSelectedImage(currentImages[prev])
}
useEffect(() => {

  const handleKeyDown = (e) => {

    if (!fullscreen) return

    if (e.key === 'ArrowRight') {
      nextImage()
    }

    if (e.key === 'ArrowLeft') {
      prevImage()
    }

    if (e.key === 'Escape') {
      setFullscreen(false)
    }
  }

  window.addEventListener('keydown', handleKeyDown)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }

}, [fullscreen, currentIndex])

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 px-8">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* IMAGE */}
        <div className="bg-white overflow-hidden border border-gray-200">

   <img
  src={selectedImage}
  alt={product.name}
  onClick={() => setFullscreen(true)}
  className="w-full h-[400px] md:h-[700px] object-cover cursor-pointer"
/>
{/* THUMBNAILS */}

{product.images && (

  <div className="flex gap-4 mt-4 flex-wrap">

    {product.images.map((img) => (

      <button
        key={img}
        onClick={() => setSelectedImage(img)}
        className={`border-2 ${
          selectedImage === img
            ? 'border-black'
            : 'border-transparent'
        }`}
      >

        <img
          src={img}
          alt=""
          className="w-24 h-24 object-cover"
        />

      </button>

    ))}

  </div>

)}
        </div>

        {/* INFO */}
        <div>

          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            SaMa Concept Store
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
            {product.name}
          </h1>

          <p className="text-3xl font-semibold text-black mb-8">
            {product.price} ლარი
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            {product.description}
          </p>

          <button
            onClick={() =>
  addToCart({
    ...product,
    image: product.images
      ? product.images[0]
      : product.image,
  })
}
            className="bg-black text-white px-10 py-4 hover:bg-gray-800 transition"
          >
            კალათაში დამატება
          </button>

          {/* DETAILS */}
          <div className="mt-16 border-t border-gray-300 pt-8">

            <h3 className="text-2xl font-bold text-black mb-6">
              დეტალები
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>
                • ხელნაკეთი პროდუქტი
              </li>

              <li>
                • საქართველოში დამზადებული
              </li>

              <li>
                • პრემიუმ ხარისხის მინის ბლოკები
              </li>

              <li>
                • ინდივიდუალური დიზაინის შესაძლებლობა
              </li>

            </ul>

          </div>

        </div>

      </div>
{/* FULLSCREEN GALLERY */}

{fullscreen && (

  <div
  onClick={() => setFullscreen(false)}
  className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center"
>

    {/* CLOSE */}
    <button
      onClick={() => setFullscreen(false)}
      className="absolute top-6 right-8 text-white text-5xl"
    >
      ×
    </button>

    {/* LEFT */}
    <button
      onClick={prevImage}
      className="absolute left-2 md:left-6 text-white text-4xl md:text-6xl px-2 md:px-4"
    >
      ‹
    </button>

    {/* IMAGE */}
    <img
  src={selectedImage}
  alt=""
  onClick={(e) => e.stopPropagation()}
  className="max-w-[90%] max-h-[90vh] object-contain"
/>

    {/* RIGHT */}
    <button
      onClick={nextImage}
      className="absolute right-2 md:right-6 text-white text-4xl md:text-6xl px-2 md:px-4"
    >
      ›
    </button>

  </div>

)}
    </main>
  )
}