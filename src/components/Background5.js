import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";
import "./Background5.css";

const Background5 = ({ className = "" }) => {
  return (
    <div className={`background19 ${className}`}>
      <div className="background-child">
        <div className="nexusconnectnet-wholesale-prog-parent">
          <div className="nexusconnectnet-wholesale-prog">
            NexusConnectNet Wholesale Program
          </div>
          <div className="apis-integration">{`APIs integration & eSIM management platform`}</div>
        </div>
      </div>
      <div className="screen-laptop-aurigapng-parent">
        <img
          className="screen-laptop-aurigapng-icon"
          alt=""
          src="/screenlaptopaurigapng@2x.png"
        />
        <img
          className="sim-management-efficient-feet-icon"
          loading="lazy"
          alt=""
          src="/simmanagementefficientfeetfrgif@2x.png"
        />
      </div>
      <div className="background-inner1">
        <div className="frame-parent63">
          <div className="frame-parent64">
            <FrameComponent8
              sVG="/svg-13.svg"
              activate="Activate"
              yourESIMs="your eSIMs"
            />
            <FrameComponent8
              sVG="/svg-14@2x.png"
              activate="Add"
              yourESIMs="data plans"
              propWidth="36px"
              propColor="#fff"
            />
          </div>
          <FrameComponent7 sVG="/svg-151@2x.png" />
        </div>
      </div>
      <img className="link-svg8" alt="" src="/link--svg.svg" />
    </div>
  );
};



export default Background5;
