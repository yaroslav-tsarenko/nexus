import Footer from "./Footer";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={`footer-group ${className}`}>
      <Footer />
      <img className="container-icon3" alt="" src="/container-1.svg" />
    </footer>
  );
};


export default FrameComponent;
