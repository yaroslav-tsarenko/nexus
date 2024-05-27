import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <div className={`background6 ${className}`}>
      <div className="heading-2-where-do-you-need-wrapper">
        <h2 className="heading-27">Where do you need connectivity?</h2>
      </div>
      <div className="backgroundborder-parent">
        <TextField
          className="backgroundborder2"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "21.5px", marginRight: "16.5px" }}
              >
                <img width="22px" height="28px" src="/svg-4.svg" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ marginRight: "21px" }}>
                <img width="13px" height="22px" src="/svg-5.svg" />
              </InputAdornment>
            ),
          }}
          SelectProps={{ IconComponent: () => null }}
          sx={{
            borderColor: "#fff",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "55.775629852638374%",
            height: "44px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              color: "#373737",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Open Sans",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <MenuItem value={1}>Select a destination</MenuItem>
        </TextField>
        <FormControl
          className="backgroundborder3"
          variant="standard"
          sx={{
            borderColor: "#fff",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "19.648233243543064%",
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
              color: "#373737",
              fontSize: 18,
              fontWeight: "Regular",
              fontFamily: "Open Sans",
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
                width="13px"
                height="22px"
                src="/svg-6.svg"
                style={{ marginRight: "21px" }}
              />
            )}
          >
            <MenuItem>$ USD</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className="input1">
          <div className="go">GO!</div>
        </div>
      </div>
      <div className="background-inner">
        <div className="frame-parent17">
          <div className="frame-parent18">
            <div className="image-frame">
              <img className="image-icon7" alt="" src="/image-4@2x.png" />
            </div>
            <div className="one-off-parent">
              <div className="one-off">{`One-Off `}</div>
              <div className="svg-frame">
                <img className="svg-icon3" alt="" src="/svg-7@2x.png" />
              </div>
            </div>
          </div>
          <div className="frame-parent19">
            <div className="image-wrapper1">
              <img className="image-icon8" alt="" src="/image-5.svg" />
            </div>
            <div className="monthly">{`Monthly `}</div>
            <div className="svg-wrapper1">
              <img className="svg-icon4" alt="" src="/svg-8@2x.png" />
            </div>
          </div>
          <div className="frame-parent20">
            <div className="image-wrapper2">
              <img className="image-icon9" alt="" src="/image-6@2x.png" />
            </div>
            <div className="annual">{`Annual `}</div>
            <div className="svg-wrapper2">
              <img className="svg-icon5" alt="" src="/svg-9@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background1;
