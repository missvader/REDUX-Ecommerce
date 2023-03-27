import {FaTrashAlt} from 'react-icons/fa';
import { AiFillMinusCircle , AiFillPlusCircle  } from "react-icons/ai";
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/reducers/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({id, name, price, image, quantity=0}) => {
  const dispatch = useDispatch()
  return (
    <div key={id} className="justify-content-between mb-4 rounded-3 p-5 border shadow-lg d-flex ">
    <div className='row' >
      <div className='col-12 col-sm-6 text-center text-sm-start'>
        <img src={image} alt={name} className="rounded-3  mx-auto  " style={{ width: 8 + 'rem'}}/>
      </div>
      <div className='mt-2 col-12 col-sm-6 row  justify-content-md-end'>
          <h2 className=''>{name}</h2>
          <div className='d-flex mt-4 align-content-center '>
           <button 
            className='btn btn-outline my-0'
            onClick={()=> dispatch(decrementQuantity(id))}>
            <AiFillMinusCircle size={25}/>
           </button> 
           <p className='mx-4 fs-5 fw-bold pt-2'>{quantity}</p>
           <button 
            className='btn btn-outline'
            onClick={() => dispatch(incrementQuantity(id))}>
            <AiFillPlusCircle size={25}/>
           </button> 
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <h4>{price * quantity } €</h4>
            <FaTrashAlt size={20} color="red" onClick={()=> dispatch(removeItem(id))}/>
          </div>
      </div>
    </div>
    
  </div>
  )
}
export default CartItem;