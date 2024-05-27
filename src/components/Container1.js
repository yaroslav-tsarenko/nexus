import "./Container1.css";

const Container1 = ({ className = "" }) => {
  return (
    <div className={`container13 ${className}`}>
      <img className="image-icon12" alt="" src="/image@2x.png" />
      <img className="gradient-icon1" alt="" src="/gradient-1@2x.png" />
      <div className="gradient-parent1">
        <div className="gradient5" />
        <div className="local">
          <span className="local-txt">
            <p className="p2">#3</p>
            <p className="local1">Local</p>
          </span>
        </div>
      </div>
      <div className="container-inner2">
        <div className="link-learn-more-container">
          <a className="link-learn2">Learn more</a>
          <img className="frame-inner" />
        </div>
      </div>
    </div>
  );
};


export default Container1;
