import Container4 from "../components/Container4";
import FrameComponent1 from "../components/FrameComponent1";
import Background1 from "../components/Background1";
import Header from "../components/Header";
import Container3 from "../components/Container3";
import Container2 from "../components/Container2";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import Background from "../components/Background";
import Section from "../components/Section";
import FrameComponent from "../components/FrameComponent";
import "./Homepagedesktop.css";

const Homepagedesktop = () => {
  return (
    <div className="homepagedesktop">
      <section className="container">
        <div className="image">
          <img className="gradient-icon" alt="" src="/gradient@2x.png" />
        </div>
      </section>
      <section className="gradient-parent">
        <div className="gradient" />
        <div className="heading-2-get-started-wrapper">
          <div className="heading-2">Get started!</div>
        </div>
        <div className="heading-3">
          Check if your device is eSIM compatible:
        </div>
      </section>
      <img className="image-icon" alt="" src="/image@2x.png" />
      <div className="heading-21">Get started!</div>
      <div className="does-your-device">Does your device support eSIM?</div>
      <div className="container-parent">
        <div className="container1">
          <div className="svg-wrapper">
            <img className="svg-icon" loading="lazy" alt="" src="/svg@2x.png" />
          </div>
          <div className="background">
            <div className="options-wrapper">
              <div className="options">
                <div className="container2">
                  <div className="select-a-android">Select a ANDROID</div>
                  <div className="image-wrapper">
                    <img className="image-icon1" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <img className="form-select-drop-arrowsvg-icon" alt="" />
            <div className="container3">
              <div className="select-a-android1">Select a ANDROID</div>
            </div>
          </div>
        </div>
        <div className="container-group">
          <Container4
            sVG="/svg-1@2x.png"
            selectAAPPLE="Select a APPLE"
            selectAAPPLE1="Select a APPLE"
          />
          <Container4
            sVG="/svg-2.svg"
            selectAAPPLE="Select a WINDOWS"
            selectAAPPLE1="Select a WINDOWS"
            propMarginLeft="-0.1px"
            propWidth="51.8px"
            propWidth1="158px"
            propHeight="27px"
            propWidth2="unset"
            propDisplay="unset"
            propMinWidth="unset"
          />
        </div>
      </div>
      <div className="link-view">
        View our full list of eSIM compatible devices
      </div>
      <img className="svg-icon1" alt="" src="/svg-3@2x.png" />
      <section className="frame-parent">
        <FrameComponent1 />
        <Background1 />
        <h2 className="best">{`Best `}</h2>
        <img
          className="logo-esim-whitesvg-icon"
          loading="lazy"
          alt=""
          src="/logoesimwhitesvg@2x.png"
        />
        <h2 className="data-plans"> data plans</h2>
        <div className="to-stay-connected">to stay connected worldwide</div>
        <Header />
      </section>
      <section className="section-parent">
        <div className="section">
          <img className="image-icon2" alt="" src="/image-7@2x.png" />
          <h1 className="not-travelling-yet-get">
            {" "}
            Travel Lighter, Connect Further: Your eSIM Gateway to the World
          </h1>
          <p className="install-the-nexusconnectnet">{`Say goodbye to bulky wallets overflowing with SIM cards and hello to effortless global connectivity! NexusConnectNet offers a revolutionary eSIM solution, your one-stop shop for seamless internet access wherever you roam. Explore our diverse eSIM plans, designed to fit your travel adventures, from weekend getaways to epic world tours. `}</p>
        </div>
        <div className="section1">
          <Container3 />
          <Container2 />
          <Container1 />
          <Container />
        </div>
        <div className="section2">
          <img
            className="youtube-play-iconpng"
            alt=""
            src="/youtubeplayiconpng@2x.png"
          />
          <div className="background1">
            <img
              className="logo-esim-whitesvg-icon1"
              alt=""
              src="/logoesimwhitesvg-1@2x.png"
            />
            <h1 className="forget-sim-cards">
              Forget SIM Cards, Unleash the eSIM Passport!
            </h1>
          </div>
        </div>
        <Background />
        <Section />
        <FrameComponent />
      </section>
    </div>
  );
};

export default Homepagedesktop;
