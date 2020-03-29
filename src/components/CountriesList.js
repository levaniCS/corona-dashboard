import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import Country from './Country';

const CountriesList = () => {
  let allData = useSelector((state) => state.covid.allData);
  allData = allData.filter((item) => item.Country !== '');

  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState(allData);

  const items = countries.map((item, index) => {
    return <Country key={index} data={item} />;
  });

  const handleChange = (e) => {
    const query = e.target.value;
    const filteredData = allData.filter((element) => {
      return element.Country.toLowerCase().includes(query.toLowerCase());
    });
    setSearchValue(query);
    setCountries(filteredData);
  };

  return (
    <div className='main'>
      <div className='inputBox'>
        <input
          value={searchValue}
          onChange={handleChange}
          className='input'
          type='text'
          placeholder='Enter country name'
        />
      </div>
      <div className='items'>{items}</div>
    </div>
  );
};

export default CountriesList;
