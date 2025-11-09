import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import StarshipCardContent from './StarshipCardContent';

const Starships = ({
  className,
  starships,
  handleStarshipCardClick,
  selectedStarshipId,
  loadingStarshipId,
  handleStarshipCardToggle,
  toggledStarshipId,
}) => {
  return (
    <section className={cn(className)}>
      {starships.map((starship) => (
        <Card
          key={starship.id}
          onClick={() => handleStarshipCardClick(starship)}
          isSelected={selectedStarshipId === starship.id}
          isLoading={loadingStarshipId === starship.id}
          handleToggle={(e) => handleStarshipCardToggle(e, starship.id)}
          isToggled={toggledStarshipId === starship.id}
        >
          <StarshipCardContent
            starship={starship}
            isContentVisible={toggledStarshipId === starship.id}
          />
        </Card>
      ))}
    </section>
  );
};

export default Starships;
