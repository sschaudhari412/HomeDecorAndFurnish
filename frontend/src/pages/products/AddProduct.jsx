import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function AddProduct() {

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Card className="shadow-sm p-4">
      <h3 className="mb-4">Add Product</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Title</Form.Label>
          <Form.Control type="text" placeholder="Enter product title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Product description" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price (₹)</Form.Label>
          <Form.Control type="number" placeholder="Enter price" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="number" placeholder="Enter stock quantity" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select>
            <option>Select category</option>
            <option>Sofa</option>
            <option>Lighting</option>
            <option>Beds</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />

          {imagePreview && (
            <img
              src={imagePreview}
              alt="preview"
              className="mt-3"
              width="120"
              style={{ borderRadius: "5px" }}
            />
          )}
        </Form.Group>

        <Button variant="dark" type="submit">
          Add Product
        </Button>
      </Form>
    </Card>
  );
}
