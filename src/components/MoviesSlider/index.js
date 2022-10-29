// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies, categoryId} = props
  const filter1 = movies.filter(each => each.categoryId === categoryId)

  return (
    <div>
      <Slider>
        {filter1.map(each => (
          <MovieItem item={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
