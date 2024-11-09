import { useDispatch } from "react-redux";
import { fetchProducts } from "../stores/slices/productSlice";
import { useEffect } from "react";

const ProductsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{`Price: $${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
