import { useContext } from 'react'
import { CartshopContext } from '../context/cartshop.jsx'

export function useCartShop() {
  const cart = useContext(CartshopContext);

  if (cart === undefined) {
    throw new Error('useCartShop must be used within a CartshopProvider')
  }

  return cart;
}