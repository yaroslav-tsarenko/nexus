import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  className = "",
  sVG,
  activate,
  yourESIMs,
  propWidth,
  propColor,
}) => {
  const sVGIcon1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const activateYourESIMsContainerStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`frame-parent61 ${className}`}>
      <div className="svg-wrapper15">
        <img className="svg-icon21" alt="" src={sVG} style={sVGIcon1Style} />
      </div>
      <div
        className="activate-your-esims-container"
        style={activateYourESIMsContainerStyle}
      >
        <p className="activate">{activate}</p>
        <p className="your-esims">{yourESIMs}</p>
      </div>
    </div>
  );
};


export default FrameComponent8;
