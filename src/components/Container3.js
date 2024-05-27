import "./Container3.css";

const Container3 = ({ className = "" }) => {
  return (
    <div className={`container11 ${className}`}>
      <img className="image-icon10" alt="" src="/image@2x.png" />
      <div className="gradient1" />
      <div className="gradient-group">
        <div className="gradient2" />
        <div className="leisure">
          <span className="leisure-txt">
            <p className="p">#1</p>
            <p className="leisure1">Leisure</p>
          </span>
        </div>
      </div>
      <div className="container-child">
        <div className="link-learn-more-parent">
          <a className="link-learn">Learn more</a>
          <div className="svg-wrapper3">
            <img className="svg-icon6" alt="" src="/svg-11@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Container3;
