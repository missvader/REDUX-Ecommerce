import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/reducers/user/authSlice";
import { Loader } from "../../components/Loader";

const Signup = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== passwordConfirm) {
      alert("Passwords do not match")
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        alert(userName + " your registration has been succesfully!")
        dispatch(setActiveUser({
          email: user.email,
          userName: userName,
          userId: user.uid
        }))
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
      if (loading) {
        return <Loader/>
      }
  }
  return(
    <>
      {loading && <Loader/>}
    <section className=" container-fluid " >
      <div className="container  ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-10">
            <div className="card text-black border-0 my-4" >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <div className="text-center mb-5">
                        Already have an account?
                          <Link to="/login">
                            <span className="ms-2">Log In!</span>
                          </Link>
                    </div> 
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="text" 
                            id="username" 
                            className="form-control" 
                            onChange={(e) => setUserName(e.target.value)}
                            required/>
                          <label className="form-label" htmlFor="username">Your UserName</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                          <label className="form-label" htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            autoComplete="on"
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                            type="password" 
                            id="confirmPassword" 
                            className="form-control" 
                            autoComplete="on"
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required/>
                          <label className="form-label" htmlFor="confirmPassword">Repeat your password</label>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-dark btn-lg">Register</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
export default Signup;