import { getProducts } from './services/products.js'
import { useFilters } from './hooks/useFilters.js'

import { Products } from './components/Products.jsx'
import { Cartshop } from './components/Cartshop.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { CartshopProvider } from './context/cartshop.jsx'

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const { filterProducts } = useFilters();

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  },  []);

  const filteredProducts = filterProducts(products);

  return (
    <CartshopProvider>
      <Header />
      <Cartshop />
      <Products products={filteredProducts} />
      <Footer />
    </CartshopProvider>
  )
}

export default App