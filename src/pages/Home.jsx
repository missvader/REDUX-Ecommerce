import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount";
import Banner from "../assets/banner.jpg";
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
const Home = () => {
 
  return (
    <>
      <ScrollToTopOnMount/> 
      <div className="">
        <img src={Banner} className="img-fluid" alt="banner"/>
      </div> 
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-dark" replace>
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FaFacebook size={25} color="black"/>
          </a>
          <a href="!#">
            <FaInstagram size={25} color="black" />
          </a>
          <a href="!#" className="ms-3">
            <FaTwitter size={25} color="black"/>
          </a>
        </div>
      </div>
    </>
  )
}
export default Home;