import React, { useState, useEffect } from "react";
import { navigate, useLocation, Link, Location } from "@reach/router";

import ClientService from "../../services/client.service";
import model from "../../models/Client";

function DynamicTable({ model, items, setItems, handleSubmit, submitText }) {
  const [itemsChecked, setItemsChecked] = useState({});
  const handleAllCheckboxes = (e) => {
    setItemsChecked(
      items.reduce((ret, i) => {
        return { ...ret, [i.id]: e.target.checked };
      }, {})
    );
  };

  const handleClick = (e, u) => {
    setItemsChecked({ ...itemsChecked, [u.id]: e.target.checked });
  };

  const renderHeaderColumns = (
    <>
      {Object.keys(model).map((p) => {
        if (Object.values(model[p]).length >= 1) {
          return <th>{model[p].text}</th>;
        }
        return null;
      })}
    </>
  );
  const renderRowColumns = (item) => {
    return (
      <>
        <td>
          <input
            type="checkbox"
            onChange={(e) => handleClick(e, item)}
            checked={itemsChecked[item.id] || false}
          />
        </td>
        {Object.keys(model).map((p) => {
          console.log("P:", p);
          if (Object.values(model[p]).length >= 1) {
            return (
              <td>
                {item[p]} - {(itemsChecked[item.id] && "true") || "false"}
              </td>
            );
          }
          return null;
        })}
        <td>
          <i class="bi bi-pencil-square"></i>

          <Link to={item.id}>{item.name}</Link>
        </td>
      </>
    );
  };

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>
            <input type="checkbox" onClick={handleAllCheckboxes} />
          </th>
          {renderHeaderColumns}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>{renderRowColumns(item)}</tr>
        ))}
      </tbody>
    </table>
  );
}

const Clients = (props) => {
  const [items, setItems] = useState([]);
  //const [itemsChecked, setItemsChecked] = useState({});

  useEffect(() => {
    console.log("loading client list");
    ClientService.getClientList()
      .then(
        (response) => {
          setItems(response);
        },
        (error) => {
          console.log("Error loading Clients:", error);
          setItems([]);
        }
      )
      .then(() => console.log("items:", items));
  }, []);

  /*const handleAllCheckboxes = () => {
    console.log(itemsChecked);
  };

  const handleClick = (e, u) => {
    setItemsChecked({ ...itemsChecked, [u.id]: e.target.checked });
  };*/

  const doRemove = () => {
    /*console.log("doRemove:", itemsChecked);
    for (let i in itemsChecked) {
      console.log("i:" + i + " -> " + itemsChecked[i]);
    }
    items.map((u) => {
      if (itemsChecked[u.id]) {
        console.log("removing:", u.id);
      }
      return u;
    });*/
  };

  const doNew = () => {};

  if (!items.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button className="btn btn-primary" onClick={doRemove}>
        Remove
      </button>

      <Link className="btn btn-primary" to=":new">
        New
      </Link>

      <DynamicTable model={model} items={items} setItems={setItems} />
    </>
  );
};

export default Clients;
