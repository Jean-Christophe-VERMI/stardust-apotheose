import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ConstellationStyled from './ConstellationStyled';

const InfoConstellation = ({ getConstellations, constellations }) => {
  const [name, setName] = useState('');

  const fetchConstellations = async () => {
    await getConstellations();
  };

  useEffect(() => {
    fetchConstellations();
  }, [name]);

  const filteredConstellations = constellations.filter(c =>
    c.frenchName.toLowerCase().includes(name.toLowerCase())
  );

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
        {name && filteredConstellations.map(c => <p>{c.frenchName}</p>)}
      </div>
    </ConstellationStyled>
  );
};

InfoConstellation.propTypes = {
  getConstellations: PropTypes.func.isRequired,
  constellations: PropTypes.array.isRequired,
};

export default InfoConstellation;
