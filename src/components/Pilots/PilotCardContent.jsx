import Button from '../Buttons/Button';

const PilotCardContent = ({
  pilot,
  handleFavoritesBtnClick,
  btnText,
  ...rest
}) => {
  return (
    <div {...rest}>
      <h2 className="font-extrabold">{pilot.name}</h2>
      <p className="font-light">
        <span className="font-medium">Height: </span>
        {pilot.height}
      </p>
      <p className="font-light">
        <span className="font-medium">Mass: </span>
        {pilot.mass}
      </p>
      <p>
        <span className="font-medium">Birth Year: </span>
        {pilot.birthYear}
      </p>
      <p>
        <span className="font-medium">Gender: </span>
        {pilot.gender}
      </p>
      <Button text={btnText} onClick={() => handleFavoritesBtnClick(pilot)} />
    </div>
  );
};

export default PilotCardContent;
