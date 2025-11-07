import { cn } from '../../utils/utils';
import StarshipCard from './StarshipCard';

const Starships = ({
  className,
  starships,
  handleStarshipCardClick,
  selectedStarshipId,
  isLoading,
}) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2">Starships</h1>
      {starships.map((starship) => (
        <StarshipCard
          key={starship.name}
          starship={starship}
          onClick={() => handleStarshipCardClick(starship)}
          // There is no id in starship model so decided to use the name instead
          isSelected={selectedStarshipId === starship.name}
          isLoading={isLoading}
        />
      ))}
    </section>
  );
};

export default Starships;
