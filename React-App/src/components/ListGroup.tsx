import { useState } from "react";


function ListGroup() {
  let items = ["Lilongwe", "Chitipa", "Nsanje", "dedza", "Balaka"];

  const [SelectedIndex, setSelectedIndex] =useState(-1);


  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={SelectedIndex=== index ? 'list-group-item active' : "list-group-item"}
            key={item}
            onClick={() => {setSelectedIndex (index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
