import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepagedesktop from "./pages/Homepagedesktop";
import ActivateEsimdesktop from "./pages/ActivateEsimdesktop";
import PartnerSolutionsDesktop from "./pages/PartnerSolutionsDesktop";
import Faqdesktop from "./pages/Faqdesktop";
import Helpcenterdesktop from "./pages/Helpcenterdesktop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/activate-esimdesktop":
        title = "";
        metaDescription = "";
        break;
      case "/partner-solutions-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/faqdesktop":
        title = "";
        metaDescription = "";
        break;
      case "/helpcenterdesktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepagedesktop />} />
      <Route path="/activate-esimdesktop" element={<ActivateEsimdesktop />} />
      <Route
        path="/partner-solutions-desktop"
        element={<PartnerSolutionsDesktop />}
      />
      <Route path="/faqdesktop" element={<Faqdesktop />} />
      <Route path="/helpcenterdesktop" element={<Helpcenterdesktop />} />
    </Routes>
  );
}
export default App;
