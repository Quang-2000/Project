import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../stores/slices/productSlice";
import { useEffect } from "react";
import { RootState } from "../stores/store";

const ProductsList = () => {
  const dispatch: any = useDispatch();
  const { products } = useSelector((state: RootState) => state.productSlice);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <div>
      <div className="products">
        {products?.map((product: any) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{`Price: $${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
