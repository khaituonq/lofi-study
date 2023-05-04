import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"

import { signInAPI } from "../../redux/actions"
import './Login.scss'

const Login = () => {
  const data = useSelector(state => state.userState)
  const dispatch = useDispatch()
  const { user } = data

  const signInHandler = () => {
    dispatch(signInAPI())
  }

  return (
    <div className="container">
      {user !== null && <Navigate to='/' />}
      <nav className="container__nav">
        <Link to="/home">
          <img src="/assets/icons/lofi-logo.gif" alt="" />
        </Link>
        <div className="nav-menu">
          <a 
            target="_blank" 
            href="https://www.linkedin.com/in/khaituonq" 
          >
            <i className="fab fa-linkedin"></i>
            <span>Linkedin</span>
          </a>
          <a 
            target="_blank" 
            href="https://github.com/khaituonq" 
          >
            <i className="fab fa-github"></i>
            <span>Github</span>
          </a>
        </div>
      </nav>
      <section className="container__section">
        <h1>Welcome to the auto generate music.</h1>
        <h1>Login to explore the feature</h1>
        <div className="form">
          <div className="icon" onClick={signInHandler}>
            <img src="/assets/icons/google.svg" alt="" />
            Sign in with Google
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login