import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propAlignSelf,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propHeight, propAlignSelf]);

  return (
    <div className={`footer1 ${className}`} style={footerStyle}>
      <div className="frame-parent31">
        <div className="nexus-container">
          <h1 className="nexus2">Nexus</h1>
          <div className="connectnet2">ConnectNet</div>
        </div>
        <div className="frame-parent32">
          <div className="best-mvno-2023svg-container">
            <div className="best-mvno-2023svg1">
              <div className="best-mvno-2023svg-fill1" />
            </div>
          </div>
          <div className="container-parent6">
            <div className="container31">
              <div className="about-us1">About us</div>
              <div className="list3">
                <div className="nexusconnectnet-story1">
                  NexusConnectNet story
                </div>
                <div className="nexusconnectnet-in-the1">
                  NexusConnectNet in the press
                </div>
                <div className="nexusconnectnet-network-partne1">
                  NexusConnectNet network partners
                </div>
                <div className="nexusconnectnet-app1">NexusConnectNet app</div>
                <div className="nexusconnectnetcom1">NexusConnectNet.com</div>
              </div>
            </div>
            <div className="container32">
              <div className="get-in-touch1">Get in touch</div>
              <div className="list4">
                <div className="item-link10">Connect your employees</div>
                <div className="item-link11">Affiliation program</div>
                <div className="item-link12">Distributor program</div>
                <div className="item-link13">Contact support</div>
                <div className="item-link14">Career Opportunities</div>
              </div>
            </div>
            <div className="paragraph1">
              <div className="assistance1">Assistance</div>
              <a
                className="list-item1"
                href="https://www.figma.com/design/ue5ipNBc6T9vITenuzqF5Y?node-id=1-62070"
                target="_blank"
              >
                Help Center
              </a>
            </div>
          </div>
          <div className="frame-wrapper5">
            <div className="link-ubigis-facebook-accoun-group">
              <img
                className="link-ubigis-facebook-accoun1"
                loading="lazy"
                alt=""
                src="/link--ubigis-facebook-account.svg"
              />
              <img
                className="link-ubigis-instagram-accou1"
                loading="lazy"
                alt=""
                src="/link--ubigis-instagram-account.svg"
              />
              <img
                className="link-ubigis-twitter-account1"
                loading="lazy"
                alt=""
                src="/link--ubigis-twitter-account.svg"
              />
              <img
                className="link-ubigis-youtube-account1"
                alt=""
                src="/link--ubigis-youtube-account.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-divider2" />
      <div className="list-group">
        <div className="list5">
          <div className="item-link15">{`Terms & Conditions`}</div>
          <div className="item-link16">Legal notice</div>
          <div className="item-link17">Cookie Declaration</div>
        </div>
        <div className="nexusconnectnet-2024-ltd-a-group">
          <p className="nexusconnectnet-20241">
            NexusConnectNet © 2024, Ltd. All rights reserved. NexusConnectNet is
            an NTT service.
          </p>
          <img className="logo-nttpng-icon1" alt="" src="/logonttpng@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
