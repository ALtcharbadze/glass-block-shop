'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import products from '@/app/data/products'
import { useCart } from '@/app/context/CartContext'

export default function ProductPage() {

  const params = useParams()

  const product = products.find(
    (p) => p.id === Number(params.id)
  )

  const { addToCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(null)

  const [fullscreen, setFullscreen] = useState(false)

  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const [added, setAdded] = useState(false)

  // DEFAULT IMAGE

  useEffect(() => {

    if (product) {

      setSelectedImage(
        product.images?.[0] || product.image
      )
    }

  }, [product])

  // NOT FOUND

  if (!product) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">

          Product not found

        </h1>

      </main>
    )
  }

  // IMAGES

  const currentImages = product.images
    ? product.images
    : [product.image]

  const currentIndex =
    currentImages.indexOf(selectedImage)

  // NEXT IMAGE

  const nextImage = () => {

    const next =
      (currentIndex + 1) % currentImages.length

    setSelectedImage(currentImages[next])
  }

  // PREVIOUS IMAGE

  const prevImage = () => {

    const prev =
      (
        currentIndex - 1 +
        currentImages.length
      ) % currentImages.length

    setSelectedImage(currentImages[prev])
  }

  // TOUCH START

  const handleTouchStart = ({
    targetTouches
  }) => {

    // PINCH ZOOM
    if (targetTouches.length > 1) {

      setTouchStartX(0)
      setTouchEndX(0)

      return
    }

    setTouchStartX(
      targetTouches[0].clientX
    )

    setTouchEndX(
      targetTouches[0].clientX
    )
  }

  // TOUCH MOVE

  const handleTouchMove = ({
    targetTouches
  }) => {

    // PINCH ZOOM
    if (targetTouches.length > 1) {

      setTouchStartX(0)
      setTouchEndX(0)

      return
    }

    setTouchEndX(
      targetTouches[0].clientX
    )
  }

  // TOUCH END

  const handleTouchEnd = () => {

    // INVALID
    if (
      touchStartX === 0 ||
      touchEndX === 0
    ) {
      return
    }

    const distance =
      touchStartX - touchEndX

    // TOO SMALL
    if (Math.abs(distance) < 60) {

      setTouchStartX(0)
      setTouchEndX(0)

      return
    }

    // LEFT
    if (distance > 0) {

      nextImage()
    }

    // RIGHT
    if (distance < 0) {

      prevImage()
    }

    // RESET
    setTouchStartX(0)
    setTouchEndX(0)
  }

  // KEYBOARD

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

    <main className="min-h-screen pt-24 md:pt-32 pb-20">

      <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">

        {/* LEFT */}

        <div>

          {/* MAIN IMAGE */}

          <div className="card-box overflow-hidden">

            {selectedImage && (

              <div
                onClick={() => setFullscreen(true)}
                className="relative w-full aspect-square overflow-hidden cursor-pointer"
              >

                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover smooth-transition hover:scale-[1.02]"
                />

              </div>

            )}

          </div>

          {/* THUMBNAILS */}

          {product.images && (

            <div className="flex gap-3 md:gap-4 mt-5 flex-wrap">

              {product.images.map((img) => (

                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`relative overflow-hidden rounded-2xl border-2 smooth-transition ${
                    selectedImage === img
                      ? 'border-black'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >

                  <div className="relative w-20 h-20 md:w-24 md:h-24">

                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      sizes="120px"
                      className="object-cover smooth-transition hover:opacity-70"
                    />

                  </div>

                </button>

              ))}

            </div>

          )}

        </div>

        {/* RIGHT */}

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-4">

            SaMa Concept Store

          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-[1.05] tracking-[-0.03em]">

            {product.name}

          </h1>

          <p className="text-3xl md:text-4xl font-semibold text-black mb-8">

            {product.price.toFixed(2)} ლარი

          </p>

          <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-12">

            {product.description}

          </p>

          {/* BUTTON */}

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
            className={`button-primary rounded-2xl px-8 md:px-12 py-4 md:py-5 text-base md:text-lg ${
              added
                ? 'bg-green-600'
                : ''
            }`}
          >

            {added
              ? '✓ დამატებულია'
              : 'კალათაში დამატება'}

          </button>

          {/* DETAILS */}

          <div className="mt-16 pt-10 border-t border-gray-200">

            <h3 className="text-2xl font-bold text-black mb-8">

              დეტალები

            </h3>

            <div className="space-y-5 text-gray-700 text-base md:text-lg">

              {product.details.map((detail, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <div className="w-2 h-2 rounded-full bg-black mt-3 shrink-0" />

                  <p className="leading-relaxed">

                    {detail}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

{/* FULLSCREEN */}

{fullscreen && selectedImage && (

  <div
    onClick={() => setFullscreen(false)}
    className="fixed inset-0 bg-black/95 z-9999"
  >

    {/* CLOSE */}

    <button
      onClick={() => setFullscreen(false)}
      className="absolute top-4 right-5 md:right-8 text-white text-5xl z-50"
    >
      ×
    </button>

    {/* LEFT */}

    <button
      onClick={(e) => {
        e.stopPropagation()
        prevImage()
      }}
      className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-5xl z-50"
    >
      ‹
    </button>

    {/* RIGHT */}

    <button
      onClick={(e) => {
        e.stopPropagation()
        nextImage()
      }}
      className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-5xl z-50"
    >
      ›
    </button>

    {/* IMAGE */}

    <img
      src={selectedImage}
      alt={product.name}
      onClick={(e) => e.stopPropagation()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        max-w-[92vw]
        max-h-[88vh]
        object-contain
        select-none
      "
    />

  </div>

)}

      {/* TOAST */}

      {added && (

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-5 md:px-6 py-3 md:py-4 rounded-2xl shadow-2xl z-9999 text-sm md:text-base whitespace-nowrap">

          წარმატებით დაემატა კალათაში

        </div>

      )}

    </main>
  )
}