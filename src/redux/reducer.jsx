import {
  GET_POPULATION_DATA,
  GET_POPULATION_SUCCESS,
  GET_POPULATION_FAIL,
  GET_COUNTRY_DATA,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
  CREATE_POPULATION_FAIL,
  SORT,
  FILLTER,
} from "./action";

const intialState = {
  populationData: [],
  countryData:[],
  error: "",
  reload: false,
};
export const populationReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_POPULATION_DATA:
      return {
        ...state,
        reload: true,
        populationData: [],
      };
    case GET_POPULATION_SUCCESS:
      return {
        ...state,
        reload: false,
        populationData: action.payload,
      };
    case GET_POPULATION_FAIL:
      return {
        ...state,
        error: action.payload,
        reload: false,
      };
    case CREATE_POPULATION_FAIL:
      return {
        ...state,
        error: action.payload,
        reload: false,
      };

    case GET_COUNTRY_DATA:
      return {
        ...state,
        reload: true,
        countryData: [],
      };
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        reload: false,
        countryData: action.payload,
      };
    case GET_COUNTRY_FAIL:
      return {
        ...state,
        error: action.payload,
        reload: false,
      };
 
    case SORT:
      if (action.payload == "as") {
        return {
          ...state,
          populationData: [...state.populationData].sort(
            (a, b) => a.population - b.population
          ),
        };
      } else if (action.payload == "ds") {
        return {
          ...state,
          populationData: [...state.populationData].sort(
            (a, b) => b.population - a.population
          ),
        };
      } else {
        return { ...state, populationData: [...state.populationData] };
      }


    case FILLTER:
        console.log("filtter")
        return{
            
            ...state,populationData: [...state.populationData].filter(
                (e) => e.country === action.payload
              ),
        }

    default:
      return state;
  }
};
