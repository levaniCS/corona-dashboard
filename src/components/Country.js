import React from 'react';

const Country = (props) => {
  return (
    <div className='country'>
      <h3 className='country__name'>{props.data.Country}</h3>
      <div className='country__info'>
        <p className='info info--totalConfirmed'>
          Total Confirmed: {props.data.TotalConfirmed}
        </p>
        <p className='info info--newConfirmed'>
          New Confirmed: {props.data.NewConfirmed}
        </p>
        <p className='info info--totalDeaths'>
          Total Deaths: {props.data.TotalDeaths}
        </p>
        <p className='info info--newDeaths'>
          New Deaths: {props.data.NewDeaths}
        </p>
        <p className='info info--totalRecovered'>
          Total Recovered: {props.data.TotalRecovered}
        </p>
        <p className='info info--newRecovered'>
          New Recovered: {props.data.NewRecovered}
        </p>
      </div>
    </div>
  );
};

export default Country;
