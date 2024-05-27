import { useMemo } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "", sVG, propColor }) => {
  const accessToYourContainerStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`frame-parent62 ${className}`}>
      <div className="svg-wrapper16">
        <img className="svg-icon22" alt="" src={sVG} />
      </div>
      <p
        className="access-to-your-container"
        style={accessToYourContainerStyle}
      >
        <span className="access">Access</span>
        <span className="to-your-dashboard">to your dashboard</span>
      </p>
    </div>
  );
};


export default FrameComponent7;
