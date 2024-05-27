import "./Container2.css";

const Container2 = ({ className = "" }) => {
  return (
    <div className={`container12 ${className}`}>
      <img className="image-icon11" alt="" src="/image@2x.png" />
      <div className="gradient3" />
      <div className="gradient-container">
        <div className="gradient4" />
        <div className="professional">
          <span className="professional-txt">
            <p className="p1">#2</p>
            <p className="professional1">Professional</p>
          </span>
        </div>
      </div>
      <div className="container-inner1">
        <div className="link-learn-more-group">
          <a className="link-learn1">Learn more</a>
          <img className="frame-item" />
        </div>
      </div>
      <h1 className="when-choose-nexusconnectnet">
        When choose NexusConnectNet?
      </h1>
    </div>
  );
};



export default Container2;
