import { Button } from "@mui/material";
import "./Background2.css";

const Background2 = ({ className = "" }) => {
  return (
    <section className={`background16 ${className}`}>
      <div className="container34">
        <div className="background17">
          <div className="frame-parent34">
            <div className="frame-wrapper7">
              <div className="steps-11svg-parent">
                <img
                  className="steps-11svg-icon"
                  loading="lazy"
                  alt=""
                  src="/steps-11svg.svg"
                />
                <div className="heading-3-get-your-qr-code-f-parent">
                  <h3 className="heading-32">
                    Get your QR code for iPhone via email
                  </h3>
                  <div className="link-browse-container">
                    <span className="browse-our-catalog">
                      Browse our catalog
                    </span>
                    <span className="to-buy-a"> to buy a data plan.</span>
                  </div>
                </div>
                <div className="frame-parent35">
                  <div className="frame-parent36">
                    <div className="you-will-receive-your-esim-dat-wrapper">
                      <p className="you-will-receive">{`You will receive your eSIM data plan in the form of a QR code `}</p>
                    </div>
                    <i className="please-allow-15">(please allow 15 minutes</i>
                  </div>
                  <div className="for-receipt-of-the-email-and-c-parent">
                    <i className="for-receipt-of">{`for receipt of the email and check your SPAM folder before contacting `}</i>
                    <i className="customer">customer</i>
                  </div>
                  <div className="service-parent">
                    <i className="service1">service</i>
                    <i className="i">)</i>
                    <div className="div1">.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-parent">
              <div className="button3" />
              <div className="button4" />
              <div className="button5" />
              <div className="frame-parent37">
                <div className="button-group">
                  <div className="button6" />
                  <div className="button7" />
                  <div className="button8" />
                </div>
                <div className="button-container">
                  <Button
                    className="button9"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      color: "#fff",
                      fontSize: "18",
                      background: "#6546bd",
                      border: "#6546bd solid 2px",
                      borderRadius: "100px",
                      "&:hover": { background: "#6546bd" },
                      height: 46,
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
              <div className="button10" />
              <div className="button11" />
              <div className="button12" />
            </div>
          </div>
          <div className="image-wrapper3">
            <img
              className="image-icon14"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Background2;
