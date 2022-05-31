import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import {createPopulationData} from"../../redux/action"
import "./city.css"
const City = () => {
  const [country,setCountry] = useState("")
  const [city,setCity] = useState("")
  const [population,setPopulation] = useState(0)
  const dispatch = useDispatch()
  const handleChange = (e) =>{
    e.preventDefault()
    var payload = {
      country:country,
      city:city,
      population:population
    }
    dispatch(createPopulationData(payload))
  }
  // .then((getPopulationAction)=>{
    // dispatch()
  // })
  return (
    <div className="city-form">
      <Form onSubmit={(e)=>handleChange(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Enter country" onChange={(e)=>{setCountry(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" onChange={(e)=>{setCity(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Popultaion</Form.Label>
          <Form.Control type="number" placeholder="Enter Population" onChange={(e)=>{setPopulation(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" style={{color:"black"}} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default City;
