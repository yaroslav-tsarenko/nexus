import Header1 from "../components/Header1";
import Background3 from "../components/Background3";
import BackgroundShadow from "../components/BackgroundShadow";
import Background2 from "../components/Background2";
import Background from "../components/Background";
import Footer from "../components/Footer";
import "./ActivateEsimdesktop.css";

const ActivateEsimdesktop = () => {
  return (
    <div className="activate-esimdesktop">
      <Header1 />
      <Background3 />
      <BackgroundShadow />
      <Background2 />
      <Background />
      <Footer
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
      />
    </div>
  );
};

export default ActivateEsimdesktop;
