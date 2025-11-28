import { Card, Row, Col } from "react-bootstrap";
import { Package, ShoppingCart, Clock, RotateCcw } from "lucide-react";

export default function Dashboard() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #ffe259, #ffa751)",
        padding: "30px",
        borderRadius: "12px",
        minHeight: "100%",
      }}
    >
      <h2 className="mb-4 text-dark fw-bold">Admin Dashboard</h2>

      <Row className="g-4">

        {/* TOTAL PRODUCTS */}
        <Col md={6} lg={3}>
          <Card className="shadow-sm border-0 card-hover big-card">
            <Card.Body className="d-flex align-items-center">
              <Package size={50} className="text-primary me-3" />
              <div>
                <h6 className="text-muted fs-6">Total Products</h6>
                <h2 className="fw-bold">120</h2>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* TOTAL ORDERS */}
        <Col md={6} lg={3}>
          <Card className="shadow-sm border-0 card-hover big-card">
            <Card.Body className="d-flex align-items-center">
              <ShoppingCart size={50} className="text-success me-3" />
              <div>
                <h6 className="text-muted fs-6">Total Orders</h6>
                <h2 className="fw-bold">534</h2>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* TODAY'S ORDERS */}
        <Col md={6} lg={3}>
          <Card className="shadow-sm border-0 card-hover big-card">
            <Card.Body className="d-flex align-items-center">
              <Clock size={50} className="text-warning me-3" />
              <div>
                <h6 className="text-muted fs-6">Today's Orders</h6>
                <h2 className="fw-bold">12</h2>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* PENDING RETURNS */}
        <Col md={6} lg={3}>
          <Card className="shadow-sm border-0 card-hover big-card">
            <Card.Body className="d-flex align-items-center">
              <RotateCcw size={50} className="text-danger me-3" />
              <div>
                <h6 className="text-muted fs-6">Pending Returns</h6>
                <h2 className="fw-bold">3</h2>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/*CSS */}
      <style>{`
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border-radius: 14px;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 30px rgba(0,0,0,0.2);
        }
        .big-card {
          padding: 5px;
          height: 150px !important; 
          display: flex;
          justify-content: center;
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
}


