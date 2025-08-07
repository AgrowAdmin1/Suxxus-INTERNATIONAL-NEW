const testimonials = [
  { name: 'Grishma Desai', review: 'It fits really well and love the colour', product: 'Biscotti Dress', image: 'https://www.angrakhaa.com/cdn/shop/files/IMG_8384_jpg.jpg?v=1753157823&width=100' },
  { name: 'Annapurna Bose', review: 'Calypso Set', product: 'Calypso Set', image: 'https://www.angrakhaa.com/cdn/shop/files/IMG_8393_jpg_8.jpg?v=1753163255&width=100' },
  { name: 'Rajul Sheth', review: 'Nice. Will let i know after using product', product: 'Aarna Dress', image: 'https://www.angrakhaa.com/cdn/shop/files/IMG_8393_jpg.jpg?v=1753163248&width=100' },
];

function Testimonials() {
  return (
    <section className="section-pink" id="testimonials">
      <h2>Testimonials</h2>
      <div style={{ display: 'flex', gap: '2em', justifyContent: 'center', flexWrap: 'wrap' }}>
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.image} alt={t.product} style={{ borderRadius: '50%', width: 60, height: 60 }} />
            <h4>{t.name}</h4>
            <p style={{ fontStyle: 'italic' }}>{t.review}</p>
            <span style={{ color: '#f44336', fontWeight: 'bold' }}>{t.product}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
