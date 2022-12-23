import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components/header";
import { Home } from "../pages/home";

export function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<h1>404: page not found</h1>} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
