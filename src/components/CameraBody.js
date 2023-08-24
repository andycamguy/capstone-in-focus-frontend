import React, { useState, useEffect } from 'react';
import Results from './Results';


const CameraBody = () => {
  const [objectDistanceFeet, setObjectDistanceFeet] = useState(20);
  const [iso, setIso] = useState(1600);
  const [shutterSpeedDenominator, setShutterSpeedDenominator] = useState(500); // Default to 1/500
  const [aperture, setAperture] = useState(0);

  // Handle input changes
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

  const inputFields = (
    <div style={{ marginBottom: '20px' }}>
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
        />
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
        />
      </div>
      <div style={{ flex: 1 }}>
      <img
        src="/workspace/capstone-in-focus-frontend/src/components/dslr.jpeg" // need help tomorrow
        alt="DSLR Camera"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
    </div>
  );

  const resultsComponent = (
    <div
      style={{
        float: 'right',
        marginLeft: '20px', // Add margin for spacing
        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Results
        objectDistanceMillimeters={objectDistanceFeet * 304.8}
        iso={iso}
        aperture={aperture}
        shutterSpeedDenominator={shutterSpeedDenominator}
      />
    </div>
  );

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'var(--secondary-color)',
        color: '#59f5f5',
      }}
    >
      {inputFields}
      {resultsComponent}
    </div>
  );
};

export default CameraBody;
