import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function EditProduct() {
  const existingProduct = {
    title: "Premium Sofa",
    description: "Soft and comfortable modern sofa",
    price: 19999,
    stock: 12,
    category: "Sofa",
    image: "https://via.placeholder.com/120",
  };

  const [imagePreview, setImagePreview] = useState(existingProduct.image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Card className="shadow-sm p-4" style={{ borderRadius: "12px" }}>
      <h3 className="mb-4" style={{ color: "#6a5d00" }}>Edit Product</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="text"
            defaultValue={existingProduct.title}
            style={{ borderRadius: "8px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            defaultValue={existingProduct.description}
            style={{ borderRadius: "8px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price (₹)</Form.Label>
          <Form.Control
            type="number"
            defaultValue={existingProduct.price}
            style={{ borderRadius: "8px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            defaultValue={existingProduct.stock}
            style={{ borderRadius: "8px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select defaultValue={existingProduct.category} style={{ borderRadius: "8px" }}>
            <option>Sofa</option>
            <option>Lighting</option>
            <option>Beds</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />

          <img
            src={imagePreview}
            alt="product"
            className="mt-3"
            width="120"
            style={{ borderRadius: "5px" }}
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
          Update Product
        </Button>
      </Form>
    </Card>
  );
}

