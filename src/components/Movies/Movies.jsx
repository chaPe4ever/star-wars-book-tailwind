import { cn } from '../../utils/utils';
import MovieCard from './MovieCard';

const Movies = ({
  className,
  movies,
  handleMovieCardClick,
  selectedMovieId,
  isLoading,
}) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2 bg-blend-darken">Movies</h1>
      {!movies ? (
        <div className="animate-spin"></div>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.episodeId}
            movie={movie}
            onClick={() => handleMovieCardClick(movie)}
            isSelected={selectedMovieId === movie.episodeId}
            isLoading={isLoading}
          />
        ))
      )}
    </section>
  );
};

export default Movies;
