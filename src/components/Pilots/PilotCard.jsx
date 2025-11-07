import { cn } from '../../utils/utils';

const PilotCard = ({
  className,
  pilot,
  isBtnVisible = true,
  handleFavoritesBtnClick,
  btnText,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'my-4 flex flex-col gap-2 rounded-md border-2 border-solid border-cyan-400 bg-cyan-50 p-2 md:cursor-pointer',

        className
      )}
      {...rest}
    >
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
      {isBtnVisible && (
        <button
          onClick={() => handleFavoritesBtnClick(pilot)}
          className="cursor-pointer rounded-md bg-emerald-300 text-white hover:bg-emerald-200"
        >
          {btnText}
        </button>
      )}
    </div>
  );
};

export default PilotCard;
