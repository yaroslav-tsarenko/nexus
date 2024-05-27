import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./BackgroundShadow.css";

const BackgroundShadow = ({ className = "" }) => {
  return (
    <section className={`backgroundshadow6 ${className}`}>
      <div className="overlayshadow">
        <div className="background-wrapper">
          <div className="background12">
            <img
              className="background-icon"
              loading="lazy"
              alt=""
              src="/background1@2x.png"
            />
            <div className="background-container">
              <div className="background13">
                <div className="activate-your-esim">Activate your eSIM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-frame">
          <TextField
            className="background14"
            placeholder="Create your account"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="40px" height="40px" src="/background-1.png" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "40px",
                paddingLeft: "0px",
                borderRadius: "0px 0px 0px 0px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "20px",
                color: "#bebebe",
              },
            }}
          />
        </div>
        <img
          className="background-icon1"
          loading="lazy"
          alt=""
          src="/background-2@2x.png"
        />
        <div className="background-wrapper1">
          <div className="background15">
            <div className="link-your-esim">Link your eSIM</div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BackgroundShadow;
