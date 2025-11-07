import Loader from '../Loaders/Loder';

const StarshipCardContent = ({ starship, ...rest }) => {
  return (
    <div {...rest}>
      <h2 className="font-extrabold">{starship.name}</h2>
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
  );
};

export default StarshipCardContent;
