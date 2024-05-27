import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background8 ${className}`}>
      <div className="container15">
        <div className="form-form">
          <div className="container16">
            <div className="newsletter-element-leftsvg">
              <div className="newsletter-element-leftsvg-fi">
                <div className="newsletter-element-leftsvg1">
                  <div className="group">
                    <img
                      className="group-icon"
                      loading="lazy"
                      alt=""
                      src="/group@2x.png"
                    />
                    <img
                      className="groupe-5170-icon"
                      alt=""
                      src="/groupe-5170.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="nexusconnectnets-newsletter">
              NexusConnectNet's newsletter
            </h3>
            <p className="get-fresh-news">
              Dreaming of worry-free Wi-Fi on your next adventure? Ditch the
              lost SIM card woes! Check if your device is eSIM ready and unlock
              a world of seamless connectivity.
            </p>
          </div>
          <div className="container-frame">
            <div className="container17">
              <TextField
                className="input2"
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "44px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#868e96" },
                }}
              />
              <div className="label">
                <input className="image1" type="checkbox" />
                <div className="yes-send-me">{`Yes, send me only good news! `}</div>
              </div>
            </div>
          </div>
          <div className="container18">
            <img
              className="newsletter-element-rightsvg-icon"
              loading="lazy"
              alt=""
              src="/newsletterelementrightsvg.svg"
            />
            <Button
              className="input3"
              disableElevation={true}
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "18",
                background: "#000",
                border: "#000 solid 2px",
                borderRadius: "30px",
                "&:hover": { background: "#000" },
                width: 145.7,
                height: 48,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="your-email-address-is-used-by-wrapper">
          <p className="your-email-address-container">
            <span className="your-email-address-container1">
              {`Your email address is used by Transatel for marketing and commercial purposes about the NexusConnectNet brand. To know our personal data and confidentiality policy, and to know more about your rights, `}
              <span className="click-here">click here</span>.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Background;
