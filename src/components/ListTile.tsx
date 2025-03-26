import "../styles/ListTile.css";
import { ListTileInterface } from "../TypesAndInterfaces/ListTileInterface";
import { LocationInterface } from "../TypesAndInterfaces/LocationInterface";

const ListTile = ({
  name,
  role,
  currentLocation,
  nextLocations,
  assignedStaff,
}: ListTileInterface & LocationInterface) => {
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
        {nextLocations && nextLocations.length > 0 ? (
          nextLocations.map((location) => (
            <p>
              {location.locationName} - {location.locationDate}
            </p>
          ))
        ) : (
          <div></div>
        )}
        {assignedStaff && assignedStaff.length > 0 ? (
          assignedStaff.map((staff) => <p>{staff}</p>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ListTile;
