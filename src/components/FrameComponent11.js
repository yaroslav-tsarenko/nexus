import { useMemo } from "react";
import "./FrameComponent11.css";

const FrameComponent11 = ({
  className = "",
  howDoIKnowIfMyNexusConnec,
  onMyAndroidDevice,
  myESIMNexusConnectNetProf,
  networkIsDisplayedButIDon,
  propBackgroundImage,
  propFlex,
  propWidth,
  propBackgroundImage1,
  propFlex1,
  propWidth1,
  propDebugCommit,
}) => {
  const linkHeading3Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const howDoIContainerStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const linkHeading31Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const myESIMNexusConnectNetContainerStyle = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth1,
      debugCommit: propDebugCommit,
    };
  }, [propFlex1, propWidth1, propDebugCommit]);

  return (
    <div className={`link-heading-3-parent33 ${className}`}>
      <div className="link-heading-3137" style={linkHeading3Style}>
        <p className="how-do-i-container15" style={howDoIContainerStyle}>
          <span>
            <span className="how-do-i12">{howDoIKnowIfMyNexusConnec}</span>
            <span className="on-my-android1">{onMyAndroidDevice}</span>
          </span>
        </p>
      </div>
      <div className="link-heading-3138" style={linkHeading31Style}>
        <p
          className="my-esim-nexusconnectnet-container1"
          style={myESIMNexusConnectNetContainerStyle}
        >
          <span>
            <span className="my-esim-nexusconnectnet1">
              {myESIMNexusConnectNetProf}
            </span>
            <span className="network-is-displayed1">
              {networkIsDisplayedButIDon}
            </span>
            <span className="should-i-do2">should I do?</span>
          </span>
        </p>
      </div>
    </div>
  );
};


export default FrameComponent11;
