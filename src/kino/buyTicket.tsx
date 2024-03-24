function BuyTickets() {
  // Assuming totalPrice is calculated somewhere in your code
  const totalPrice = 0; // Placeholder value, replace with actual calculation

  return (
    <div className="buy-tickets-container">
      <h2>Payment</h2>

      {/* Basket or total amount box */}
      <div className="basket-box">
        <h3 className="basket-heading">Total Amount</h3>
        <p className="amount-paragraph">Amount to Pay: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default BuyTickets;
