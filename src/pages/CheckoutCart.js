import Header2 from "../components/Header2";
import Billing from "../components/Billing";
import OrderDetails from "../components/OrderDetails";
import Footer1 from "../components/Footer1";
import "./CheckoutCart.css";

const CheckoutCart = () => {
  return (
    <div className="checkoutcart">
      <Header2 ubigiCartsvg="/ubigicartsvg1@2x.png" />
      <header className="checkout-title-wrapper">
        <div className="checkout-title">
          <div className="checkout-wrapper">
            <h1 className="checkout1">Checkout</h1>
          </div>
          <div className="view-or-edit1">
            View or edit your cart before checkout
          </div>
        </div>
      </header>
      <form className="cart-details">
        <Billing />
        <OrderDetails />
      </form>
      <Footer1 propMargin="0" />
    </div>
  );
};

export default CheckoutCart;
