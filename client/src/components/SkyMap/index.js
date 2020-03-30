import React, { useState } from 'react';
import axios from 'axios';
import Constellations from 'src/components/Constellations';
import SkyMapStyled from './SkyMapStyled';

const SkyMap = () => {
  const [coords, setCoords] = useState({});
  const [city, setCity] = useState('');

  const handleChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.opencagedata.com/geocode/v1/google-v3-json?q=${city}&key=${process.env.GEOLOC_API_KEY}`
    );

    const {
      geometry: {
        location: { lat, lng },
      },
    } = data.results[0];

    setCoords({ lat, lng });
  };

  return (
    <SkyMapStyled>
      <div className='map'>
        <div className='info-map'>
          <h1>Sky Map</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='search-bar'
              type='text'
              placeholder='Chercher une ville...'
              onChange={handleChange}
              value={city}
            />
          </form>
        </div>
        <div className='sky-map'>
          <iframe
            width='450'
            height='450'
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
            src={`https://virtualsky.lco.global/embed/index.html?longitude=${coords.lng}&latitude=${coords.lat}&projection=polar&constellations=true&constellationlabels=true&az=192.84525109280014`}
            allowtransparency='true'
          ></iframe>
        </div>
      </div>
      <Constellations />
    </SkyMapStyled>
  );
};

export default SkyMap;
