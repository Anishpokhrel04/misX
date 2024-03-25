import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignatureGenerator from "../pages/signatureGenerator/SignatureGenerator";
const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signaturegenerator" element={<SignatureGenerator />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
