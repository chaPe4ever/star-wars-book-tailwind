import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import PilotCardContent from './PilotCardContent';

const FavoritePilots = ({
  className,
  favoritePilots,
  handleRemovePilotFromFavoritesClick,
}) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2">Favorite Pilots</h1>
      {favoritePilots.map((pilot) => (
        <Card
          key={pilot.name}
          isToggled={true}
          isCursorPonted={false}
          isToggleIconVisible={false}
        >
          <PilotCardContent
            pilot={pilot}
            handlePilotCardBtnClick={handleRemovePilotFromFavoritesClick}
            btnText={'Remove'}
            isContentVisible={true}
          />
        </Card>
      ))}
    </section>
  );
};

export default FavoritePilots;
