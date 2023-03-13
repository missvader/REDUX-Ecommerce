import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase/firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth"

const Login= () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      setLoading(false)
      alert('Login successful')
      // navigate('/')
    })
    .catch((error) => {
      setLoading(false)
      alert(error.message)
    });
    setLoading(false)
  }
  return (
    <>
    <section className="vh-100 container-fluid " >
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black border-0" >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>
                    <div className="text-center mb-5">
                        Need an account?
                          <Link to="/signup">
                            <span className="ms-2">Sign up!</span>
                          </Link>
                    </div> 
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
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
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Log In</button>
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
export default Login;