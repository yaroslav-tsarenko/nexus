import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent6.css";

const FrameComponent6 = ({
  className = "",
  firstName,
  yourJobTitle,
  propMinWidth,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const yourJobTitleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth, propDebugCommit]);

  const divStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`frame-parent78 ${className}`}>
      <div className="frame-parent79">
        <div className="frame-parent80">
          <div className="first-name-wrapper">
            <div className="first-name">{firstName}</div>
          </div>
          <div className="div2">*</div>
        </div>
        <TextField
          className="input4"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d3d3d3" },
            "& .MuiInputBase-root": {
              height: "47px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
          }}
        />
      </div>
      <div className="frame-parent81">
        <div className="your-job-title-wrapper">
          <div className="your-job-title" style={yourJobTitleStyle}>
            {yourJobTitle}
          </div>
        </div>
        <div className="div3" style={divStyle}>
          *
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
