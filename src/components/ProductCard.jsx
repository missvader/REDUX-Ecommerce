import { addProductToCart, removeProductFromCart } from "../reducers/cart/cartSlice";
import { useSelector , useDispatch } from "react-redux";
import {FaShoppingCart} from "react-icons/fa";


const ProductCard = ({name, price, category,id, image, product}) => {
  const dispatch = useDispatch();
  const handleProduct = (productId) => {
    dispatch(addProductToCart(product))
   }
  return (
    <div className="col-10 col-md-5 col-lg-4  mb-4 ">
      <div className="card shadow h-100 p-4 rounded rounded-5 border border-2 border-warning">
        <img
          className="card-img-top cover"
          height="200"
          alt="product"
          src={image}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-dark font-monospace mt-4">{name}</h5>
          <p className="text-center fs-4 font-monospace">{price} $</p>
        </div>
        <div className="d-grid ">
          <button type="button" 
            className="btn btn-outline-dark mb-4  rounded rounded-5"
            onClick={() => handleProduct()}
            >
            <FaShoppingCart className="me-4 "/> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;