const PilotCardContent = ({ pilot, isContentVisible, children, ...rest }) => {
  return (
    <div {...rest}>
      <h2 className="mb-1 font-extrabold">{pilot.name}</h2>
      {isContentVisible && (
        <div className="gap-1">
          <p className="font-light">
            <span className="font-medium">Height: </span>
            {pilot.height}
          </p>
          <p className="font-light">
            <span className="font-medium">Mass: </span>
            {pilot.mass}
          </p>
          <p>
            <span className="font-medium">Birth Year: </span>
            {pilot.birthYear}
          </p>
          <p>
            <span className="font-medium">Gender: </span>
            {pilot.gender}
          </p>
          {children}
        </div>
      )}
    </div>
  );
};

export default PilotCardContent;
