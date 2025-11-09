const MovieContent = ({ movie, isContentVisible, ...rest }) => {
  return (
    <div {...rest}>
      <h2 className="font-extrabold">{movie.title}</h2>
      {isContentVisible && (
        <div>
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
      )}
    </div>
  );
};

export default MovieContent;
