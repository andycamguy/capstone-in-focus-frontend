import React, { useState } from 'react';
import dslrImage from '/workspace/capstone-in-focus-frontend/src/components/dslr.jpeg';
import Results from './Results';
const CameraBody = ({ loggedIn }) => {
  const [objectDistanceFeet, setObjectDistanceFeet] = useState(20);
  const [iso, setIso] = useState(1600);
  const [shutterSpeedDenominator, setShutterSpeedDenominator] = useState(500);
  const [aperture, setAperture] = useState(0);

  const handleObjectDistanceChange = (event) => {
    setObjectDistanceFeet(parseFloat(event.target.value));
  };

  const handleIsoChange = (event) => {
    setIso(parseInt(event.target.value));
  };

  const handleShutterSpeedDenominatorChange = (event) => {
    setShutterSpeedDenominator(parseInt(event.target.value));
  };

  const handleApertureChange = (event) => {
    setAperture(parseFloat(event.target.value));
  };

  const imageStyle = {
    flex: 1,
    maxWidth: '50%',
    marginRight: '20px',
  };

  const inputFields = (
    <div style={{ padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'var(--secondary-color)', color: '#59f5f5', background: '#333', display: 'flex' }}>
      <h1 className="mb-4 text-center text-white">Camera Body</h1>
      <div className="mb-3">
        <label htmlFor="objectDistance" className="form-label">
          Object Distance (feet):
        </label>
        <input
          type="number"
          id="objectDistance"
          className="form-control"
          value={objectDistanceFeet}
          onChange={handleObjectDistanceChange}
          placeholder="Object Distance"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="iso" className="form-label">
          ISO:
        </label>
        <input
          type="number"
          id="iso"
          className="form-control"
          value={iso}
          onChange={handleIsoChange}
          placeholder="ISO"
          list="isoSuggestions"
        />
        <datalist id="isoSuggestions">
          {[100, 200, 400, 800, 1600, 3200, 6400].map((isoValue, index) => (
            <option key={index} value={isoValue} />
          ))}
        </datalist>
      </div>
      <div className="mb-3">
        <label htmlFor="shutterSpeedDenominator" className="form-label">
          Shutter Speed Denominator:
        </label>
        <input
          type="number"
          id="shutterSpeedDenominator"
          className="form-control"
          value={shutterSpeedDenominator}
          onChange={handleShutterSpeedDenominatorChange}
          placeholder="Shutter Speed Denominator"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="aperture" className="form-label">
          Aperture:
        </label>
        <input
          type="number"
          id="aperture"
          className="form-control"
          value={aperture}
          onChange={handleApertureChange}
          placeholder="Aperture"
          list="apertureSuggestions"
        />
        <datalist id="apertureSuggestions">
          {[1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22].map((fStop, index) => (
            <option key={index} value={fStop} />
          ))}
        </datalist>
      </div>
      <div style={{ flex: 1, maxWidth: '50%', marginRight: '20px' }}>
        <img src={dslrImage} alt="DSLR Camera" className="img-fluid" />
      </div>
    </div>
  );

  return (
    <div style={{ padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'var(--secondary-color)', color: '#59f5f5' }}>
      {inputFields}
      <Results
        loggedIn={loggedIn}
        objectDistanceFeet={objectDistanceFeet}
        iso={iso}
        shutterSpeedDenominator={shutterSpeedDenominator}
        aperture={aperture}
      />
    </div>
  );
};


export default CameraBody;
