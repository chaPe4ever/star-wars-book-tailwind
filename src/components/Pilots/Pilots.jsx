import { cn } from '../../utils/utils';
import PilotCard from './PilotCard';

const Pilots = ({
  className,
  pilots,
  handleStarshipCardClick,
  handleAddPilotToFavoritesClick,
}) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2">Pilots</h1>
      {pilots.map((pilot) => (
        <PilotCard
          key={pilot.name}
          pilot={pilot}
          onClick={() => handleStarshipCardClick(pilot)}
          handleFavoritesBtnClick={handleAddPilotToFavoritesClick}
          btnText={'Add to favorites'}
        />
      ))}
    </section>
  );
};

export default Pilots;
