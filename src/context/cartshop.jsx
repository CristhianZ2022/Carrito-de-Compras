import { createContext, useState, useReducer } from 'react'
import { reducer, initialState } from '../reducer/cartReducer.jsx'

// 1. Crear un contexto para manejar el carrito
export const CartshopContext = createContext()

// 2. Crear el provider, para proveer el contexto
export function CartshopProvider ({ children }) {
  const [quantity, setQuantity] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product, quantity) => dispatch({
    type: 'ADD_TO_CART',
    payload: product,
    quantity
  });

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  });

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return (
    <CartshopContext.Provider value={{ cart: state, quantity, setQuantity,  addToCart, removeFromCart, clearCart }}>
      {children}
    </CartshopContext.Provider>
  )
}