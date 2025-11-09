import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import PilotCardContent from './PilotCardContent';

const Pilots = ({
  className,
  pilots,
  handleAddPilotToFavoritesClick,
  togglePilotId,
  handlePilotCardToggle,
}) => {
  return (
    <section className={cn(className)}>
      <h1 className="sticky top-0 bg-white pb-2">Pilots</h1>
      {pilots.map((pilot) => (
        <Card
          key={pilot.name}
          isCursorPonted={false}
          handleToggle={(e) => handlePilotCardToggle(e, pilot.name)}
          isToggled={togglePilotId === pilot.name}
        >
          <PilotCardContent
            pilot={pilot}
            handlePilotCardBtnClick={handleAddPilotToFavoritesClick}
            btnText={'Add to favorites'}
            // There is no id in movie model so decided to use the name instead
            isContentVisible={togglePilotId === pilot.name}
          />
        </Card>
      ))}
    </section>
  );
};

export default Pilots;
