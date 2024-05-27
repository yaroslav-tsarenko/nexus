import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Section9.css";

const Section9 = ({ className = "" }) => {
  return (
    <section className={`section9 ${className}`}>
      <img className="image-icon18" alt="" src="/image@2x.png" />
      <div className="section-child">
        <div className="frame-parent47">
          <div className="frame-parent48">
            <div className="about-nexusconnectnet-wrapper">
              <h2 className="about-nexusconnectnet">About NexusConnectNet</h2>
            </div>
            <div className="frame-parent49">
              <div className="since-2017-nexusconnectnet-ha-wrapper">
                <p className="since-2017-nexusconnectnet-container">
                  <span className="since-2017-nexusconnectnet">
                    Since 2017, NexusConnectNet has been at the forefront of
                    Travel Tech, offering global cellular eSIM
                  </span>
                  <span className="connectivity-in-over">
                    connectivity in over 200 destinations, for smartphones,
                    tablets and laptops, as well as
                  </span>
                  <span className="connected-cars">connected cars.</span>
                </p>
              </div>
              <p className="as-a-brand-container">
                <span className="as-a-brand">
                  As a brand of Transatel, a company that has been around for 20
                  years and a member of the
                </span>
                <span className="ntt-group-we">
                  NTT group, we are leaders in MVNOs and IoT in Europe.
                </span>
              </p>
            </div>
          </div>
          <div className="mvno-of-the-year-2023png-wrapper">
            <img
              className="mvno-of-the-year-2023png-icon"
              loading="lazy"
              alt=""
              src="/mvnooftheyear2023png@2x.png"
            />
          </div>
          <div className="button-wrapper1">
            <FormControl
              className="button16"
              variant="standard"
              sx={{
                borderColor: "#6546bd",
                borderStyle: "SOLID",
                borderTopWidth: "2px",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderLeftWidth: "2px",
                backgroundColor: "#6546bd",
                borderRadius: "100px",
                width: "65.8660844250368%",
                height: "47px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "47px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "47px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "47px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "47px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Regular",
                  fontFamily: "Open Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "22px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="22px"
                    height="22px"
                    src="/svg-7.png"
                    style={{ marginRight: "22.10000000000582px" }}
                  />
                )}
              >
                <MenuItem>{`WATCH THE PRESENTATION VIDEO `}</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Section9;
