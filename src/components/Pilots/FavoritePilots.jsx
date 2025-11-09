import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import PilotCardContent from './PilotCardContent';
import Button from '../Buttons/Button';

const FavoritePilots = ({
  className,
  favoritePilots,
  handleRemovePilotFromFavoritesClick,
}) => {
  return (
    <section className={cn(className)}>
      {favoritePilots.map((pilot) => (
        <Card
          key={pilot.id}
          isToggled={true}
          isCursorPonted={false}
          isToggleIconVisible={false}
        >
          <PilotCardContent pilot={pilot} isContentVisible={true}>
            <Button
              className={'mt-3 w-full bg-rose-400 hover:bg-rose-300'}
              text={'Remove'}
              onClick={() => handleRemovePilotFromFavoritesClick(pilot)}
            />
          </PilotCardContent>
        </Card>
      ))}
    </section>
  );
};

export default FavoritePilots;
