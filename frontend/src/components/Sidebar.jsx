import { NavLink } from "react-router-dom";
import {
  ClipboardList,
  Layers,
  Sofa,
  ShoppingBag,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 18px",
    color: isActive ? "#4b4100" : "#333",
    backgroundColor: isActive ? "#ffe372" : "transparent",
    textDecoration: "none",
    borderRadius: "10px",
    marginBottom: "12px",
    fontSize: "15.5px",
    fontWeight: "600",
    boxShadow: isActive ? "0 3px 10px rgba(0,0,0,0.10)" : "none",
    transition: "0.25s",
  });

  return (
    <div className="p-4" style={{ height: "100%", color: "#4b4b00" }}>
      
      {/* Sidebar Title */}
      <h3
        className="text-center mb-4 fw-bold"
        style={{
          backgroundColor: "#ffea85",
          padding: "12px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          letterSpacing: "1px",
        }}
      >
        Admin Panel
      </h3>

      {/* Sidebar Links */}
      <div>

        <NavLink to="/admin/dashboard" style={linkStyle}>
          <ClipboardList size={22} />
          Dashboard
        </NavLink>

        <NavLink to="/admin/categories" style={linkStyle}>
          <Layers size={22} />
          Categories
        </NavLink>

        <NavLink to="/admin/products" style={linkStyle}>
          <Sofa size={22} />
          Products
        </NavLink>

        <NavLink to="/admin/orders" style={linkStyle}>
          <ShoppingBag size={22} />
          Orders
        </NavLink>

        <NavLink to="/login" style={linkStyle}>
          <LogOut size={22} />
          Logout
        </NavLink>
      </div>

      {/* Hover Animation */}
      <style>{`
        a:hover {
          background-color: #fff1a8 !important;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}