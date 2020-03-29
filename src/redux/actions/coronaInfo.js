import axios from 'axios';

export const GET_ALL_DATA = 'GET_ALL_DATA';

const getAllSuccess = (data) => {
  return {
    type: GET_ALL_DATA,
    payload: data
  };
};

export const getAllData = () => {
  return (dispatch) => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => dispatch(getAllSuccess(response.data.Countries)))
      .catch((error) => console.log(error));
  };
};
