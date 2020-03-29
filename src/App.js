import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions/coronaInfo';
import CountriesList from './components/CountriesList';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  let allData = useSelector((state) => state.covid.allData);

  const getData = async () => {
    await setIsLoading(true);
    await dispatch(actions.getAllData());
  };

  allData = allData.filter((item) => item.Country !== '');

  return (
    <div className='container'>
      <img className='corona' src={require('./assets/cor.png')} alt='corona' />
      <img
        className='corona--2'
        src={require('./assets/cor2.png')}
        alt='corona2'
      />

      <h1 className='main__header'>COVID-19 DASHBOARD</h1>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        {allData.length === 0 ? (
          !isLoading ? (
            <button className='btn btn--white' onClick={getData}>
              Get data
            </button>
          ) : (
            <p className='loading'>Loading...</p>
          )
        ) : (
          <CountriesList />
        )}
      </div>
    </div>
  );
};

export default App;
