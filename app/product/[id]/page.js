'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import products from '@/app/data/products'
import { useCart } from '@/app/context/CartContext'

import {
  Truck,
  ShieldCheck,
  Sparkles,
  Hammer,
} from 'lucide-react'

export default function ProductPage() {

  const params = useParams()

  const product = products.find(
    (p) => p.id === Number(params.id)
  )

  const { addToCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(
    product?.images
      ? product.images[0]
      : product?.image
  )

  const [fullscreen, setFullscreen] = useState(false)

  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </main>
    )
  }

  const currentImages = product.images
    ? product.images
    : [product.image]

  const currentIndex =
    currentImages.indexOf(selectedImage)

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

  // TOUCH SWIPE

  const handleTouchStart = ({ targetTouches }) => {
    setTouchStartX(targetTouches[0].clientX)
  }

  const handleTouchMove = ({ targetTouches }) => {
    setTouchEndX(targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {

    const distance = touchStartX - touchEndX

    // SWIPE LEFT
    if (distance > 50) {
      nextImage()
    }

    // SWIPE RIGHT
    if (distance < -50) {
      prevImage()
    }
  }

  // KEYBOARD ARROWS

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

    window.addEventListener(
      'keydown',
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }

  }, [fullscreen, currentIndex])

  return (

    <main className="min-h-screen pt-24 md:pt-32 px-4 md:px-8 pb-16">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

        {/* IMAGE SECTION */}

        <div>

          {/* MAIN IMAGE */}

          <div className="bg-white overflow-hidden border border-gray-200">

            <img
              src={selectedImage}
              alt={product.name}
              onClick={() => setFullscreen(true)}
              className="w-full h-[400px] md:h-[700px] object-cover cursor-pointer"
            />

          </div>

          {/* THUMBNAILS */}

          {product.images && (

            <div className="flex gap-3 md:gap-4 mt-4 flex-wrap">

              {product.images.map((img) => (

                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`border-2 transition ${
                    selectedImage === img
                      ? 'border-black'
                      : 'border-transparent'
                  }`}
                >

                  <img
                    src={img}
                    alt=""
                    className="w-20 h-20 md:w-24 md:h-24 object-cover cursor-pointer"
                  />

                </button>

              ))}

            </div>

          )}

        </div>

        {/* INFO SECTION */}

        <div>

          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">

            SaMa Concept Store

          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">

            {product.name}

          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-black mb-8">

            {product.price.toFixed(2)} ლარი

          </p>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-10">

            {product.description}

          </p>

          {/* ADD TO CART */}

          <button
            onClick={() => {

              addToCart({
                ...product,
                image: product.images
                  ? product.images[0]
                  : product.image,
              })

              setAdded(true)

              setTimeout(() => {
                setAdded(false)
              }, 2000)
            }}
            className={`px-6 md:px-10 py-3 md:py-4 transition text-white ${
              added
                ? 'bg-green-600'
                : 'bg-black hover:bg-gray-800'
            }`}
          >

            {added
              ? '✓ დამატებულია'
              : 'კალათაში დამატება'}

          </button>

          {/* DETAILS */}

          <div className="mt-16 border-t border-gray-300 pt-8">

            <h3 className="text-2xl font-bold text-black mb-6">

              დეტალები

            </h3>

<div className="space-y-5 text-gray-700">

  {product.details.map((detail, index) => (

    <div
  key={index}
  className="flex items-center gap-4"
>

  <p>
    {detail}
  </p>

</div>

  ))}

</div>

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
            className="absolute top-4 md:top-6 right-5 md:right-8 text-white text-4xl md:text-5xl"
          >
            ×
          </button>

          {/* LEFT */}

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-2 md:left-6 text-white text-4xl md:text-6xl px-2 md:px-4"
          >
            ‹
          </button>

          {/* IMAGE */}

          <img
            src={selectedImage}
            alt=""
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="max-w-[92%] max-h-[88vh] object-contain select-none"
          />

          {/* RIGHT */}

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-2 md:right-6 text-white text-4xl md:text-6xl px-2 md:px-4"
          >
            ›
          </button>

        </div>

      )}

      {/* TOAST */}

      {added && (

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-5 md:px-6 py-3 md:py-4 rounded-xl shadow-2xl z-[9999] text-sm md:text-base whitespace-nowrap">

          წარმატებით დაემატა კალათაში

        </div>

      )}

    </main>
  )
}