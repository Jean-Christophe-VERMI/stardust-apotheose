import React from 'react';
import InfoConstellation from 'src/components/InfoConstellation';
import SkyMapStyled from './SkyMapStyled';

const SkyMap = () => (
  <SkyMapStyled>
    <div className="map">
      <div className="info-map">
        <h1>Sky Map</h1>
        <input className="search-bar" type="text" placeholder="Chercher une ville..." />
      </div>
      <div className="sky-map">
      <iframe 
        width="450" 
        height="450" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight="0" 
        marginWidth="0" 
        src="https://virtualsky.lco.global/embed/index.html?longitude=-119.86286000000001&latitude=34.4326&projection=polar&constellations=true&constellationlabels=true&showstarlabels=true&az=192.84525109280014" 
        allowtransparency="true">
      </iframe>
      </div>
    </div>
    <div className="infos-api">
      <InfoConstellation />
    </div>
  </SkyMapStyled>
);

export default SkyMap;
