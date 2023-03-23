import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"
import Products from "./pages/Products"
import ShoppingCart from "./pages/ShoppingCart"
import Index from "./pages/Index"

export const App = () =>{
  
  return (
    <Index>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/shoppingCart" element={<ShoppingCart/>}></Route>
      </Routes>
    </Index>
  )
}

