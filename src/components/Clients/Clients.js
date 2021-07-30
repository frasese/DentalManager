import React, { useState, useEffect } from "react";

import ClientService from "../../services/client.service";
import model from "../../models/Client";
import oldmodel from "../../models/Client-old";

import DynamicTable from "../Common/DynamicTable";
import OldDynamicTable from "../Common/DynamicTable-old";

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

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const doRemove = async (ids) => {
    console.log("start doRemove:", ids);
    await sleep(5000);
    console.log("removed!!:", ids);
  };

  if (!items.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DynamicTable model={model} items={items} doRemove={doRemove} />
      <br />
      <hr />
      <OldDynamicTable model={oldmodel} items={items} doRemove={doRemove} />
    </>
  );
};

export default Clients;
