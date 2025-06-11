const SearchForm = ({ action }) => {
  return (
    <form action={action} className='w-full max-w-4xl'>
      <fieldset className='bg-base-200 border border-base-300 rounded-box p-4'>
        <legend className='fieldset-legend mb-2'>Search Products</legend>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-end'>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Category</label>
            <select name='category' className='select select-bordered w-full'>
              <option value=''>All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value='jewelery'>Jewelery</option>
              <option value='electronics'>Electronics</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Min Price</label>
            <input
              type='number'
              className='input input-bordered w-full'
              name='minPrice'
              placeholder='Min'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Max Price</label>
            <input
              type='number'
              className='input input-bordered w-full'
              name='maxPrice'
              placeholder='Max'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Product Type</label>
            <select name='query' className='select select-bordered w-full'>
              <option value=''>Any</option>
              <option value='jacket'>Jacket</option>
              <option value='t-shirt'>T-Shirt</option>
              <option value='watch'>Watch</option>
              <option value='ring'>Ring</option>
              <option value='monitor'>Monitor</option>
              <option value='drive'>Drive</option>
            </select>
          </div>
          <div className='flex justify-end md:items-end'>
            <button type='submit' className='btn btn-neutral w-full md:w-auto mt-1 md:mt-0'>
              Search
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchForm;
