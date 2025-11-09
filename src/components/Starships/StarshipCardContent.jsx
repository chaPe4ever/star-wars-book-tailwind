const StarshipCardContent = ({ starship, isContentVisible, ...rest }) => {
  return (
    <div {...rest}>
      <h2 className="font-extrabold">{starship.name}</h2>

      {isContentVisible && (
        <div>
          <p className="font-light">
            <span className="font-medium">Model: </span>
            {starship.model}
          </p>
          <p className="font-light">
            <span className="font-medium">Max max atmosphering speed: </span>
            {starship.maxAtmospheringSpeed}
          </p>
          <p>
            <span className="font-medium">Starship class: </span>
            {starship.starshipClass}
          </p>
        </div>
      )}
    </div>
  );
};

export default StarshipCardContent;
