import { Card, Table, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { id } = useParams();

  const order = {
    id,
    customer: "Riya",
    phone: "9876543210",
    address: "123 Street, Pune, Maharashtra",
    date: "2025-01-14",
    payment: "UPI",
    status: "Shipped",
    items: [
      { name: "Premium Sofa", qty: 1, price: 19999 },
      { name: "Table Lamp", qty: 2, price: 999 },
    ],
  };

  const totalAmount = order.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <div
      style={{
        backgroundColor: "#fff8c7",
        padding: "25px",
        borderRadius: "12px",
      }}
    >
      <h2 className="fw-bold mb-4" style={{ color: "#6a5d00" }}>
        Order Details
      </h2>

      {/* ORDER INFO CARD */}
      <Card
        className="mb-4 p-3 shadow-sm"
        style={{ borderRadius: "12px", backgroundColor: "white" }}
      >
        <h4
          className="mb-3 p-2 text-center"
          style={{
            backgroundColor: "#e8d127",
            color: "#4b4300",
            borderRadius: "8px",
            fontWeight: "700",
          }}
        >
          Order #{order.id}
        </h4>

        <p><strong>Customer:</strong> {order.customer}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Payment:</strong> {order.payment}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </Card>

      {/* ITEMS TABLE */}
      <Card
        className="shadow-sm p-3"
        style={{ borderRadius: "12px", backgroundColor: "white" }}
      >
        <h5
          className="mb-3 p-2"
          style={{
            backgroundColor: "#ffe87a",
            color: "#4b4300",
            borderRadius: "8px",
            fontWeight: "600",
          }}
        >
          Purchased Items
        </h5>

        <Table bordered hover responsive className="mb-0">
          <thead
            style={{
              backgroundColor: "#e8d127",
              color: "#4b4300",
            }}
          >
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
            </tr>
          </thead>

          <tbody>
            {order.items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>₹{item.price}</td>
                <td>₹{item.qty * item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h4
          className="text-end mt-3 me-2 fw-bold"
          style={{ color: "#6a5d00" }}
        >
          Grand Total: ₹{totalAmount}
        </h4>
      </Card>

      {/* BACK BUTTON */}
      <div className="mt-3">
        <Button
          onClick={() => window.history.back()}
          style={{
            backgroundColor: "#f4ca00",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            color: "#4b4300",
            fontWeight: "600",
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

