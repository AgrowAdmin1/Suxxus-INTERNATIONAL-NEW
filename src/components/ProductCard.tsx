type ProductProps = {
  name: string;
  price: number;
  regularPrice: number;
  image: string;
  sale?: boolean;
};

function ProductCard({ name, price, regularPrice, image, sale }: ProductProps) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      {sale && <span className="sale-badge">SALE</span>}
      <h3>{name}</h3>
      <p>
        <span style={{ color: '#f44336', fontWeight: 'bold' }}>Rs. {price}</span>
        {sale && <span style={{ textDecoration: 'line-through', marginLeft: 8, color: '#888' }}>Rs. {regularPrice}</span>}
      </p>
      <button className="button">Choose Options</button>
    </div>
  );
}
export default ProductCard;
