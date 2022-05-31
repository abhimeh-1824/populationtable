import React, { useEffect } from "react";
import { Navbar, Nav, Container,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import {Sortby,fillter,getcountrynAction,getPopulationAction} from "../../redux/action"
const HomeNavbar = () => {
  const dispatch = useDispatch()
  const {countryData} = useSelector((state)=>state.populationReducer)
  // console.log(countryData)

  useEffect(()=>{
    dispatch(getcountrynAction())
  },[dispatch])
  const navData = [
    {
      Name: "CITY",
      to: "/city",
    },
    {
      Name: "COUNTRY",
      to: "/country",
    },
  ];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="containder">
          <Link to="/">POPULATION-DATA</Link>
          <Nav className="me-auto">
            {navData.map((e) => (
              <Link to={e.to} key={e.Name}>
                {e.Name}
              </Link>
            ))}
          </Nav>
          <Form.Select size="sm" style={{width:"9rem"}} onChange={(e)=>(dispatch(getPopulationAction())).then(()=>dispatch(fillter(e.target.value)))}>
          <option>Sort By city</option>
         {
           countryData.map((e)=>(
            <option value={e} key={e}>{e}</option>
           ))
         }
          </Form.Select>
          <Form.Select size="sm" style={{width:"8rem"}} onChange={(e)=>(dispatch(getPopulationAction())).then(()=>dispatch(Sortby(e.target.value)))}>
          <option value="#">Sort By Population</option>
          <option value="as">low-to-high</option>
          <option value="ds">high-to-low</option>
          </Form.Select>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
