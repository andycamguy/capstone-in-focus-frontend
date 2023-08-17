import React, { useState } from 'react';
import Results from './Results';
// ----------------------------------------------------
const CameraBody = () => {
  const [objectDistance, setObjectDistance] = useState(0);
  const [iso, setIso] = useState(100);
  const [shutterSpeedNumerator, setShutterSpeedNumerator] = useState(1);
  const [shutterSpeedDenominator, setShutterSpeedDenominator] = useState(500); // Default to 1/500
  const [aperture, setAperture] = useState(0);

  // Handle input changes
  const handleObjectDistanceChange = (event) => {
    setObjectDistance(parseFloat(event.target.value));
  };

  const handleIsoChange = (event) => {
    setIso(parseInt(event.target.value));
  };

  const handleShutterSpeedNumeratorChange = (event) => {
    setShutterSpeedNumerator(parseInt(event.target.value));
  };

  const handleShutterSpeedDenominatorChange = (event) => {
    setShutterSpeedDenominator(parseInt(event.target.value));
  };

  const handleApertureChange = (event) => {
    setAperture(parseFloat(event.target.value));
  };
//================================================
  return (
    <div>
      <h1>Camera Body</h1>
      <input type="number" value={objectDistance} onChange={handleObjectDistanceChange} placeholder="Object Distance" />
      <input type="number" value={iso} onChange={handleIsoChange} placeholder="ISO" />
      <input type="number" value={shutterSpeedNumerator} onChange={handleShutterSpeedNumeratorChange} placeholder="Shutter Speed Numerator" />
      <span>/</span>
      <input type="number" value={shutterSpeedDenominator} onChange={handleShutterSpeedDenominatorChange} placeholder="Shutter Speed Denominator" />
      <input type="number" value={aperture} onChange={handleApertureChange} placeholder="Aperture" />
      <Results
        objectDistance={objectDistance}
        iso={iso}
        shutterSpeedFraction={`${shutterSpeedNumerator}/${shutterSpeedDenominator}`}
        aperture={aperture}
      />
    </div>
  );
};

export default CameraBody;
