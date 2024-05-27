import { Button } from "@mui/material";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <div className={`header4 ${className}`}>
      <div className="background26">
        <header className="container42">
          <div className="frame-parent110">
            <div className="frame-wrapper22">
              <div className="nexus-parent4">
                <a className="nexus7">Nexus</a>
                <a className="connectnet7">ConnectNet</a>
              </div>
            </div>
            <div className="nav-list4">
              <div className="item-link32">
                <div className="buy-an-esim-data-plan-wrapper2">
                  <div className="buy-an-esim4">BUY AN eSIM DATA PLAN</div>
                </div>
                <div className="vertical-divider16" />
              </div>
              <div className="item-link-menu8">
                <div className="get-started-wrapper2">
                  <a className="get-started4">GET STARTED</a>
                </div>
                <div className="vertical-divider17" />
              </div>
              <div className="item-link33">
                <div className="top-up-wrapper2">
                  <a className="top-up4">TOP UP</a>
                </div>
                <div className="vertical-divider18" />
              </div>
              <div className="item-link-menu9">
                <div className="help-center-wrapper2">
                  <a className="help-center4">HELP CENTER</a>
                </div>
                <div className="vertical-divider19" />
              </div>
            </div>
            <div className="ubigi-cartsvg-wrapper2">
              <img
                className="ubigi-cartsvg-icon4"
                loading="lazy"
                alt=""
                src="/ubigicartsvg1@2x.png"
              />
            </div>
          </div>
          <div className="container-inner10">
            <div className="link-parent2">
              <Button
                className="link8"
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
              <div className="button19">
                <a className="partners1">Partners   </a>
                <div className="svg-wrapper22">
                  <img className="svg-icon28" alt="" src="/svg.svg" />
                </div>
              </div>
              <div className="link-my-account-wrapper2">
                <img
                  className="link-my-account4"
                  loading="lazy"
                  alt=""
                  src="/link--my-account.svg"
                />
              </div>
              <div className="link-svg-wrapper4">
                <img
                  className="link-svg16"
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
  );
};


export default Header2;
