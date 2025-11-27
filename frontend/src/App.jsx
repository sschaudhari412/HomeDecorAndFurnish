import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home.jsx";
import ProductList from "./pages/Categories/ProductList.jsx";
import ProductDetails from "./pages/ProductDetails";
import Furniture from "./pages/Categories/Furniture";
import KitchenDining from "./pages/Categories/KitchenDining";
import HomeDecor from "./pages/Categories/HomeDecor";
import HomeFurnishing from "./pages/Categories/HomeFurnishing";
import Interiors from "./pages/Categories/Interiors";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/furniture" element={<Furniture />} />
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



      </Routes>
    </BrowserRouter>

  );
}

export default App;
