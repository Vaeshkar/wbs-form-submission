import { Instructions, SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';
import { use, useActionState } from 'react';

const searchAction = async (_prevState, formData) => {
  const query = formData.get('query')?.trim();
  const category = formData.get('category')?.trim();
  const minPrice = formData.get('minPrice');
  const maxPrice = formData.get('maxPrice');

  const parsedMinPrice = minPrice ? Number(minPrice) : undefined;
  const parsedMaxPrice = maxPrice ? Number(maxPrice) : undefined;

  if (!query && !category && !minPrice && !maxPrice) {
  return { error: 'Please select at least one filter to search.' };
}

  const products = await searchProducts({
    query,
    category,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice
  });
  return  products;
};

const productsPromise = searchProducts();

const Search = () => {
  const initialProducts = use(productsPromise);
  const [state, formAction] = useActionState(searchAction, { initialProducts });

  const products = Array.isArray(state?.products) ? state.products : [];
  console.log('initialProducts:', initialProducts);
  console.log('state.products:', state.products);
  console.log('Actual products passed:', products);
  console.log('Full state:', state);
  return (
    <div className='flex flex-col items-center'>
      <SearchForm action={formAction} />
      <SearchResults products={products}/>
      {state?.error && (
        <div className='alert alert-error shadow-lg mt-4'>
          <span>{state.error}</span>
        </div>
      )}
      <Instructions path='/search.md' />
    </div>
  );
};

export default Search;
