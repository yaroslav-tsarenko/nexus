import { Button } from "@mui/material";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <div className={`header1 ${className}`}>
      <div className="background9">
        <div className="container33">
          <div className="frame-parent33">
            <div className="frame-wrapper6">
              <div className="group-div">
                <a className="nexus3">Nexus</a>
                <div className="connectnet3">ConnectNet</div>
              </div>
            </div>
            <div className="nav-list1">
              <div className="item-link18">
                <div className="buy-an-esim-data-plan-container">
                  <a className="buy-an-esim1">BUY AN eSIM DATA PLAN</a>
                </div>
                <div className="vertical-divider4" />
              </div>
              <div className="item-link-menu2">
                <div className="get-started-container">
                  <a className="get-started1">GET STARTED</a>
                </div>
                <div className="vertical-divider5" />
              </div>
              <div className="item-link19">
                <div className="top-up-container">
                  <a className="top-up1">TOP UP</a>
                </div>
                <div className="vertical-divider6" />
              </div>
              <div className="item-link-menu3">
                <div className="help-center-container">
                  <a className="help-center1">HELP CENTER</a>
                </div>
                <div className="vertical-divider7" />
              </div>
            </div>
            <div className="ubigi-cartsvg-container">
              <img
                className="ubigi-cartsvg-icon1"
                loading="lazy"
                alt=""
                src="/ubigicartsvg@2x.png"
              />
            </div>
          </div>
          <div className="container-inner4">
            <div className="link-group">
              <Button
                className="link5"
                disableElevation={true}
                variant="outlined"
                sx={{
                  color: "#fff",
                  fontSize: "16",
                  borderColor: "#fff",
                  borderRadius: "30px",
                  "&:hover": { borderColor: "#fff" },
                  width: 124.9,
                  height: 44,
                }}
              >
                Business
              </Button>
              <div className="button2">
                <a className="partners">Partners   </a>
                <div className="svg-wrapper5">
                  <img className="svg-icon9" alt="" src="/svg.svg" />
                </div>
              </div>
              <div className="link-my-account-container">
                <img
                  className="link-my-account1"
                  loading="lazy"
                  alt=""
                  src="/link--my-account.svg"
                />
              </div>
              <div className="link-svg-container">
                <img
                  className="link-svg1"
                  loading="lazy"
                  alt=""
                  src="/link--svg.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header1;
