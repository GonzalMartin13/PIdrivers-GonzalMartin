

const initialState = {
    counter: 1,
    drivers: [],
    usuario:[], 
    filterdrivers:[],
    driversCopia:[],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          counter: state.counter - 1,
        };
      case "setCounter":
        return {
          ...state,
          counter: 0, 
        }
        case "ALL_DRIVERS":
          return{
            ...state,
            drivers: action.payload,
            driversCopia: action.payload,
          }
        case "USER":
          return{
            ...state,
            usuario: action.payload,
          }
        case "GET_BY_NAME":
          return{
            ...state,
            filterdrivers: action.payload,
          }
        case "ORDER_AZ":
          return {
            ...state,
            drivers: action.payload,
          };
        case "API":
          return{
            ...state,
            drivers:action.payload
          }
        
        default:
        return state;
    }
  };
  
  export default rootReducer;
