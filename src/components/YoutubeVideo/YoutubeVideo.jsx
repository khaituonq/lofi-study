import { useState } from "react"
import ReactPlayer from "react-player"

import './YoutubeVideo.scss'

const YoutubeVideo = () => {
  const [youtubeLink, setYoutubeLink] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const changeYoutubeHandler = (e) => {
    setYoutubeLink(e.target.value)
  }

  const submitYoutubeHandler = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <div className="youtube">
      {submitted ? (
        <div className="player">
          <ReactPlayer 
            width={"200px"}
            height={"100px"}
            loop={true}
            controls={true}
            url={youtubeLink}
          />
          <button onClick={() => setSubmitted(false)}>Choose another video</button>
        </div>
      ): (
        <form className="input" onSubmit={submitYoutubeHandler}>
          <input value={youtubeLink} onChange={changeYoutubeHandler} placeholder="Youtube Musics URL"/>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default YoutubeVideo