import "./OrderDetails.css";

const OrderDetails = ({ className = "" }) => {
  return (
    <div className={`order-details ${className}`}>
      <div className="checkout-details2">
        <div className="header-wrapper">
          <div className="header6">
            <div className="checkout-details3">Checkout Details</div>
          </div>
        </div>
        <div className="subtotal-total">
          <div className="calculation">
            <div className="cart-subtotal1">Cart Subtotal</div>
            <div className="separator">$360.00</div>
          </div>
        </div>
        <div className="shipping-taxes">
          <div className="shipping-taxes-container">
            <div className="charges">
              <div className="shipping-handling1">{`Shipping & Handling`}</div>
              <div className="taxes">
                <div className="other-taxes1">Other Taxes</div>
              </div>
            </div>
            <div className="empty-calculation">
              <div className="empty-calculation-labels">$0.00</div>
              <div className="empty-calculation-labels1">$0.00</div>
            </div>
          </div>
        </div>
        <div className="order-summary-divider">
          <div className="order-summary-divider-child" />
        </div>
        <div className="subtotal-total1">
          <div className="grand-total-group">
            <div className="grand-total1">Grand Total</div>
            <div className="div8">$360.00</div>
          </div>
        </div>
      </div>
      <div className="transfer-options">
        <div className="header7">
          <div className="transfer-options1">Transfer Options</div>
        </div>
        <div className="checkout-details4">
          <div className="logos-block">
            <div className="block-15">
              <div className="logo-block">
                <img
                  className="image-1-icon"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="bank-transfer">
                <p className="bank">Bank</p>
                <p className="transfer">Transfer</p>
              </div>
            </div>
            <div className="block-25">
              <div className="logo-block1">
                <img
                  className="image-2-icon"
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="google-pay">
                <p className="google">Google</p>
                <p className="pay">Pay</p>
              </div>
            </div>
            <div className="block-3">
              <div className="logo-block2">
                <img
                  className="image-3-icon"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="apple-pay">
                <p className="apple">Apple</p>
                <p className="pay1">Pay</p>
              </div>
            </div>
            <div className="block-4">
              <div className="logo-block3">
                <img
                  className="image-4-icon"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="paypal">PayPal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout3">
        <div className="header8">
          <div className="checkout4">Checkout</div>
        </div>
        <div className="checkout-details5">
          <p className="your-personal-data">
            Your Personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our product
          </p>
          <button className="button11">
            <img className="tag-icon8" alt="" src="/tag-icon.svg" />
            <div className="button12">Checkout</div>
            <img className="tag-icon9" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default OrderDetails;
