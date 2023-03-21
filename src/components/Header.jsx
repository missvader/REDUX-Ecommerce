import { Link , useNavigate} from "react-router-dom";
import {AiFillShop} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import { useSelector , useDispatch} from "react-redux";
import { removeActiveUser } from "../reducers/user/authSlice";

const Header = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeActiveUser());
    navigate("/")
  }
  return (
    <div className="container-fluid  ">
      <Navbar collapseOnSelect expand="sm"> 
        <div className="container-fluid mt-4">
          <Link className="navbar-brand text-center fs-4 d-flex" to="/home" >
            <AiFillShop className="ms-1" size={35}/>
            <div className="align-self-center fw-bold">Shop Center</div>  
          </Link>
          <div className=" d-flex justify-end">
            <button type="button" className="btn btn-outline-dark me-3 d-sm-none">
              <FaShoppingCart
              />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="container d-flex justify-content-between"> 
              <NavLink  eventkey="1" as={Link} to="/products"className="ms-md-5">EXPLORE</NavLink>
              {user.isLoggedIn ?
                <NavLink  eventkey="2" onClick={handleLogout}>LOG OUT</NavLink> :
                <NavLink  eventkey="2" as={Link} to="/login"> LOG IN</NavLink>
              }
            </Nav>
          </Navbar.Collapse>
          <button type="button" className="btn btn-outline-dark me-3 d-none d-md-block">
              <FaShoppingCart
              />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
        </div>
      </Navbar>
    </div>
  )
}
export default Header;