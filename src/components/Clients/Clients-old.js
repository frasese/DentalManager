import React, { useState, useEffect } from "react";
import { navigate, useLocation, Link, Location } from "@reach/router";

import { Table } from "react-bootstrap";

import ClientService from "../../services/client.service";

const Clients = (props) => {
  console.log("Clients render");
  const [items, setItems] = useState([]);
  const [itemsChecked, setItemsChecked] = useState({});

  useEffect(() => {
    console.log("loading client list");
    ClientService.getClientList().then(
      (response) => {
        setItems(response);
      },
      (error) => {
        console.log("Error loading Clients:", error);
        setItems([]);
      }
    );
  }, []);

  const handleAllCheckboxes = () => {
    console.log(itemsChecked);
  };

  const handleClick = (e, u) => {
    setItemsChecked({ ...itemsChecked, [u.id]: e.target.checked });
  };

  const doRemove = () => {
    console.log("doRemove:", itemsChecked);
    for (let i in itemsChecked) {
      console.log("i:" + i + " -> " + itemsChecked[i]);
    }
    items.map((u) => {
      if (itemsChecked[u.id]) {
        console.log("removing:", u.id);
      }
      return u;
    });
  };

  const doNew = () => {};

  if (!items.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button onClick={doRemove}>Remove</button>
      <button>
        <Link to=":new">New</Link>
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onClick={handleAllCheckboxes} />
            </th>
            <th>Name</th>
            <th>Value</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleClick(e, user)}
                  checked={itemsChecked[user.id] || false}
                />
              </td>
              <td>
                <Link to={user.id}>{user.name}</Link>
              </td>
              <td>
                {user.value} - {itemsChecked[user.id] || "false"}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Clients;
