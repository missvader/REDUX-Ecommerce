import { useSelector, useDispatch } from "react-redux"
//el hook useSelector es lo que va a permitir que podamos consumir el estado global del store en el componente
//el hook useDispatch nos va a permitir update el estado (aqui por ejemplo setuser)
import { setUser , unsetUser} from "./reducers/user/userSlice";
//aqui estoy importando actions que necesita el dispatch para actualizar el estado. ojo! en este caso unsetUser no recibe payload

export const App = () =>{
  const dispatch = useDispatch();
  const {email, fullName} = useSelector(state => state.user)
  return (
    <div className="container">
      <h1>Redux Demo App</h1>
      <h2>{fullName}</h2>
      <p>Email: {email}</p>
      <button 
        className="btn btn-primary m-2"
        onClick={() => {
          dispatch(setUser({
            email: "user1@user.com",
            fullName: "Vanessa Palazón",
            token: "123456789"
          }))
        }}
      >SET USER</button>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          dispatch(unsetUser())
        }}
      >UNSET USER</button>
    </div>
  )
}

