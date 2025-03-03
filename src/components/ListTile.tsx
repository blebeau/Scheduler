import "../styles/ListTile.css";

interface ListTileInterface {
  name: string;
  role: string;
  currentLocation: string;
}

const ListTile = ({ name, role, currentLocation }: ListTileInterface) => {
  return (
    <div className="list_tile">
      <p>{name}</p>
      <p>{role}</p>
      <p>{currentLocation}</p>
    </div>
  );
};

export default ListTile;
