import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import MovieContent from './MovieContent';

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
          <Card
            key={movie.episodeId}
            onClick={() => handleMovieCardClick(movie)}
            // There is no id in movie model so decided to use the episodeId instead
            isSelected={selectedMovieId === movie.episodeId}
            isLoading={loadingMovieId === movie.episodeId}
          >
            <MovieContent movie={movie} />
          </Card>
        ))
      )}
    </section>
  );
};

export default Movies;
