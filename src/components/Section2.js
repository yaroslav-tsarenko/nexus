import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <section className={`section16 ${className}`}>
      <div className="image-group">
        <img className="image-icon23" alt="" src="/image-61@2x.png" />
        <img className="link-svg13" alt="" src="/link--svg.svg" />
      </div>
      <div className="section-inner4">
        <div className="integration-into-a-car-sharing-parent">
          <h2 className="integration-into-a-container">
            <p className="integration-into-a">
              Integration into a car-sharing company's mobile
            </p>
            <p className="app">app</p>
          </h2>
          <p className="lets-imagine-that-container">
            <span className="lets-imagine-that">
              Let’s imagine that travelers arrive at New York airport and plan
              to use an app from a ride-
            </span>
            <span className="sharing-company-like">
              sharing company like Uber for the duration of their stay. This
              transportation application could
            </span>
            <span className="seamlessly-integrate-nexusconn">
              seamlessly integrate NexusConnectNet’s eSIM services into its
              application.
            </span>
          </p>
          <p className="upon-arrival-at-container">
            <span>
              <span className="upon-arrival-at">
                Upon arrival at the airport, travelers would be invited to
                download an eSIM with a NexusConnectNet USA
              </span>
              <span className="gb-data-plan">
                3GB data plan for just €8. This convenient option guarantees
                travelers instant, cost-effective
              </span>
              <span className="connectivity-for-their">
                connectivity for their journeys with the transport app and for
                their entire stay in New York.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
