import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import RegistrationPage01 from "./pages/RegistrationPage01";
import { useEffect } from "react";
import RegistrationInitialPage from "./pages/RegistrationInitialPage";

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
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<RegistrationPage01 />} />
      <Route
        path="/registration/sign_up"
        element={<RegistrationInitialPage />}
      />
    </Routes>
  );
}
export default App;
