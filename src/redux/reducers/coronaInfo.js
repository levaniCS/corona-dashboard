import { GET_ALL_DATA } from '../actions/coronaInfo';

const initialState = {
  allData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        allData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
