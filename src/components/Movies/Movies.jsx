import { cn } from '../../utils/utils';
import MovieCard from './MovieCard';

const Movies = ({
  className,
  movies,
  handleMovieCardClick,
  selectedMovieId,
  loadingMovieId,
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
            isLoading={loadingMovieId === movie.episodeId}
          />
        ))
      )}
    </section>
  );
};

export default Movies;
