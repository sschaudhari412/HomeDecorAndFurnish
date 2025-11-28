import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Sofa",
      price: 19999,
      category: "Sofa",
      stock: 12,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Modern Lamp",
      price: 1299,
      category: "Lighting",
      stock: 40,
      image: "https://via.placeholder.com/80",
    },
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
          Products
        </h2>

        <Link to="/admin/products/add">
          <Button
            style={{
              backgroundColor: "#f4ca00",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "600",
              color: "#4b4300",
            }}
          >
            + Add Product
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
              <th>Image</th>
              <th>Product Name</th>
              <th>Price (₹)</th>
              <th>Category</th>
              <th>Stock</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="table-row-hover">
                <td>
                  <img
                    src={p.image}
                    width="60"
                    height="60"
                    style={{ borderRadius: "6px" }}
                    alt="product"
                  />
                </td>
                <td className="fw-semibold">{p.name}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>

                <td>
                  <Link to={`/admin/products/edit/${p.id}`}>
                    <Button
                      size="sm"
                      className="me-2"
                      style={{
                        backgroundColor: "#ffda55",
                        border: "none",
                        color: "#4b4300",
                        fontWeight: "600",
                      }}
                    >
                      Edit
                    </Button>
                  </Link>

                  <Button
                    size="sm"
                    style={{
                      backgroundColor: "#e74c3c",
                      border: "none",
                      fontWeight: "600",
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

      {/* Hover effect */}
      <style>{`
        .table-row-hover:hover {
          background-color: #fff3b0 !important;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

    