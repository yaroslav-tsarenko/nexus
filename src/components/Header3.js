import "./Header3.css";

const Header3 = ({ className = "" }) => {
  return (
    <div className={`header9 ${className}`}>
      <div className="background5">
        <div className="container7">
          <div className="frame-parent20">
            <div className="frame-wrapper11">
              <div className="nexus-parent2">
                <a className="nexus5">Nexus</a>
                <div className="connectnet5">ConnectNet</div>
              </div>
            </div>
            <div className="nav-list3">
              <div className="item-link22">
                <div className="buy-an-esim-data-plan-wrapper1">
                  <a className="buy-an-esim3">BUY AN eSIM DATA PLAN</a>
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
                src="/ubigicartsvg2@2x.png"
              />
            </div>
          </div>
          <div className="container-inner1">
            <div className="link-parent2">
              <button className="link6">
                <a className="business3">Business</a>
              </button>
              <div className="button13">
                <a className="partners3">Partners   </a>
                <div className="svg-wrapper1">
                  <img className="svg-icon3" alt="" src="/svg.svg" />
                </div>
              </div>
              <div className="link-my-account-wrapper1">
                <img
                  className="link-my-account3"
                  loading="lazy"
                  alt=""
                  src="/link--my-account.svg"
                />
              </div>
              <div className="link-svg-wrapper1">
                <img
                  className="link-svg3"
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

export default Header3;
