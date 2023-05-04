import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import DarkLightSwitch from '../DarkLightSwitch/DarkLightSwitch'
import { signOutAPI, changeDayNight } from '../../redux/actions'
import './Header.scss'

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const data = useSelector((state) => state.userState)
  const dayNight = useSelector((state) => state.modeState)
  const dispatch =  useDispatch()

  const { user } = data
  const { mode } = dayNight

  const signOutHandler = () => {
    dispatch(signOutAPI())
  }

  const dayNightHandler = () => {
    dispatch(changeDayNight(mode))
  }

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true)
      const e = document.documentElement
      e.requestFullscreen()
    } else {
      setFullscreen(false)
      if (!document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        // Safari
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        // IE11
        document.msExitFullscreen()
      }
    }
  }

  return (
    <nav className="wrap">
      <Link to="/">
        <img src="/assets/icons/lofi-logo.gif" alt="" />
      </Link>

      <div className="nav-menu">
        <Link to="/about">
          <i className="fas fa-info"></i>
          <span>How it works</span>
        </Link>
        <a href="https://github.com/khaituonq" target="_blank" rel="noreferrer">
          <i className="fab fa-github">
            <span>GitHub</span>
          </i>
        </a>
      </div>

      <div className="nav-menu">
        <div onClick={dayNightHandler}>
          <DarkLightSwitch theme={mode}/>
        </div>

        <button className="fullscreen-btn" onClick={fullscreenHandler}>
          <i className="fas fa-expand fa-lg"></i>
        </button>
      </div>

      <div className="nav-menu">
        <Link to="#">
          {user && user.photoURL && <img src={user.photoURL} alt=""/>}
          {user && user.displayName && <span>{user.displayName}</span>}
        </Link>
        {user? (
          <Link to="/" onClick={signOutHandler}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Log Out</span>
          </Link>
        ): (
          <Link to="/login">
            <i className="fas fa-sign-in-alt"></i>
            <span>Log In</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header