import "../styles/ListTile.css";

type nextLocation = {
  locationName: string;
  locationDate: string;
};
interface ListTileInterface {
  name: string;
  role: string;
  currentLocation: string;
  nextLocations: nextLocation[];
}

const ListTile = ({
  name,
  role,
  currentLocation,
  nextLocations,
}: ListTileInterface) => {
  return (
    <div className="list_tile">
      <p>{name}</p>
      <p>{role}</p>
      <p>{currentLocation}</p>
      <div>
        {nextLocations.length > 0 ? (
          nextLocations.map((location) => (
            <p>
              {location.locationName} - {location.locationDate}
            </p>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ListTile;
