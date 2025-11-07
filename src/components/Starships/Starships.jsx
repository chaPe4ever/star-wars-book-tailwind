import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import StarshipCardContent from './StarshipCardContent';

const Starships = ({
  className,
  starships,
  handleStarshipCardClick,
  selectedStarshipId,
  loadingStarshipId,
}) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2">Starships</h1>
      {starships.map((starship) => (
        <Card
          key={starship.name}
          onClick={() => handleStarshipCardClick(starship)}
          // There is no id in starship model so decided to use the name instead
          isSelected={selectedStarshipId === starship.name}
          isLoading={loadingStarshipId === starship.name}
        >
          <StarshipCardContent starship={starship} />
        </Card>
      ))}
    </section>
  );
};

export default Starships;
