// import "./App.css";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Docs from "./pages/Docs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
