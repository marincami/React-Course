import { useState } from 'react';
import { useQuery } from 'react-query';
import ProductCard from './ProductCard';

const ProductList = () => {

	const [page, setPage] = useState(1);

	const getProducts = async ({ queryKey }) => {
		const response = await fetch(`https://peticiones.online/api/products?page=${queryKey[1]}`);
		return response.json();
	};

	const { data, status } = useQuery(['products', page], getProducts); // params: key and function

	if(status === 'loading') {
		return <p>Waiting for the products ...</p>;
	}

	if(status === 'error') {
		return <p>Error</p>;
	}

	return (
		<div>
			<h2>Products List</h2>
			<div>
				<button onClick={() => setPage(page - 1)}>Back</button>
				<button onClick={() => setPage(page + 1)}>Next</button>
      </div>
			<div className="products">
					{data.results.map(prod => (
						<ProductCard product={prod} key={prod.id} />
					))}
      </div>
		</div>
	)
}

export default ProductList;
