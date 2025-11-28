import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// USER SIDE
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home.jsx";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

// ADMIN SIDE
import Login from "./pages/Login.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Dashboard from "./components/Dashboard.jsx";

import Categories from "./pages/categories/Categories.jsx";
import AddCategory from "./pages/categories/AddCategory.jsx";
import EditCategory from "./pages/categories/EditCategory.jsx";

import Products from "./pages/products/Products.jsx";
import AddProduct from "./pages/products/AddProduct.jsx";
import EditProduct from "./pages/products/EditProduct.jsx";

import Orders from "./pages/orders/Orders.jsx";
import OrderDetails from "./pages/orders/OrderDetails.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* USER NAVBAR */}
      <Navbar />

      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />

          {/* Categories */}
          <Route path="categories" element={<Categories />} />
          <Route path="categories/add" element={<AddCategory />} />
          <Route path="categories/edit/:id" element={<EditCategory />} />

          {/* Products */}
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />

          {/* Orders */}
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetails />} />
        </Route>
      </Routes>

      {/* USER FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;














// import{BrowserRouter, Routes, Route} from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home/Home.jsx";
// // import Collection from "./pages/Collection";
// import ProductList from "./pages/ProductList";
// import ProductDetails from "./pages/ProductDetails";
// // import Cart from "./pages/Cart";
// //admin side
// import Sidebar from './components/Sidebar.jsx';
// import Login from "./pages/Login.jsx";
// import AdminLayout from './components/AdminLayout.jsx';
// import Dashboard from './components/Dashboard.jsx';
// import AddCategory from './pages/categories/AddCategory.jsx';
// import Categories from './pages/categories/Categories.jsx';
// import EditCategory from './pages/categories/EditCategory';
// import OrderDetails from './pages/orders/OrderDetails.jsx';
// import Orders from './pages/orders/Orders.jsx';
// import AddProduct from './pages/products/AddProduct.jsx';
// import EditProduct from './pages/categories/EditCategory.jsx';
// import Products from './pages/products/Products.jsx';
// import './App.css';

// function App() {
//   // return (

//   //   <BrowserRouter>
//   //   <Navbar />

//   //   <Routes>
//   //     <Route path="/" element={<Home />} />      
//   //     <Route path="/products/:category" element={<ProductList />} />
//   //     <Route path="/product/:id" element={<ProductDetails />} />
//   //   </Routes> 

//   //   <Footer />
//   //   </BrowserRouter>
   
//   // );
   
//     return (
//     <BrowserRouter>

//       {/* USER NAVBAR (Hides on admin pages automatically if inside AdminLayout) */}
//       <Navbar />

//       <Routes>
//         {/* USER SIDE ROUTES */}
//         <Route path="/" element={<Home />} />
//         <Route path="/products/:category" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductDetails />} />

//         {/* LOGIN */}
//         <Route path="/login" element={<Login />} />

//         {/* ADMIN PANEL ROUTES */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route path="dashboard" element={<Dashboard />} />

//           {/* Categories */}
//           <Route path="categories" element={<Categories />} />
//           <Route path="categories/add" element={<AddCategory />} />
//           <Route path="categories/edit/:id" element={<EditCategory />} />

//           {/* Products */}
//           <Route path="products" element={<Products />} />
//           <Route path="products/add" element={<AddProduct />} />
//           <Route path="products/edit/:id" element={<EditProduct />} />

//           {/* Orders */}
//           <Route path="orders" element={<Orders />} />
//           <Route path="orders/:id" element={<OrderDetails />} />
//         </Route>
//       </Routes>

//       {/* USER FOOTER */}
//       <Footer />
//     </BrowserRouter>
//   );

// }

// export default App;
