// 1. hacer una petición GET a la ruta /products
// 2. obtener los datos de la respuesta
// 3. retornar los datos de la respuesta

export async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  
  return data;
}

// 1. hacer una petición GET a la ruta /categories
// 2. obtener los datos de la respuesta
// 3. retornar los datos de la respuesta

export async function getCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  
  return data;
}