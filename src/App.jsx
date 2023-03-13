import {Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"
import Index from "./pages/Index"

export const App = () =>{
  
  return (
    <Index>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Index>
  )
}

