// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime"
        alt="prime video"
      />
      <div className="list">
        <h1>Action Movies</h1>
        <MoviesSlider movies={moviesList} categoryId="ACTION" />
        <h1>Comedy Movies</h1>
        <MoviesSlider movies={moviesList} categoryId="COMEDY" />
      </div>
    </div>
  )
}
export default PrimeVideo
