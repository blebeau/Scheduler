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
      <div className="list_tile_sections">
        <p>{name}</p>
        <p>{role}</p>
      </div>
      <div className="list_tile_sections">
        <p>{currentLocation}</p>
      </div>

      <div className="list_tile_sections">
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
