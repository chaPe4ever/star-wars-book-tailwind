const MovieContent = ({ movie, ...rest }) => {
  return (
    <div {...rest}>
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

export default MovieContent;
