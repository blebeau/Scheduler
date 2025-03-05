import { useState } from "react";
import ListTile from "./ListTile";
import "../styles/List.css";

type nextLocation = {
  locationName: string;
  locationDate: string;
};
interface ListInterface {
  name: string;
  role: string;
  currentLocation: string;
  nextLocations: nextLocation[];
}

const List = ({
  name,
  role,
  currentLocation,
  nextLocations,
}: ListInterface) => {
  const [data, setData] = useState<ListInterface[]>([
    {
      name: "test",
      role: "test",
      currentLocation: "test",
      nextLocations: [{ locationDate: "date", locationName: "name" }],
    },
    { name: "test", role: "test", currentLocation: "test", nextLocations: [] },
    { name: "test", role: "test", currentLocation: "test", nextLocations: [] },
  ]);

  return (
    <div className="list">
      {data.length > 0 ? (
        data.map((item: ListInterface) => (
          <div>
            <ListTile
              name={item.name}
              role={item.role}
              currentLocation={item.currentLocation}
              nextLocations={item.nextLocations}
            />
          </div>
        ))
      ) : (
        <div>
          <p>No Results</p>
        </div>
      )}
    </div>
  );
};

export default List;
