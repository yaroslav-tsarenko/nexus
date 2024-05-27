import "./Billing.css";

const Billing = ({ className = "" }) => {
  return (
    <div className={`billing ${className}`}>
      <h3 className="checkout2">Checkout</h3>
      <input className="header5" placeholder="Billing Details" type="text" />
      <div className="form-field-block">
        <div className="row-1">
          <div className="block-1">
            <input
              className="first-name"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="block-2">
            <input className="last-name" placeholder="Last Name" type="text" />
          </div>
        </div>
        <div className="row-2">
          <div className="block-11">
            <input
              className="company-name"
              placeholder="Company Name"
              type="text"
            />
          </div>
          <div className="block-21">
            <div className="country">Country</div>
            <img className="icon" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="row-3">
          <div className="block-12">
            <input
              className="street-address"
              placeholder="Street Address"
              type="text"
            />
          </div>
        </div>
        <div className="block-22">
          <input
            className="apartment-suite"
            placeholder="Apartment / Suite / Unit / etc. (Optional)"
            type="text"
          />
        </div>
        <div className="row-4">
          <div className="block-13">
            <input
              className="town-city"
              placeholder="Town / City"
              type="text"
            />
          </div>
        </div>
        <div className="block-23">
          <input
            className="email-address"
            placeholder="Email Address"
            type="text"
          />
        </div>
        <div className="row-5">
          <div className="block-14">
            <input className="zip" placeholder="ZIP" type="text" />
          </div>
          <div className="block-24">
            <input className="phone" placeholder="Phone" type="text" />
          </div>
        </div>
      </div>
      <div className="billing-child" />
      <div className="billing-header">
        <button className="button7">
          <img className="tag-icon4" alt="" src="/tag-icon.svg" />
          <div className="button8">Go Back</div>
          <img className="tag-icon5" alt="" src="/tag-icon.svg" />
        </button>
        <button className="button9">
          <img className="tag-icon6" alt="" src="/tag-icon.svg" />
          <div className="button10">Checkout</div>
          <img className="tag-icon7" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};


export default Billing;
