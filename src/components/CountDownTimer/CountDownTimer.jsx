import { useState } from 'react'

import TimerStyled from '../TimerStyled/TimerStyled'
import './CountDownTimer.scss'

const CountDownTimer = ({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  setTimerHandler,
  setTimerStart,
  timerStart
}) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const setTimerBtnHandler = () => {
    setTimerHandler(second, minute, hour)
    setTimerStart(true)
  }

  return (
    <div className='countdown'>
      {timerStart ? (
        <div className="countdownRunning">
          <div className="displayTime">
            <TimerStyled seconds={seconds} minutes={minutes} hours={hours}/>
          </div>
          <div className="controller">
            <button className="buttonTimer" onClick={() => setTimerHandler(0, 0, 0)}>Cancel</button>
            {isRunning ? (
              <button className="buttonTimer" onClick={pause}>Pause</button>
            ) : (
              <button className="buttonTimer" onClick={resume}>Resume</button>
            )}
          </div>
        </div>
      ) : (
        <div className="countdownNotRun">
          <div className="input">
            <input type="number" className="number-input" value={hour} onChange={(e) => setHour(e.target.value)} max={24} min={0}/>
            <span>hour</span>
            <input type="number" className="number-input" value={minute} onChange={(e) => setMinute(e.target.value)} max={60} min={0}/>
            <span>min</span>
            <input type="number" className="number-input" value={second} onChange={(e) => setSecond(e.target.value)} max={60} min={0}/>
            <span>sec</span>
          </div> 

          <button className="buttonTimer setup" onClick={setTimerBtnHandler}>Set Timer</button>
        </div>
      )}
    </div>
  )
}

export default CountDownTimer