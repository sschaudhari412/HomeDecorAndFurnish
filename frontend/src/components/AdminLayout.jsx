
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";


export default function AdminLayout() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/*SIDEBAR */}
      <div
        style={{
          width: "250px",
          backgroundColor: "white",
          borderRight: "1px solid #ddd",
          overflowY: "auto",
        }}
      >
        <Sidebar />
      </div>

      {/* MAIN CONTENT AREA */}
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          backgroundColor: "#f4f4f4",
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
