import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RegistrationPage01 from "./pages/RegistrationPage01.tsx";
import RegistrationInitialPage from "./pages/RegistrationInitialPage.tsx";
import RegistrationInitialOwner from "./pages/RegistrationInitialOwner.tsx";
import RegistrationOwnerFirst from "./pages/RegistrationOwnerFirst.tsx";
import MapPage from "./pages/Map_Page/MapPage.tsx";

function App() {
  return (
    <Router>
      <div className="App" style={{ overflowY: "hidden" }}>
        <Routes>
          <Route path="/registration_driver" element={<RegistrationPage01 />} />
          <Route
            path="/registration_driver/sign_up"
            element={<RegistrationInitialPage />}
          />
          <Route
            path="/registration_owner"
            element={<RegistrationInitialOwner />}
          />
          <Route
            path="/registration_owner/sign_up"
            element={<RegistrationOwnerFirst />}
          />
          <Route path="/main" element={<MapPage />} />

          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
