import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  iconUbigiSetupBluesvg,
  instant,
  setup,
  propWidth,
}) => {
  const iconUbigiSetupBluesvgStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`frame-parent10 ${className}`}>
      <div className="icon-ubigi-setup-bluesvg-wrapper">
        <img
          className="icon-ubigi-setup-bluesvg"
          alt=""
          src={iconUbigiSetupBluesvg}
          style={iconUbigiSetupBluesvgStyle}
        />
      </div>
      <div className="instant-setup">
        <p className="instant">{instant}</p>
        <p className="setup">{setup}</p>
      </div>
    </div>
  );
};


export default FrameComponent2;
