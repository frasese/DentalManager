import React, { useState, useEffect } from "react";

import ClientService from "../../services/client.service";
import model from "../../models/Client";

import DynamicTable from "../Common/DynamicTable";

const Clients = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
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

  const doRemove = (ids) => {
    console.log("doRemove:", ids);
  };

  if (!items.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DynamicTable
        model={model}
        items={items}
        setItems={setItems}
        doRemove={doRemove}
      />
    </>
  );
};

export default Clients;
