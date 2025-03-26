import { useState } from "react";
import ListTile from "./ListTile";
import "../styles/List.css";
import { nextLocation } from "../TypesAndInterfaces/nextLocation";
import { StaffInterface } from "../TypesAndInterfaces/staffInterface";

const List = ({
  name,
  role,
  currentLocation,
  nextLocations,
}: StaffInterface) => {
  const [data, setData] = useState<StaffInterface[]>([
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
        data.map((item: StaffInterface) => (
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
