import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "admin") {
      if (email === "admin@gmail.com" && password === "admin123") {
        return navigate("/admin/dashboard");
      } else return alert("Invalid admin credentials");
    }

    if (email === "user@gmail.com" && password === "user123") {
      navigate("/");
    } else alert("Invalid user credentials");
  };

  return (
   <div
  style={{
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/assets/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}

>
      <div
        style={{
          width: "420px",
          background: "#ffffff",
          padding: "40px 35px",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            color: "#000",
            letterSpacing: "0.5px",
          }}
        >
          Login to Furniverse
        </h2>

        <Form onSubmit={handleLogin}>
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

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "10px", height: "45px" }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "10px", height: "45px" }}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 mb-3"
            style={{
              background:
                "linear-gradient(to right, #ffb800, #c09a00)",
              border: "none",
              height: "47px",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            Login
          </Button>
        </Form>

        <p className="text-center mt-2">
          Don’t have an account?
          <Link
            to="/register"
            style={{
              fontWeight: "700",
              marginLeft: 5,
              color: "#b18300",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
