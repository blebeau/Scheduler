import { useState } from "react";
import ListTile from "./ListTile";
import "../styles/List.css";

interface ListInterface {
  name: string;
  role: string;
  currentLocation: string;
}

const List = ({ name }: ListInterface) => {
  const [data, setData] = useState<ListInterface[]>([]);

  return (
    <div className="list">
      {data.length > 0 ? (
        data.map((item: ListInterface) => (
          <div>
            <ListTile
              name={item.name}
              role={item.role}
              currentLocation={item.currentLocation}
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
