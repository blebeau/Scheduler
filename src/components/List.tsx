import { useState } from "react";
import ListTile from "./ListTile";

interface ListInterface {
  name: string;
}

const List = ({ name }: ListInterface) => {
  const [data, setData] = useState<ListInterface[]>([]);
  return (
    <div>
      {data.length > 0 ? (
        data.map((item: any) => (
          <div>
            <ListTile name={item.name} />
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
