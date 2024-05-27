import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`section-inner6 ${className}`}>
      <div className="frame-parent90">
        <div className="form-vertical-sepsvg-parent">
          <img
            className="form-vertical-sepsvg-icon"
            alt=""
            src="/formverticalsepsvg.svg"
          />
          <div className="frame-parent91">
            <div className="frame-parent92">
              <div className="frame-parent93">
                <div className="frame-parent94">
                  <div className="in-what-distribution-channels-wrapper">
                    <div className="in-what-distribution">
                      In what distribution channels do you have a presence or
                      actively participate?
                    </div>
                  </div>
                  <div className="div5">*</div>
                </div>
                <div className="backgroundborder4">
                  <img
                    className="form-select-drop-arrowsvg-icon2"
                    alt=""
                    src="/formselectdroparrowsvg.svg"
                  />
                </div>
              </div>
              <div className="frame-parent95">
                <div className="what-is-the-projected-annual-v-parent">
                  <p className="what-is-the-container">
                    <span className="what-is-the">
                      What is the projected annual volume of eSIM profiles you
                      anticipate generating by
                    </span>
                    <span className="providing-nexusconnectnet-serv">
                      providing NexusConnectNet services?
                    </span>
                  </p>
                  <div className="wrapper">
                    <div className="div6">*</div>
                  </div>
                </div>
                <TextField
                  className="input5"
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
            </div>
            <div className="frame-parent96">
              <div className="please-provide-anything-else-y-wrapper">
                <p className="please-provide-anything">
                  Please provide anything else you think might be useful to
                  better understand your project.
                </p>
              </div>
              <div className="div7">*</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper17">
          <div className="input-parent">
            <TextField
              className="input6"
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
            <div className="frame-parent97">
              <div className="frame-parent98">
                <div className="your-company-e-mail-address-wrapper">
                  <div className="your-company-e-mail">
                    Your company e-mail address
                  </div>
                </div>
                <div className="div8">*</div>
              </div>
              <TextField
                className="input7"
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
            <div className="frame-parent99">
              <div className="frame-parent100">
                <div className="company-website-wrapper">
                  <div className="company-website">Company Website</div>
                </div>
                <div className="div9">*</div>
              </div>
              <div className="input8" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper18">
          <div className="input-group">
            <TextField
              className="input9"
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
            <div className="frame-parent101">
              <div className="frame-parent102">
                <div className="your-phone-number-wrapper">
                  <div className="your-phone-number">Your phone number</div>
                </div>
                <div className="div10">*</div>
              </div>
              <div className="imagebackgroundshadow-parent">
                <img
                  className="imagebackgroundshadow-icon"
                  alt=""
                  src="/imagebackgroundshadow@2x.png"
                />
                <div className="border2" />
                <TextField
                  className="input10"
                  placeholder="201-555-0123"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d3d3d3" },
                    "& .MuiInputBase-root": {
                      height: "47px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": { color: "#757575" },
                  }}
                />
              </div>
            </div>
            <div className="frame-parent103">
              <div className="frame-parent104">
                <div className="where-is-your-company-located-wrapper">
                  <div className="where-is-your">
                    Where is your company located?
                  </div>
                </div>
                <div className="div11">*</div>
              </div>
              <select className="backgroundborder5">
                <option value="option_1">Option 1</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
