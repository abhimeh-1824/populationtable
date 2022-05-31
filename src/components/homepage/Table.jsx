import React, { useEffect } from "react";
import { Table,Button} from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import {getPopulationAction,deleteData} from "../../redux/action"
import {Edit} from "../Edit"
const HomeTable = () => {

  const dispatch = useDispatch()
  const {populationData,reload} = useSelector((state)=>state.populationReducer)
  // console.log(populationData,reload,"popution")
  useEffect(()=>{
    dispatch(getPopulationAction())
  },[dispatch])
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>City Name</th>
            <th>Popultaion</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            populationData.map((data)=>(
            <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.country}</td>
            <td>{data.city}</td>
            <td>{data.population}</td>
            <td><Edit data = {data}/></td>
            <td><Button variant="light" onClick={()=>{
              dispatch(deleteData(data.id)).then(dispatch(getPopulationAction())).then(dispatch(getPopulationAction()))
            }}>Delete</Button></td>
          </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
};

export default HomeTable;
