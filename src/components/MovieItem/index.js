// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  console.log(videoUrl)
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="popImg" />}
      >
        {close => (
          <>
            <div className="pop">
              <button
                testid="closeButton"
                className="close"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <div>
                <ReactPlayer url={videoUrl} />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
