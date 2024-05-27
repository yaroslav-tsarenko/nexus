import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./FrameComponent12.css";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <section className={`header-wrapper ${className}`}>
      <div className="header3">
        <div className="background23">
          <header className="container39">
            <div className="frame-parent107">
              <div className="frame-wrapper20">
                <div className="nexus-parent2">
                  <a className="nexus5">Nexus</a>
                  <a className="connectnet5">ConnectNet</a>
                </div>
              </div>
              <div className="nav-list3">
                <div className="item-link22">
                  <div className="buy-an-esim-data-plan-wrapper1">
                    <div className="buy-an-esim3">BUY AN eSIM DATA PLAN</div>
                  </div>
                  <div className="vertical-divider12" />
                </div>
                <div className="item-link-menu6">
                  <div className="get-started-wrapper1">
                    <a className="get-started3">GET STARTED</a>
                  </div>
                  <div className="vertical-divider13" />
                </div>
                <div className="item-link23">
                  <div className="top-up-wrapper1">
                    <a className="top-up3">TOP UP</a>
                  </div>
                  <div className="vertical-divider14" />
                </div>
                <div className="item-link-menu7">
                  <div className="help-center-wrapper1">
                    <a className="help-center3">HELP CENTER</a>
                  </div>
                  <div className="vertical-divider15" />
                </div>
              </div>
              <div className="ubigi-cartsvg-wrapper1">
                <img
                  className="ubigi-cartsvg-icon3"
                  loading="lazy"
                  alt=""
                  src="/ubigicartsvg1@2x.png"
                />
              </div>
            </div>
            <div className="container-inner9">
              <div className="link-parent1">
                <Button
                  className="link7"
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
                  className="button18"
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
                    width: "35.079726651480634%",
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
                <div className="link-my-account-wrapper1">
                  <img
                    className="link-my-account3"
                    loading="lazy"
                    alt=""
                    src="/link--my-account.svg"
                  />
                </div>
                <div className="link-svg-wrapper3">
                  <img
                    className="link-svg15"
                    loading="lazy"
                    alt=""
                    src="/link--svg.svg"
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
