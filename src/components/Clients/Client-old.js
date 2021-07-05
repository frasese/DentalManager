import React, { useState, useEffect } from "react";
import { navigate, useLocation } from "@reach/router";

import ClientService from "../../services/client.service";

import { Form, Button } from "react-bootstrap";

const Client = (props) => {
  const [client, setClient] = React.useState({});
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

  const onChangeInput = (e) => {
    setClient({ ...client, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Data:", client);
    ClientService.postClient(client).then(
      (response) => {
        console.log("response:", response);
        //setClient(response.data);
      },
      (error) => {
        console.log("Error saving Client (" + props.clientId + "):", error);
      }
    );
  };

  if (props.clientId !== ":new" && !client) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>User {JSON.stringify(client, null, 2)}</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduzca nombre"
            value={client.name}
            onChange={onChangeInput}
          />
          <div>Name:{client.name}</div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduzca email"
            value={client.email}
            onChange={onChangeInput}
          />
          <div>Email:{client.email}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {submitText}
        </Button>
      </Form>
    </>
  );
};

export default Client;
