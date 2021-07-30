import React, { useState, useEffect } from "react";

import ClientService from "../../services/client.service";
import model from "../../models/Client";
import oldmodel from "../../models/Client-old";

import DynamicForm from "../Common/DynamicForm";
import OldDynamicForm from "../Common/DynamicForm-old";

const Client = (props) => {
  const [client, setClient] = useState({});
  const submitText = props.clientId === ":new" ? "Crear" : "Guardar";

  useEffect(() => {
    if (props.clientId !== ":new") {
      ClientService.getClient(props.clientId).then(
        (response) => {
          setClient(response);
        },
        (error) => {
          console.log("Error loading Client (" + props.clientId + "):", error);
        }
      );
    }
  }, [props.clientId]);

  const handleSubmit = (values) => {
    //event.preventDefault();

    console.log("Data:", client);
    ClientService.postClient(client).then(
      (response) => {
        console.log("response:", response);
        //setClient(response.data);
      },
      (error) => {
        console.log(`Error saving Client (${props.clientId}):`, error);
      }
    );
  };

  if (props.clientId !== ":new" && !client) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DynamicForm
        model={model}
        item={client}
        setItem={setClient}
        handleSubmit={handleSubmit}
        submitText={submitText}
      />
      <hr />
      {/*
      <OldDynamicForm
        model={oldmodel}
        item={client}
        setItem={setClient}
        handleSubmit={handleSubmit}
        submitText={submitText}
      />
      */}
    </>
  );
};

export default Client;
