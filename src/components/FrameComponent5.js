import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`frame-parent82 ${className}`}>
      <div className="frame-wrapper12">
        <div className="frame-parent83">
          <div className="frame-wrapper13">
            <div className="frame-parent84">
              <div className="which-program-interests-you-wrapper">
                <div className="which-program-interests">
                  Which program interests you?
                </div>
              </div>
              <div className="div4">*</div>
            </div>
          </div>
          <div className="frame-parent85">
            <div className="image-parent1">
              <img className="image-icon24" alt="" src="/image-71.svg" />
              <div className="wholesaler-marketplace-wrapper">
                <div className="wholesaler-marketplace">
                  Wholesaler marketplace
                </div>
              </div>
              <img className="image-icon25" alt="" src="/image-71.svg" />
            </div>
            <div className="image-parent2">
              <img className="image-icon26" alt="" src="/image-71.svg" />
              <div className="i-dont-know-wrapper">
                <a className="i-dont-know">I don’t know</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent86">
        <div className="heading-2-are-you-an-esim-co-parent">
          <div className="heading-211">
            Are you an eSIM connectivity provider or a player in the travel
            industry?
          </div>
          <div className="frame-wrapper14">
            <div className="superscript-parent">
              <div className="superscript">*</div>
              <div className="mandatory-fields-wrapper">
                <div className="mandatory-fields">Mandatory fields</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper15">
          <div className="frame-parent87">
            <div className="frame-wrapper16">
              <div className="frame-parent88">
                <div className="white-label-wrapper">
                  <div className="white-label">White label</div>
                </div>
                <img className="image-icon27" alt="" src="/image-71.svg" />
                <div className="oem-mobile-device-manufacture-wrapper">
                  <div className="oem-mobile-device">
                    OEM (mobile device manufacturer)
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent89">
              <FrameComponent6
                firstName="First Name"
                yourJobTitle="Your job title"
              />
              <FrameComponent6
                firstName="Last Name"
                yourJobTitle="Company"
                propMinWidth="89.4px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
