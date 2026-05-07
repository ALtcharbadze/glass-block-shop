'use client'

import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {

    // FIX MULTIPLE IMAGES
    const normalizedProduct = {
      ...product,
      image: product.images
        ? product.images[0]
        : product.image,
    }

    const existing = cart.find(
      (item) => item.id === normalizedProduct.id
    )

    if (existing) {

      setCart(
        cart.map((item) =>
          item.id === normalizedProduct.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        {
          ...normalizedProduct,
          qty: 1,
        },
      ])
    }
  }

  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  )

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >

      {children}

    </CartContext.Provider>
  )
}

export const useCart = () =>
  useContext(CartContext)