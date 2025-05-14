import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { StarRating } from '../subcomponents/Rating.jsx'
import { useCartShop } from '../hooks/useCartShop.js'
import '../styles/Products.css'

export function Products ({ products }) {
  const { addToCart,removeFromCart, cart } = useCartShop();

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
              </div>
              < StarRating rate={product.rating.rate} />
              <div>
                <button onClick={() => 
                  isInCart 
                  ? removeFromCart(product) 
                  : addToCart(product)}
                  style={{ 
                    backgroundColor: isInCart 
                    ? '#f00' 
                    : '#222' 
                  }} >
                  {
                    isInCart 
                    ? <RemoveFromCartIcon /> 
                    : <AddToCartIcon />
                  }
                </button>
                <strong>${parseFloat(product.price).toFixed(2)}</strong>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}