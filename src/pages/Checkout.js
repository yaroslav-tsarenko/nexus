import Header1 from "../components/Header1";
import CartDetails from "../components/CartDetails";
import Footer1 from "../components/Footer1";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <Header1 />
      <section className="checkout-inner">
        <div className="frame-parent">
          <div className="your-cart-wrapper">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <p className="view-or-edit">View or edit your cart before checkout</p>
        </div>
      </section>
      <CartDetails />
      <Footer1 />
    </div>
  );
};

export default Checkout;
