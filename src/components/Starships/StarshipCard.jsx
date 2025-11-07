import { useEffect, useState } from 'react';
import { cn } from '../../utils/utils';
import Loader from '../Loder';

const StarshipCard = ({
  className,
  starship,
  isSelected,
  isLoading,
  onClick,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsClicked(false);
    }
  }, [isLoading]);
  return (
    <div
      className={cn(
        'relative my-4 flex flex-col gap-2 rounded-md border-2 border-solid border-cyan-400 bg-cyan-50 p-2 md:cursor-pointer',
        isSelected
          ? 'border-amber-400 bg-amber-50'
          : 'border-cyan-400 bg-cyan-50 hover:bg-cyan-100',
        className
      )}
      onClick={() => {
        setIsClicked(true);
        onClick();
      }}
      {...rest}
    >
      {isLoading && isClicked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/70">
          <Loader />
        </div>
      )}
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

export default StarshipCard;
