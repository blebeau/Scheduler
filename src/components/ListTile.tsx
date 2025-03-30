import { useNavigate } from "react-router";
import "../styles/ListTile.css";
import { ListTileInterface } from "../TypesAndInterfaces/ListTileInterface";
import { LocationInterface } from "../TypesAndInterfaces/LocationInterface";
import { StaffInterface } from "../TypesAndInterfaces/staffInterface";

const ListTile = ({
  id,
  name,
  role,
  currentLocation,
  nextLocations,
  assignedStaff,
}: StaffInterface & LocationInterface) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/edit", { state: { id: id } });
  };

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
      <button onClick={() => handleClick()} />
    </div>
  );
};

export default ListTile;
