import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "admin") {
      if (email === "admin@gmail.com" && password === "admin123") {
        navigate("/admin/dashboard");
      } else {
        return alert("Invalid admin credentials");
      }
    }

    if (role === "user") {
      if (email === "user@gmail.com" && password === "user123") {
        navigate("/");
      } else {
        return alert("Invalid user credentials");
      }
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, #ffe259, #ffa751)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "360px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h3
          className="text-center mb-4 fw-bold"
          style={{ color: "#6a5d00" }}
        >
          Login
        </h3>

        <Form onSubmit={handleLogin}>
          {/* ROLE RADIO BUTTONS */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Login As</Form.Label>

            <div className="d-flex gap-4 mt-2">
              <Form.Check
                type="radio"
                label="User"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={(e) => setRole(e.target.value)}
              />

              <Form.Check
                type="radio"
                label="Admin"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ height: "45px", borderRadius: "8px" }}
            />
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ height: "45px", borderRadius: "8px" }}
            />
          </Form.Group>

          {/* LOGIN BUTTON */}
          <Button
            type="submit"
            className="w-100"
            style={{
              backgroundColor: "#f4ca00",
              border: "none",
              height: "45px",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}



















// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // default role

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // -------------------
//     //  DUMMY LOGIN LOGIC
//     // -------------------
//     if (role === "admin") {
//       if (email === "admin@gmail.com" && password === "admin123") {
//         navigate("/admin/dashboard");
//       } else {
//         return alert("Invalid admin credentials");
//       }
//     }

//     if (role === "user") {
//       if (email === "user@gmail.com" && password === "user123") {
//         navigate("/"); // redirect to home page
//       } else {
//         return alert("Invalid user credentials");
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: "linear-gradient(to right, #ffe259, #ffa751)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "360px",
//           background: "white",
//           padding: "30px",
//           borderRadius: "12px",
//           boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
//         }}
//       >
//         <h3 className="text-center mb-4 fw-bold" style={{ color: "#6a5d00" }}>
//           Login
//         </h3>

//         <Form onSubmit={handleLogin}>
          
//           {/* ROLE SELECTOR */}
//           <Form.Group className="mb-3">
//             <Form.Label>Select Role</Form.Label>
//             <Form.Select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               style={{ height: "45px", borderRadius: "8px" }}
//             >
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </Form.Select>
//           </Form.Group>

//           {/* EMAIL */}
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={{ height: "45px", borderRadius: "8px" }}
//             />
//           </Form.Group>

//           {/* PASSWORD */}
//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={{ height: "45px", borderRadius: "8px" }}
//             />
//           </Form.Group>

//           <Button
//             type="submit"
//             className="w-100"
//             style={{
//               backgroundColor: "#f4ca00",
//               border: "none",
//               height: "45px",
//               borderRadius: "8px",
//               fontWeight: "600",
//             }}
//           >
//             Login
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
























// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "admin123") {
//       navigate("/admin/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: "linear-gradient(to right, #ffe259, #ffa751)", // yellow gradient
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 0,
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           width: "340px",
//           padding: "30px",
//           background: "white",
//           borderRadius: "12px",
//           boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
//         }}
//       >
//         <h3
//           className="text-center mb-4 fw-bold"
//           style={{ color: "#6a5d00", letterSpacing: "1px" }}
//         >
//           Admin Login
//         </h3>

//         <Form onSubmit={handleLogin}>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter admin email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 height: "45px",
//                 borderRadius: "8px",
//                 border: "1px solid #d5c24f",
//               }}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 height: "45px",
//                 borderRadius: "8px",
//                 border: "1px solid #d5c24f",
//               }}
//               required
//             />
//           </Form.Group>

//           <Button
//             type="submit"
//             className="w-100 mt-2"
//             style={{
//               height: "45px",
//               backgroundColor: "#f4ca00",
//               border: "none",
//               color: "#4b4300",
//               fontWeight: "600",
//               borderRadius: "8px",
//             }}
//           >
//             Login
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

