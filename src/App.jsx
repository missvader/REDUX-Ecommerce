import { useSelector, useDispatch } from "react-redux"
//el hook useSelector es lo que va a permitir que podamos consumir el estado global del store en el componente
//el hook useDispatch nos va a permitir update el estado (aqui por ejemplo setuser)
import { setUser } from "./reducers/user/userSlice";
//aqui estoy importando actions que necesita el dispatch para actualizar el estado

export const App = () =>{
  const dispatch = useDispatch();
  const {email, fullName} = useSelector(state => state.user)
  return (
    <div className="container">
      <h1>Redux Demo App</h1>
      <h2>{fullName}</h2>
      <p>Email: {email}</p>
      <button 
        className="btn btn-primary"
        onClick={() => {
          dispatch(setUser({
            email: "user1@user.com",
            fullName: "Vanessa Palazón",
            token: "123456789"
          }))
        }}
      >Cambiar User</button>
    </div>
  )
}

