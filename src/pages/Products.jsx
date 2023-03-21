import { useState , useEffect} from "react";
import ProductCard from "../components/ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            console.log(products)
  }, [])
  return (
    <section className="section-products">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <p className="fs-5 text-danger">Featured Product</p>
              <p className="fs-2 fw-bold text-muted">Popular Products</p>
            </div>
          </div>
        </div>
        <div className="d-flex row justify-content-center mt-5">
              {/*<!--Single Product -->*/}
              {products.map((product => (
                <ProductCard
                 key={product.id}
                 name={product.title}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                />
              )))}
            
          </div>
      </div>

    </section>
  )
}
export default Products;