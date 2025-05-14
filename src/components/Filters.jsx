import '../styles/Filters.css' 
import { useId, useState, useEffect } from 'react';
import { useFilters } from '../hooks/useFilters.js'
import { getCategories } from '../services/products.js'

export function Filters () {
  const { filters, setFilters } = useFilters();
  const [categories, setCategories] = useState([]);

  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  
  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }));
  };

  return (
    <section className='filters'>
      <label htmlFor={categoryFilterId}>
        <h2>Category</h2>
        <select name='category' id={categoryFilterId} onChange={handleChangeCategory} >
          <option value='all'>All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>

      <label htmlFor={minPriceFilterId}>
        <h2>Price</h2>
        <input 
          type='range'
          id={minPriceFilterId} 
          min='0' max='1000' value={filters.minPrice}
          onChange={handleChangeMinPrice}
          onInput={(e) => e.target.nextElementSibling.value}
        />
        <output>{filters.minPrice}</output>
      </label>

    </section>
  )
}