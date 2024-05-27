import { useMemo } from "react";
import "./Container4.css";

const Container4 = ({
  className = "",
  sVG,
  selectAAPPLE,
  selectAAPPLE1,
  propMarginLeft,
  propWidth,
  propWidth1,
  propHeight,
  propWidth2,
  propDisplay,
  propMinWidth,
}) => {
  const containerStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const sVGIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const selectAAPPLEStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  const container1Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const selectAAPPLE1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`container6 ${className}`} style={containerStyle}>
      <div className="svg-container">
        <img className="svg-icon2" alt="" src={sVG} style={sVGIconStyle} />
      </div>
      <div className="background5">
        <div className="options-container">
          <div className="options1">
            <div className="container7">
              <div className="select-a-apple" style={selectAAPPLEStyle}>
                {selectAAPPLE}
              </div>
              <div className="image-container">
                <img className="image-icon6" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img className="form-select-drop-arrowsvg-icon1" alt="" />
        <div className="container8" style={container1Style}>
          <div className="select-a-apple1" style={selectAAPPLE1Style}>
            {selectAAPPLE1}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Container4;
