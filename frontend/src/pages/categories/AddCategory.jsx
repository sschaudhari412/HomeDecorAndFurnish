import { Form, Button, Card } from "react-bootstrap";

export default function AddCategory() {
  return (
    <Card className="shadow-sm p-4" style={{ borderRadius: "12px" }}>
      <h3 className="mb-4" style={{ color: "#6a5d00" }}>Add Category</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            style={{ borderRadius: "8px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write category description"
            style={{ borderRadius: "8px" }}
          />
        </Form.Group>

        {/*Button*/}
        <Button
          type="submit"
          style={{
            backgroundColor: "#f4ca00",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            color: "#4b4300",
          }}
        >
          Add Category
        </Button>
      </Form>
    </Card>
  );
}
