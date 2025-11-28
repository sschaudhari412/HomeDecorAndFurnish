import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home.jsx";
import ProductList from "./pages/Categories/ProductList.jsx";
import ProductDetails from "./pages/ProductDetails";
import KitchenDining from "./pages/Categories/KitchenDining";
import HomeDecor from "./pages/Categories/HomeDecor";
import HomeFurnishing from "./pages/Categories/HomeFurnishing";
import Interiors from "./pages/Categories/Interiors";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Splash from './pages/Splash.jsx';
import LoginPage from './pages/Auth/LoginPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>

      {/* Default route → Splash screen */}
        <Route path="/" element={<Splash />} />

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Main website */}
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/furniture" element={<ProductList />} />
        <Route path="/kitchen-dining" element={<KitchenDining />} />
        <Route path="/home-decor" element={<HomeDecor />} />
        <Route path="/home-furnishing" element={<HomeFurnishing />} />
        <Route path="/interiors" element={<Interiors />} />
        {/* Dynamic subcategory */}
        <Route path="/:category/:subcategory" element={<ProductList />} />

        //living room sections
        <Route path="/furniture/living-room" element={<ProductList />} />
        <Route path="/furniture/living-room/:section" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        //bedroom sections

        <Route path="/furniture/bedroom" element={<ProductList />} />
        <Route path="/furniture/bedroom/:section" element={<ProductList />} />
        //dining & study sections
        <Route path="/:category/:subcategory" element={<ProductList />} />
        <Route path="/furniture/dining-study/:section" element={<ProductList />} />


        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {/* <ToastContainer position="top-right" autoClose={1500} /> */}

    </BrowserRouter>

  );
}

export default App;
