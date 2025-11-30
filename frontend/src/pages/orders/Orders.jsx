import { Table, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Orders() {
  const orders = [
    {
      id: "ORD123",
      customer: "Rugvedi W",
      total: 25999,
      items: 3,
      status: "Shipped",
      date: "2025-01-10",
    },
    {
      id: "ORD124",
      customer: "Shubham C",
      total: 3999,
      items: 1,
      status: "Delivered",
      date: "2025-01-12",
    },
    {
      id: "ORD125",
      customer: "Akanksha D",
      total: 9999,
      items: 2,
      status: "Processing",
      date: "2025-01-14",
    },
  ];

  // Status badge color
  const getStatusBadge = (status) => {
    if (status === "Delivered")
      return <Badge bg="success">{status}</Badge>;
    if (status === "Shipped")
      return <Badge bg="info">{status}</Badge>;
    return <Badge bg="warning">{status}</Badge>;
  };

  return (
    <div
      style={{
        backgroundColor: "#fff8c7",
        padding: "25px",
        borderRadius: "12px",
      }}
    >
      <h2 className="fw-bold mb-4" style={{ color: "#6a5d00" }}>
        Orders
      </h2>

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
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total (₹)</th>
              <th>Items</th>
              <th>Status</th>
              <th>Date</th>
              <th style={{ width: "140px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="table-row-hover">
                <td>{order.id}</td>
                <td className="fw-semibold">{order.customer}</td>
                <td>₹{order.total}</td>
                <td>{order.items}</td>
                <td>{getStatusBadge(order.status)}</td>
                <td>{order.date}</td>

                <td>
                  <Link to={`/admin/orders/${order.id}`}>
                    <Button
                      size="sm"
                      style={{
                        backgroundColor: "#f4ca00",
                        border: "none",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        color: "#4b4300",
                        fontWeight: "600",
                      }}
                    >
                      View
                    </Button>
                  </Link>
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

