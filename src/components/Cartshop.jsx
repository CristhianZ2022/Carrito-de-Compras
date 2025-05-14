import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import { useCartShop } from '../hooks/useCartShop.js'
import '../styles/Cartshop.css'

export function Cartshop () {
  const cartCheckboxId = useId();
  const { cart, clearCart, setQuantity, addToCart, removeFromCart } = useCartShop();

  const handleChangeQuantity = (e, product) => {
    addToCart(product, Number(e.target.value))
  };

  function CartItems({ product, image, title, price, rating, removeFromCart }) {

    return (
      <li>
        <img src={image} alt={title} />
        <footer>
          <strong>{title}</strong> 
          <div>
            <strong>${price}</strong>
            <select name="quantity" 
              onChange={e => handleChangeQuantity(e, product)} value={product.quantity} >

              {Array.from({ length: rating.count }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}

            </select>
          </div>
        </footer>
        <button className='delete-item' onClick={removeFromCart}>🗑️</button>
      </li>
    )
    
  }

  return (
    <>
    <div className='counter'>{cart.length}</div>
    <label htmlFor={cartCheckboxId} className='cart-button'>
      <CartIcon />
    </label>
    <input type="checkbox" id={cartCheckboxId} className='cart-checkbox' hidden />

    <aside className='cart'>
      <ul>
        {cart.map(product => (
          <CartItems
            key={product.id}
            product={product}
            handleChangeQuantity={handleChangeQuantity}
            removeFromCart={() => removeFromCart(product)}
            {...product}
          />
        ))}
      </ul>
      <button onClick={clearCart}>
        <ClearCartIcon />
      </button>
    </aside>
    </>
  )
}