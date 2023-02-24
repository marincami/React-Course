
 const ProductCard = ({ product }) => {
	return (
		<div className="product">
			<div className="left" style={{ backgroundImage: `url(${product.image})`}}></div>
			<div className="right">
				<h5>{product.name}</h5>
				<p>{product.description}</p>
				<p>Category: {product.category}</p>
				<p>Price: {product.price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
