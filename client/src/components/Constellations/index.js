import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ConstellationStyled from './ConstellationStyled';

const InfoConstellation = () => {
  const [name, setName] = useState('');
  const [constellations, setConstellations] = useState([]);
  const [filteredConstellations, setFilteredConstellations] = useState([]);

  const fetchConstellations = async () => {
    const { data } = await axios({
      url: 'http://localhost:5000/constellations',
    });
    return data;
  };

  const getConstellations = async () => {
    const data = await fetchConstellations();
    setConstellations(data);
  };

  useEffect(() => {
    let isSubscribed = true;
    getConstellations();
    setFilteredConstellations(
      constellations.filter(c =>
        c.frenchName.toLowerCase().includes(name.toLowerCase())
      )
    );
    return () => (isSubscribed = false);
  }, [name, constellations]);

  return (
    <ConstellationStyled>
      <div className='constellations'>
        <h2>Nom de la constellation</h2>
        <input
          className='input'
          name='name'
          placeholder='Nom de la constellation'
          onChange={e => setName(e.target.value)}
          autoComplete='off'
        />
        {constellations.length ? (
          <>
            {name &&
              filteredConstellations.map(c => <p key={c.id}>{c.frenchName}</p>)}
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </ConstellationStyled>
  );
};

InfoConstellation.propTypes = {
  getConstellations: PropTypes.func.isRequired,
  constellations: PropTypes.array.isRequired,
};

export default InfoConstellation;
