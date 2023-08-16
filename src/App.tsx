import "./App.scss";
import TopNavigation from "./components/TopNavigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import ProductDeatail from "./pages/ProductDetail";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ProductDeatail />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
