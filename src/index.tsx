import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import GlobalStyles from "./global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    <GlobalStyles />
    </Router>
  </React.StrictMode>
);
