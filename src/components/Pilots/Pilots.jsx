import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import PilotCardContent from './PilotCardContent';

const Pilots = ({ className, pilots, handleAddPilotToFavoritesClick }) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2">Pilots</h1>
      {pilots.map((pilot) => (
        <Card key={pilot.name}>
          <PilotCardContent
            pilot={pilot}
            handleFavoritesBtnClick={handleAddPilotToFavoritesClick}
            btnText={'Add to favorites'}
          />
        </Card>
      ))}
    </section>
  );
};

export default Pilots;
