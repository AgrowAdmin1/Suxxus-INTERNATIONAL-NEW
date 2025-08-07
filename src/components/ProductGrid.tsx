import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Biscoff Dress', price: 2899, regularPrice: 3299, image: 'https://www.angrakhaa.com/cdn/shop/files/IMG_8384_jpg.jpg?v=1753157823&width=400', sale: true },
  { id: 2, name: 'Plaidy Dress', price: 2999, regularPrice: 3499, image: 'https://www.angrakhaa.com/cdn/shop/files/IMG_8393_jpg_8.jpg?v=1753163255&width=400', sale: true },
  { id: 3, name: 'Leaflet Dress', price: 2599, regularPrice: 2999, image: 'https://www.angrakhaa.com/cdn/shop/files/IMG_8393_jpg.jpg?v=1753163248&width=400', sale: true },
];

function ProductGrid() {
  return (
    <section className="grid" id="products">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
export default ProductGrid;
