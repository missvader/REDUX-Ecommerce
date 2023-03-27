import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { IoCaretBackOutline} from "react-icons/io5";
import CartEmpty from "../assets/CardEmpty.svg"
import CartItem from '../components/CartItem';
import Total from '../components/Total';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  
  return (
    <section className="d-lg-flex  justify-content-center ">
      <h1 className="bg-warning p-5 bg-opacity-75 text-center">SHOPPING CART</h1>
      <div className="container">
        <div className="mx-auto justify-content-center ">
          <div className="rounded-5 ">
            {cartItems.length === 0 ?
              <div className='d-flex justify-content-center' >
                <img src={CartEmpty} className="opacity-25 " style={{ height: 30 + 'rem'}}/>
                <div className='position-absolute top-25 rounded-5'>
                  <h4 className='align-self-center mt-3'>Your cart is currently empty</h4>
                  <div className='text-center mt-1'>
                    <Link to="/products" className='btn   btn-secondary rounded-3  fw-bold fs-4 px-3'>
                      <IoCaretBackOutline color='white' size={30}/> 
                      Back to shopping</Link>
                  </div>
                </div>
              </div>
              : (
                <>
                {cartItems?.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
                <Total/>
                </>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}
export default ShoppingCart;