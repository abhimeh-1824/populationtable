// import axios from "axios";

export const GET_POPULATION_DATA = "GET_POPULATION_DATA";
export const GET_POPULATION_SUCCESS = "GET_POPULATION_SUCCESS";
export const GET_POPULATION_FAIL = "GET_POPULATION_FAIL";

export const CREATE_POPULATION_FAIL = "GET_POPULATION_FAIL";
export const SORT = "SORT"

export const GET_COUNTRY_DATA = "GET_COUNTRY_DATA";
export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS";
export const GET_COUNTRY_FAIL ="GET_COUNTRY_FAIL"
export const FILLTER = "FILLTER"

export const getPopulationAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POPULATION_DATA });
    var data = await fetch("http://localhost:8085/populationData");
    data = await data.json();
    //    var {data} =  await axios.get("http://localhost:8085/populationData")
    //    console.log("data",data)
    dispatch({
      type: GET_POPULATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POPULATION_FAIL,
      payload: error.message,
    });
  }
};

export const createPopulationData = (payload) => async (dispatch) => {
  try {
    await fetch("http://localhost:8085/populationData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
  } catch (error) {
    dispatch({
      type: CREATE_POPULATION_FAIL,
      payload: error.message,
    });
  }
};
// export const deleteData = (id) =>{
//     return {
//         type:DELETE,
//         payload : id
//     }
// }

export const deleteData = (id) => async(dispatch)=>{
    await fetch(`http://localhost:8085/populationData/${id}`,{
        method:"delete"
    }).then((e)=>console.log(e)).catch(error=>console.log(error))
}

export const editData = (id,payload) => async(dispatch)=>{
    console.log(payload,"payload data aara h")
    await fetch(`http://localhost:8085/populationData/${id}`,{
        method:"put",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then((e)=>console.log(e)).catch(error=>console.log(error))
}

export const Sortby = (by) =>
{
    console.log("by",by)
    return{
        type:SORT,
        payload:by
    }
}

export const fillter = (city) =>
{
    console.log(city,"city")
    return{
        type:FILLTER,
        payload:city
    }
}

export const getcountrynAction = () => async (dispatch) => {
    try {
      dispatch({ type: GET_COUNTRY_DATA });
      var data = await fetch("http://localhost:8085/country");
      data = await data.json();
      dispatch({
        type: GET_COUNTRY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_COUNTRY_FAIL,
        payload: error.message,
      });
    }
  };