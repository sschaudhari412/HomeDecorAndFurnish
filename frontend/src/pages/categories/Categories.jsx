import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Categories() {
  // Dummy Data
  const categories = [
    { id: 1, name: "Sofas", description: "All kinds of sofas" },
    { id: 2, name: "Lamps", description: "Home & decor lighting" },
    { id: 3, name: "Beds", description: "King/Queen Size Beds" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#fff8c7",
        padding: "25px",
        borderRadius: "12px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold" style={{ color: "#6a5d00" }}>
          Categories
        </h2>

        <Link to="/admin/categories/add">
          <Button
            variant="warning"
            style={{
              backgroundColor: "#f4ca00",
              borderColor: "#e0b400",
              color: "#4b4300",
              fontWeight: "600",
            }}
          >
            + Add Category
          </Button>
        </Link>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Table bordered hover responsive className="mb-0">
          <thead
            style={{
              backgroundColor: "#e8d127",
              color: "#4b4300",
            }}
          >
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Description</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr
                key={cat.id}
                style={{ transition: "0.2s" }}
                className="table-row-hover"
              >
                <td>{cat.id}</td>
                <td className="fw-semibold">{cat.name}</td>
                <td>{cat.description}</td>

                <td>
                  <Link to={`/admin/categories/edit/${cat.id}`}>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      style={{
                        backgroundColor: "#ffda55",
                        border: "none",
                        color: "#4b4300",
                      }}
                    >
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    size="sm"
                    style={{
                      backgroundColor: "#e74c3c",
                      border: "none",
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Hover Row Effect */}
      <style>{`
        .table-row-hover:hover {
          background-color: #fff3b0 !important;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
