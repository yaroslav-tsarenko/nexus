import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./CartDetails.css";

const CartDetails = ({ className = "" }) => {
  return (
    <section className={`cart-details1 ${className}`}>
      <div className="header-parent">
        <div className="header2">
          <div className="header-child" />
          <div className="product-wrapper">
            <div className="product">Product</div>
          </div>
          <div className="price-parent">
            <div className="price">Price</div>
            <div className="quantity">Quantity</div>
          </div>
          <div className="total">Total</div>
        </div>
        <FrameComponent1 discount20OFF="Discount: 20% OFF" />
        <div className="frame-item" />
        <FrameComponent1 discount20OFF="Worth USD $400" />
        <div className="frame-inner" />
        <FrameComponent1 discount20OFF="Worth USD $400" />
        <div className="line-div" />
        <div className="button-parent">
          <button className="button2">
            <img className="tag-icon" alt="" src="/tag-icon.svg" />
            <div className="button3">Go Back</div>
            <img className="tag-icon1" alt="" src="/tag-icon.svg" />
          </button>
          <button className="button4">
            <img className="tag-icon2" alt="" src="/tag-icon.svg" />
            <div className="button5">Checkout</div>
            <img className="tag-icon3" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
      <div className="checkout-details">
        <div className="header3">
          <div className="checkout-details1">Checkout Details</div>
        </div>
        <div className="frame-parent15">
          <div className="frame-wrapper7">
            <div className="cart-subtotal-parent">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="div4">$360.00</div>
            </div>
          </div>
          <div className="frame-wrapper8">
            <div className="frame-parent16">
              <div className="shipping-handling-parent">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="group">
                <div className="div5">$0.00</div>
                <div className="div6">$0.00</div>
              </div>
            </div>
          </div>
          <div className="frame-child1" />
        </div>
        <div className="checkout-details-inner">
          <div className="grand-total-parent">
            <div className="grand-total">Grand Total</div>
            <div className="div7">$360.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default CartDetails;
