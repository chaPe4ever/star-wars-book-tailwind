import Card from '../Cards/Card';
import { cn } from '../../utils/utils';
import PilotCardContent from './PilotCardContent';
import Button from '../Buttons/Button';

const Pilots = ({
  className,
  pilots,
  handleAddPilotToFavoritesClick,
  togglePilotId,
  handlePilotCardToggle,
}) => {
  return (
    <section className={cn(className)}>
      {pilots.map((pilot) => (
        <Card
          key={pilot.name}
          isCursorPonted={false}
          handleToggle={(e) => handlePilotCardToggle(e, pilot.id)}
          isToggled={togglePilotId === pilot.name}
        >
          <PilotCardContent
            pilot={pilot}
            isContentVisible={togglePilotId === pilot.id}
          >
            <Button
              className={'mt-3 w-full'}
              text={'Add to favorites'}
              onClick={() => handleAddPilotToFavoritesClick(pilot)}
            />
          </PilotCardContent>
        </Card>
      ))}
    </section>
  );
};

export default Pilots;
