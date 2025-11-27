import React from "react";

const Furniture = () => {
  return (
    <main className="container py-4">
      <h1 className="mb-3">Furniture</h1>
      <p className="text-muted">
        Browse sofas, beds, wardrobes, dining sets and more   </p>
      <hr />
      <section className="mt-4">
        <h5>Popular Categories</h5>
        <ul>
          <li>Living Room: Sofas, Recliners, TV Units</li>
          <li>Bedroom: Beds, Wardrobes, Dressers</li>
          <li>Dining: Dining Tables, Chairs & Benches</li>
          <li>Study & Office: Study Tables, Office Chairs</li>
        </ul>
      </section>
    </main>
  );
};

export default Furniture;
