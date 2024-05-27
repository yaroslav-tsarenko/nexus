import { Button } from "@mui/material";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`overlayoverlayblur-parent ${className}`}>
      <div className="overlayoverlayblur" />
      <div className="container9" />
      <div className="frame-wrapper2">
        <div className="frame-parent11">
          <div className="frame-wrapper3">
            <div className="frame-parent12">
              <div className="effortless-connectivity-globa-wrapper">
                <h1 className="effortless-connectivity-globa">
                  Effortless Connectivity: Global eSIMs for Travelers
                </h1>
              </div>
              <p className="with-nexusconnectnet-you">{`NexusConnectNet is your one-stop shop for exploring the world with seamless connectivity.  `}</p>
            </div>
          </div>
          <div className="frame-parent13">
            <div className="frame-parent14">
              <div className="icon-ubigi-esim-bluesvg-wrapper">
                <img
                  className="icon-ubigi-esim-bluesvg"
                  loading="lazy"
                  alt=""
                  src="/iconubigiesimbluesvg.svg"
                />
              </div>
              <div className="digital-sim-card-container">
                <p className="digital">Digital</p>
                <p className="sim-card">SIM card</p>
              </div>
            </div>
            <FrameComponent2
              iconUbigiSetupBluesvg="/iconubigisetupbluesvg.svg"
              instant="Instant"
              setup="setup"
            />
            <div className="frame-parent15">
              <div className="icon-ubigi-prepaid-bluesvg-wrapper">
                <img
                  className="icon-ubigi-prepaid-bluesvg"
                  loading="lazy"
                  alt=""
                  src="/iconubigiprepaidbluesvg.svg"
                />
              </div>
              <div className="heading-31">Prepaid</div>
            </div>
            <FrameComponent2
              iconUbigiSetupBluesvg="/iconubigiworldbluesvg.svg"
              instant="200+"
              setup="destinations"
              propWidth="44px"
            />
            <FrameComponent2
              iconUbigiSetupBluesvg="/iconeasytopupbluesvg@2x.png"
              instant="Easy"
              setup="top-up"
              propWidth="33.5px"
            />
          </div>
        </div>
      </div>
      <div className="frame-parent16">
        <div className="button-wrapper">
          <Button
            className="button"
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "18",
              background: "#6546bd",
              border: "#6546bd solid 2px",
              borderRadius: "24px",
              "&:hover": { background: "#6546bd" },
              height: 44,
            }}
          >
            Browse data plans
          </Button>
        </div>
        <img
          className="container-icon2"
          loading="lazy"
          alt=""
          src="/container@2x.png"
        />
      </div>
    </div>
  );
};



export default FrameComponent1;
