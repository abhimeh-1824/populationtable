import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editData,getPopulationAction} from "../redux/action";
export const Edit = ({data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState(0);

  const dispatch = useDispatch();
  const handleChange = (e) => {}
  
  return (
    <div className="Edit-container">
      <Button
        style={{ background: "none", border: "none", color: "#777" }}
        onClick={handleShow}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT-DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleChange(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Popultaion</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Population"
                onChange={(e) => {
                  setPopulation(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              style={{ color: "black" }}
              type="submit"

              onClick={(e)=>{
                  console.log(e)
                e.preventDefault(); 
                var payload = {
                    country: country===""?data.country:country,
                    city: city===""?data.city:city,
                    population: population===0?data.population:population,
                  };
                  dispatch(editData(data.id, payload)).then(dispatch(getPopulationAction())).then(dispatch(getPopulationAction()));
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};


