import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home.jsx";
// import Collection from "./pages/Collection";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
import './App.css';

function App() {
  return (

    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes> 

    <Footer />
    </BrowserRouter>
   
  );
}

export default App;
