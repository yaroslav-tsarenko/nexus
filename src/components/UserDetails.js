import "./UserDetails.css";

const UserDetails = ({ className = "" }) => {
  return (
    <section className={`user-details ${className}`}>
      <div className="user-account-parent">
        <h3 className="user-account">User Account</h3>
        <input
          className="header10"
          placeholder="Your Active Downloads"
          type="text"
        />
        <div className="backgroundborder-parent">
          <div className="backgroundborder1">
            <div className="backgroundborder-child">
              <div className="image-group">
                <img
                  className="image-icon1"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="background6">
                  <div className="icon-ubigi-bundle-one-offsvg-group">
                    <img
                      className="icon-ubigi-bundle-one-offsvg1"
                      loading="lazy"
                      alt=""
                      src="/iconubigibundleoneoffsvg.svg"
                    />
                    <div className="frame-wrapper12">
                      <div className="japansvg-group">
                        <img
                          className="japansvg-icon1"
                          loading="lazy"
                          alt=""
                          src="/japansvg.svg"
                        />
                        <img
                          className="gsvg-icon1"
                          loading="lazy"
                          alt=""
                          src="/5gsvg@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="background-child">
                    <div className="frame-parent21">
                      <div className="frame-parent22">
                        <div className="frame-parent23">
                          <div className="japan-container">
                            <div className="japan1">japan</div>
                          </div>
                          <div className="mb1">500MB</div>
                        </div>
                        <div className="valid-1-day-container">
                          <div className="valid-1-day1">valid 1 day</div>
                        </div>
                      </div>
                      <div className="frame">
                        <div className="div9">$2.5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="background7">
              <div className="examples-of-use1">Examples of use</div>
              <img
                className="arrow-usage-infossvg-icon1"
                loading="lazy"
                alt=""
                src="/arrowusageinfossvg@2x.png"
              />
            </div>
          </div>
          <div className="frame-parent24">
            <div className="frame-parent25">
              <div className="esim-japan-500mb-1-day-group">
                <div className="esim-japan1">
                  eSIM • JAPAN • 500MB • 1 day • $2.5
                </div>
                <div className="discount-20-off1">Discount: 20% OFF</div>
              </div>
              <div className="parent1">
                <div className="div10">$120.00</div>
                <div className="credits1">12 Credits</div>
              </div>
            </div>
            <div className="up-time-parent">
              <div className="up-time">Up Time</div>
              <div className="hrs">120 Hrs</div>
            </div>
            <div className="icons-block-parent">
              <img
                className="icons-block"
                loading="lazy"
                alt=""
                src="/icons-block.svg"
              />
              <div className="frame-parent26">
                <div className="frame-wrapper13">
                  <div className="next-renewal-parent">
                    <div className="next-renewal">Next Renewal</div>
                    <div className="april-2024">24 April, 2024</div>
                  </div>
                </div>
                <div className="frame-parent27">
                  <div className="cancel-wrapper">
                    <div className="cancel">Cancel</div>
                  </div>
                  <div className="icons-block-group">
                    <img
                      className="icons-block1"
                      loading="lazy"
                      alt=""
                      src="/icons-block-1.svg"
                    />
                    <div className="renew-wrapper">
                      <div className="renew">Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-child2" />
      </div>
      <div className="checkout-details6">
        <div className="header11">
          <div className="user-details1">User Details</div>
        </div>
        <div className="checkout-details-child">
          <div className="frame-parent28">
            <div className="frame-wrapper14">
              <div className="name-parent">
                <div className="name">Name</div>
                <div className="darnell-roob">Darnell Roob</div>
              </div>
            </div>
            <div className="frame-wrapper15">
              <div className="email-address-parent">
                <div className="email-address1">Email Address</div>
                <div className="darnellroobhotmailcom">
                  Darnell.Roob@hotmail.com
                </div>
              </div>
            </div>
            <div className="frame-parent29">
              <div className="frame-parent30">
                <div className="plan-wrapper">
                  <div className="plan">Plan</div>
                </div>
                <div className="expiry-date">Expiry Date</div>
              </div>
              <div className="basic-parent">
                <div className="basic">Basic</div>
                <div className="april-2024-wrapper">
                  <div className="april-20241">24 April, 2024</div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper16">
              <div className="auto-renewal-parent">
                <div className="auto-renewal">Auto Renewal</div>
                <div className="on">On</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default UserDetails;
