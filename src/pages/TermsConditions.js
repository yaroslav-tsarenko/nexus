import Terms from "../components/Terms";
import FooterContent from "../components/FooterContent";
import Footer3 from "../components/Footer3";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="termsconditions">
      <Terms />
      <section className="footer-content-wrapper">
        <FooterContent />
      </section>
      <Footer3 />
    </div>
  );
};

export default TermsConditions;
