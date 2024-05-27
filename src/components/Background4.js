import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";
import "./Background4.css";

const Background4 = ({ className = "" }) => {
  return (
    <div className={`background20 ${className}`}>
      <div className="background-inner2">
        <div className="nexusconnectnet-associate-prog-parent">
          <div className="nexusconnectnet-associate-prog">
            NexusConnectNet Associate Program
          </div>
          <div className="affiliation-platform-co-bran-wrapper">
            <p className="affiliation-platform">{`Affiliation platform & co-branded subdomain`}</p>
          </div>
        </div>
      </div>
      <div className="ubigi-associate-programpng-wrapper">
        <img
          className="ubigi-associate-programpng-icon"
          loading="lazy"
          alt=""
          src="/ubigiassociateprogrampng@2x.png"
        />
      </div>
      <div className="background-inner3">
        <div className="frame-parent65">
          <div className="frame-parent66">
            <div className="frame-parent67">
              <div className="svg-wrapper17">
                <img className="svg-icon23" alt="" src="/svg-161.svg" />
              </div>
              <a className="promote-nexusconnectnet-esims">
                <p className="promote">Promote</p>
                <p className="nexusconnectnet-esims">NexusConnectNet eSIMs</p>
              </a>
            </div>
            <FrameComponent8
              sVG="/svg-17.svg"
              activate="Tracking "
              yourESIMs="system"
              propWidth="36px"
              propColor="#000"
            />
          </div>
          <FrameComponent7 sVG="/svg-18@2x.png" propColor="#000" />
        </div>
      </div>
    </div>
  );
};


export default Background4;
