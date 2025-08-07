function CustomerSection() {
  return (
    <section className="customer-section">
      <h2>Customer Details</h2>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="tel" placeholder="Phone Number" />
      <button className="button">Continue</button>
    </section>
  );
}
export default CustomerSection;
