import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    navigate("/login");
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
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          width: "380px",
          height: "auto",
          padding: "35px",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.30)",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            color: "#000",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Create Account
        </h3>

        <Form onSubmit={handleRegister}>
          {/* USERNAME */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                height: "45px",
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                height: "45px",
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                height: "45px",
                borderRadius: "10px",
              }}
            />
          </Form.Group>

          {/* ROLE */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Select Role</Form.Label>
            <div className="d-flex gap-4 mt-2">
              <Form.Check
                type="radio"
                label="User"
                name="role"
                value="user"
                checked={formData.role === "user"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Admin"
                name="role"
                value="admin"
                checked={formData.role === "admin"}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          {/* REGISTER BUTTON */}
          <Button
            type="submit"
            className="w-100"
            style={{
              height: "47px",
              background: "linear-gradient(to right, #ffb800, #b38e00)",
              border: "none",
              borderRadius: "10px",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            Register
          </Button>

          {/* LOGIN NAVIGATION */}
          <p className="text-center mt-3 fw-semibold">
            Already have an account?{" "}
            <span
              style={{
                color: "#b18300",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
}
