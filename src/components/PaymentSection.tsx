function PaymentSection() {
  return (
    <section className="payment-section">
      <h2>Payment</h2>
      <input type="text" placeholder="Cardholder Name" />
      <input type="text" placeholder="Card Number" />
      <input type="text" placeholder="Expiry (MM/YY)" />
      <input type="text" placeholder="CVV" />
      <select>
        <option>Choose Payment Method</option>
        <option>Credit Card</option>
        <option>Debit Card</option>
        <option>UPI</option>
        <option>Net Banking</option>
      </select>
      <button className="button">Pay Now</button>
    </section>
  );
}
export default PaymentSection;
