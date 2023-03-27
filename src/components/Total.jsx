import { useSelector } from "react-redux";
const Total = () => {
 const cartItems = useSelector(state => state.cart.cartItems)
 const cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity)

 const getTotalPrice = () => {
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price * item.quantity
  })
  return totalPrice
 }
 return (
  <>
    <div className=" text-end fs-3 border rounded shadow-lg border-3 mb-3 p-3">
      total {cartTotalQuantity} items
      : <strong>{getTotalPrice() } €</strong>
    </div>
  </>
 )
}
export default Total;