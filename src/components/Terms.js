import Header2 from "./Header2";
import PropTypes from "prop-types";
import "./Terms.css";

const Terms = ({ className = "" }) => {
  return (
    <section className={`terms ${className}`}>
      <Header2
        ubigiCartsvg="/ubigicartsvg3@2x.png"
        navListTextDecoration="none"
        verticalDividerTextDecoration="unset"
      />
      <header className="terms-content-wrapper">
        <div className="terms-content">
          <div className="terms-and-conditions-wrapper">
            <h1 className="terms-and-conditions">Terms and Conditions</h1>
          </div>
          <p className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</p>
        </div>
      </header>
    </section>
  );
};


export default Terms;
