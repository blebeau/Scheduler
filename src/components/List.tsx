import { useState } from "react";
import ListTile from "./ListTile";
import "../styles/List.css";
import { StaffInterface } from "../TypesAndInterfaces/staffInterface";

const List = ({
  name,
  role,
  currentLocation,
  nextLocations,
}: StaffInterface) => {
  const [data, setData] = useState<StaffInterface[]>([
    {
      id: "1",
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [
        { locationDate: "locationDate", locationName: "locationName" },
      ],
    },
    {
      id: "2",
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [],
    },
    {
      id: "3",
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [],
    },
    {
      id: "4",
      name: "name",
      role: "role",
      currentLocation: "current",
      nextLocations: [],
    },
  ]);

  return (
    <div className="list">
      {data.length > 0 ? (
        data.map((item: StaffInterface) => (
          <div>
            <ListTile
              id={item.id}
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
