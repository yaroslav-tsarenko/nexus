import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`section-inner7 ${className}`}>
      <div className="frame-parent105">
        <div className="frame-wrapper19">
          <div className="frame-parent106">
            <div className="image-parent3">
              <img className="image-icon28" alt="" src="/image-11.svg" />
              <div className="i-am-not">I am not a robot</div>
            </div>
            <div className="input-wrapper">
              <Button
                className="input11"
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "18",
                  background: "#6546bd",
                  border: "#6546bd solid 2px",
                  borderRadius: "30px",
                  "&:hover": { background: "#6546bd" },
                  height: 44,
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <p className="by-submitting-this-container">
          <span className="by-submitting-this">
            By submitting this form, I consent to the processing of my personal
            data through Transatel in accordance with its data privacy. I may at
            any time revoke my consent through
          </span>
          <span className="sending-an-email">
            sending an email to dpo@transatel.com
          </span>
        </p>
      </div>
    </div>
  );
};


export default FrameComponent3;
