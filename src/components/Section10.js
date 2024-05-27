import { Button } from "@mui/material";
import "./Section10.css";

const Section10 = ({ className = "" }) => {
  return (
    <section className={`section8 ${className}`}>
      <div className="heading-3-our-commitments-to-wrapper">
        <h2 className="heading-33">Our commitments to our partners</h2>
      </div>
      <div className="frame-parent41">
        <div className="frame-parent42">
          <div className="svg-wrapper9">
            <img className="svg-icon13" alt="" src="/svg-4.svg" />
          </div>
          <div className="frame-parent43">
            <div className="competitive-advantages-wrapper">
              <div className="competitive-advantages">
                <p className="competitive">Competitive</p>
                <p className="advantages">advantages</p>
              </div>
            </div>
            <div className="increasing-customer-satisfacti-parent">
              <div className="increasing-customer-satisfacti-container">
                <p className="increasing-customer-satisfacti">
                  Increasing customer satisfaction
                </p>
                <p className="and-loyalty">and loyalty</p>
              </div>
              <div className="item-improving">
                Improving customer experience
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent44">
          <div className="svg-wrapper10">
            <img className="svg-icon14" alt="" src="/svg-5.svg" />
          </div>
          <div className="frame-parent45">
            <div className="new-source-of-income-wrapper">
              <div className="new-source-of-container">
                <p className="new-source">New source</p>
                <p className="of-income">of income</p>
              </div>
            </div>
            <div className="frame-parent46">
              <div className="additional-revenue-from-the-parent">
                <div className="additional-revenue-from">
                  Additional revenue from the
                </div>
                <div className="sale-of-data">sale of data plans</div>
              </div>
              <div className="item-recurring">
                Recurring revenues from top-ups
              </div>
            </div>
          </div>
        </div>
        <div className="svg-parent">
          <img className="svg-icon15" alt="" src="/svg-6.svg" />
          <div className="excellency-of-service-wrapper">
            <div className="excellency-of-service-container">
              <p className="excellency">Excellency</p>
              <p className="of-service">of service</p>
            </div>
          </div>
          <div className="partnership-with-the-best-oper-parent">
            <p className="partnership-with-the-container">
              <span className="partnership-with-the">
                Partnership with the best operator
              </span>
              <span className="networks-in-the">networks in the world</span>
            </p>
            <div className="st-consumer-champion-container">
              <p className="st-consumer-champion">
                1st “Consumer Champion” MVNO
              </p>
              <p className="award-2023">Award 2023</p>
            </div>
          </div>
        </div>
      </div>
      <img className="link-svg5" alt="" src="/link--svg.svg" />
      <div className="button-frame">
        <Button
          className="button15"
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
    </section>
  );
};


export default Section10;
