import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        <h1>Godess glow</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.product_id}>
            <h2>{product.product_name}</h2>
            <img
              src={product.img}
              alt={product.product_name}
              className="product-image"
            />
            <p>Price: {product.price} SEK</p>
            <p className="description-txt">{product.description}</p>
          </div>
        ))}
        <p>hej</p>
      </div>
    </>
  );
}

export default App;
