
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Sustainability from "./pages/Sustainability";
import Nopage from "./pages/Nopage";
import './App.css';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="index" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="sustainability" element={<Sustainability />} />
              <Route path="about" element={<About />}  />
              <Route path="*" element={<Nopage to="/" />}  />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
