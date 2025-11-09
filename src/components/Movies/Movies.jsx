import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import MovieCardContent from './MovieCardContent';

const Movies = ({
  className,
  movies,
  handleMovieCardClick,
  selectedMovieId,
  loadingMovieId,
  handleMovieCardToggle,
  toggledMovieId,
}) => {
  return (
    <section className={cn(className)}>
      {!movies ? (
        <div className="animate-spin"></div>
      ) : (
        movies.map((movie) => (
          <Card
            key={movie.id}
            onClick={() => handleMovieCardClick(movie)}
            isSelected={selectedMovieId === movie.id}
            isLoading={loadingMovieId === movie.id}
            handleToggle={(e) => handleMovieCardToggle(e, movie.id)}
            isToggled={toggledMovieId === movie.id}
          >
            <MovieCardContent
              movie={movie}
              isContentVisible={toggledMovieId === movie.id}
            />
          </Card>
        ))
      )}
    </section>
  );
};

export default Movies;
