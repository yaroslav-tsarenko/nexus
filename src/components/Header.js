import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="background7">
        <div className="container10">
          <div className="frame-parent21">
            <div className="frame-wrapper4">
              <div className="nexus-group">
                <a className="nexus1">Nexus</a>
                <a className="connectnet1">ConnectNet</a>
              </div>
            </div>
            <nav className="nav-list">
              <div className="item-link8">
                <div className="buy-an-esim-data-plan-wrapper">
                  <div className="buy-an-esim">BUY AN eSIM DATA PLAN</div>
                </div>
                <div className="vertical-divider" />
              </div>
              <div className="item-link-menu">
                <div className="get-started-wrapper">
                  <a className="get-started">GET STARTED</a>
                </div>
                <div className="vertical-divider1" />
              </div>
              <div className="item-link9">
                <div className="top-up-wrapper">
                  <a className="top-up">TOP UP</a>
                </div>
                <div className="vertical-divider2" />
              </div>
              <div className="item-link-menu1">
                <div className="help-center-wrapper">
                  <a className="help-center">HELP CENTER</a>
                </div>
                <div className="vertical-divider3" />
              </div>
            </nav>
            <div className="ubigi-cartsvg-wrapper">
              <img
                className="ubigi-cartsvg-icon"
                alt=""
                src="/ubigicartsvg@2x.png"
              />
            </div>
          </div>
          <div className="container-inner">
            <div className="link-parent">
              <Button
                className="link1"
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
                className="button1"
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
                      src="/svg-10.svg"
                      style={{ marginRight: "21px" }}
                    />
                  )}
                >
                  <MenuItem>Partners   </MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="link-my-account-wrapper">
                <img
                  className="link-my-account"
                  loading="lazy"
                  alt=""
                  src="/link--my-account.svg"
                />
              </div>
              <div className="link-svg-wrapper">
                <img className="link-svg" alt="" src="/link--svg.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
