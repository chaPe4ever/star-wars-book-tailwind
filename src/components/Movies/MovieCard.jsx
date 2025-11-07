import { cn } from '../../utils/utils';
import Loader from '../Loder';

const MovieCard = ({ className, movie, isSelected, isLoading, ...rest }) => {
  return (
    <div
      className={cn(
        'relative my-4 flex flex-col gap-2 rounded-md border-2 border-solid border-cyan-400 bg-cyan-50 p-2 md:cursor-pointer',
        isSelected
          ? 'border-amber-300 bg-amber-50'
          : 'border-cyan-300 bg-cyan-50 hover:bg-cyan-100',
        className
      )}
      {...rest}
    >
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/70">
          <Loader />
        </div>
      )}

      <h2 className="font-extrabold">{movie.title}</h2>
      <p className="font-light">{movie.openingCrawl}</p>
      <p className="font-light">
        <span className="font-medium">Episode id: </span>
        {movie.episodeId}
      </p>
      <p>
        <span className="font-medium">Release date: </span>
        {movie.releaseDate}
      </p>
    </div>
  );
};

export default MovieCard;
