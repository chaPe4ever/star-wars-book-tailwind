import { cn } from '../../utils/utils';
import PilotCard from './PilotCard';

const FavoritePilots = ({
  className,
  favoritePilots,
  handleRemovePilotFromFavoritesClick,
}) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2">Favorite Pilots</h1>
      {favoritePilots.map((pilot) => (
        <PilotCard
          key={pilot.name}
          pilot={pilot}
          handleFavoritesBtnClick={handleRemovePilotFromFavoritesClick}
          btnText={'Remove'}
        />
      ))}
    </section>
  );
};

export default FavoritePilots;
