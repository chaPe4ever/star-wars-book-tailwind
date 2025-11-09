const MovieCardContent = ({ movie, isContentVisible, ...rest }) => {
  return (
    <div {...rest}>
      <h2 className="mb-1 font-extrabold">{movie.title}</h2>
      {isContentVisible && (
        <div className="flex flex-col items-start gap-1 text-left">
          <p className="font-light">
            <span className="font-medium">Description: </span>
            {movie.openingCrawl}
          </p>
          <p className="font-light">
            <span className="font-medium">Episode id: </span>
            {movie.episodeId}
          </p>
          <p>
            <span className="font-medium">Release date: </span>
            {movie.releaseDate}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCardContent;
