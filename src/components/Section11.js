import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Section11.css";

const Section11 = ({ className = "" }) => {
  return (
    <section className={`section7 ${className}`}>
      <img className="container-icon4" alt="" src="/container@2x.png" />
      <div className="frame-parent38">
        <div className="gradient-parent3">
          <div className="gradient8" />
          <div className="overlayblur" />
          <div className="nexusconnectnet-for-travel">
            NexusConnectNet For Travel Industry
          </div>
          <div className="esim-4g5g-international-mobil-container">
            <span className="esim-4g5g-international-mobil-container1">
              <p className="esim-4g5g-international">
                eSIM 4G/5G international
              </p>
              <p className="mobile-connectivity-for-travel">
                mobile connectivity for travelers
              </p>
              <p className="and-tourism-stakeholders">
                and tourism stakeholders
              </p>
            </span>
          </div>
          <img
            className="ubigi-partner-solutions-device-icon"
            loading="lazy"
            alt=""
            src="/ubigipartnersolutionsdevicespng@2x.png"
          />
          <Button
            className="button13"
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "18",
              background: "#6546bd",
              border: "#6546bd solid 2px",
              borderRadius: "100px",
              "&:hover": { background: "#6546bd" },
              width: 151.3,
              height: 44,
            }}
          >
            CONTACT US
          </Button>
        </div>
        <img className="link-svg2" loading="lazy" alt="" src="/link--svg.svg" />
      </div>
      <div className="header2">
        <div className="background18">
          <header className="container35">
            <div className="frame-parent39">
              <div className="frame-wrapper8">
                <div className="nexus-parent1">
                  <a className="nexus4">Nexus</a>
                  <a className="connectnet4">ConnectNet</a>
                </div>
              </div>
              <div className="nav-list2">
                <div className="item-link20">
                  <div className="buy-an-esim-data-plan-frame">
                    <div className="buy-an-esim2">BUY AN eSIM DATA PLAN</div>
                  </div>
                  <div className="vertical-divider8" />
                </div>
                <div className="item-link-menu4">
                  <div className="get-started-frame">
                    <a className="get-started2">GET STARTED</a>
                  </div>
                  <div className="vertical-divider9" />
                </div>
                <div className="item-link21">
                  <div className="top-up-frame">
                    <a className="top-up2">TOP UP</a>
                  </div>
                  <div className="vertical-divider10" />
                </div>
                <div className="item-link-menu5">
                  <div className="help-center-frame">
                    <a className="help-center2">HELP CENTER</a>
                  </div>
                  <div className="vertical-divider11" />
                </div>
              </div>
              <div className="ubigi-cartsvg-frame">
                <img
                  className="ubigi-cartsvg-icon2"
                  loading="lazy"
                  alt=""
                  src="/ubigicartsvg@2x.png"
                />
              </div>
            </div>
            <div className="container-inner5">
              <div className="link-container">
                <Button
                  className="link6"
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    fontSize: "16",
                    borderColor: "#fff",
                    borderRadius: "30px",
                    "&:hover": { borderColor: "#fff" },
                    width: 124.9,
                  }}
                >
                  Business
                </Button>
                <FormControl
                  className="button14"
                  variant="standard"
                  sx={{
                    borderColor: "#fff",
                    borderStyle: "SOLID",
                    borderTopWidth: "2px",
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderLeftWidth: "2px",
                    backgroundColor: "#fff",
                    borderRadius: "24px",
                    width: "35.07972665148034%",
                    height: "44px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "Roboto",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "14px",
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
                        width="12px"
                        height="7px"
                        src="/svg.svg"
                        style={{ marginRight: "21px" }}
                      />
                    )}
                  >
                    <MenuItem>Partners   </MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="link-my-account-frame">
                  <img
                    className="link-my-account2"
                    loading="lazy"
                    alt=""
                    src="/link--my-account.svg"
                  />
                </div>
                <div className="link-svg-frame">
                  <img className="link-svg3" alt="" src="/link--svg.svg" />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Section11;
