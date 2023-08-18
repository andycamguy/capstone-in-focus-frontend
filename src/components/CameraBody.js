import React, { useState, useEffect } from 'react';
import { calculateAperture } from './helpers';
import Results from './Results';

const CameraBody = () => {
  const [objectDistanceFeet, setObjectDistanceFeet] = useState(20);
  const [iso, setIso] = useState(1600);
  const [shutterSpeedDenominator, setShutterSpeedDenominator] = useState(500); // Default to 1/500
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

  useEffect(() => {
    if (!aperture && iso && shutterSpeedDenominator && objectDistanceFeet) {
      const calculatedAperture = calculateAperture(iso, shutterSpeedDenominator, objectDistanceFeet * 304.8);
      setAperture(calculatedAperture);
    } else if (aperture && !objectDistanceFeet && iso && shutterSpeedDenominator) {
      const calculatedDistance = (iso * aperture * aperture * 2) / (shutterSpeedDenominator);
      setObjectDistanceFeet(calculatedDistance / 304.8);
    } else if (!iso && aperture && shutterSpeedDenominator && objectDistanceFeet) {
      const calculatedIso = (shutterSpeedDenominator * objectDistanceFeet) / (aperture * aperture * 2);
      setIso(calculatedIso);
    }
  }, [iso, aperture, objectDistanceFeet, shutterSpeedDenominator]);

  return (
    <div>
      <h1 className="mb-4">Camera Body</h1>
      <div className="mb-3">
        <label htmlFor="objectDistance" className="form-label">Object Distance (feet):</label>
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
        <label htmlFor="iso" className="form-label">ISO:</label>
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
        <label htmlFor="shutterSpeedDenominator" className="form-label">Shutter Speed Denominator:</label>
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
        <label htmlFor="aperture" className="form-label">Aperture:</label>
        <input
          type="number"
          id="aperture"
          className="form-control"
          value={aperture}
          onChange={handleApertureChange}
          placeholder="Aperture"
        />
      </div>
      <Results
        objectDistanceMillimeters={objectDistanceFeet * 304.8} // Convert feet to millimeters
        iso={iso}
        aperture={aperture}
        shutterSpeedDenominator={shutterSpeedDenominator}
      />
    </div>
  );
};

export default CameraBody;