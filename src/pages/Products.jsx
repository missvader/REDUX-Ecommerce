import { useState , useEffect} from "react";
import ProductCard from "../components/ProductCard";
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null)
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            console.log("products",products)
  }, [])
 
  return (
    <section className="section-products mb-5">
      <div className="container ">
        <div className="row justify-content-center text-center ">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <p className="fs-5 text-warning fw-bold">Featured Product</p>
              <p className="fs-2 fw-bold text-muted">Popular Products</p>
            </div>
          </div>
        </div>
        <div className="d-flex row justify-content-center mt-5  ">
              {/*<!--Single Product -->*/}
              {products.map((product => (
                  <ProductCard
                  key={product.id}
                  name={product.title}
                  price={product.price}
                  category={product.category}
                  id={product.id}
                  image={product.image}
                  product={product}
                />
                
              )))}
          </div>
      </div>
    </section>
  )
}
export default Products;