import { useState } from "react";
import ListTile from "./ListTile";
import { LocationInterface } from "../TypesAndInterfaces/LocationInterface";

const Locations = ({ name, assignedStaff }: LocationInterface) => {
  const [data, setData] = useState<LocationInterface[]>([
    {
      name: "name",
      assignedStaff: ["name1", "name2"],
    },
  ]);
  return (
    <div className="list">
      {data.length > 0 ? (
        data.map((item: LocationInterface) => (
          <div>
            <ListTile name={item.name} assignedStaff={item.assignedStaff} />
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

export default Locations;
