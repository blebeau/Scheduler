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
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [
        { locationDate: "locationDate", locationName: "locationName" },
      ],
    },
    {
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [],
    },
    {
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [],
    },
    {
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [],
    },
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
