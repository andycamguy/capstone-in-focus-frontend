import React, { useState, useEffect } from 'react';
import Results from './Results';

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

  // Calculate missing inputs based on available inputs
  useEffect(() => {
    // Calculate aperture based on available inputs
    if (objectDistance && iso && (shutterSpeedNumerator || shutterSpeedDenominator)) {
      const shutterSpeedDecimal = shutterSpeedNumerator / shutterSpeedDenominator || 1;
      const calculatedAperture = Math.sqrt((iso * shutterSpeedDecimal) / (objectDistance * 2));
      setAperture(calculatedAperture);
    }

    // Calculate object distance based on available inputs
    if (aperture && iso && (shutterSpeedNumerator || shutterSpeedDenominator)) {
      const shutterSpeedDecimal = shutterSpeedNumerator / shutterSpeedDenominator || 1;
      const calculatedDistance = (iso * shutterSpeedDecimal) / (aperture * aperture * 2);
      setObjectDistance(calculatedDistance);
    }

    // Calculate ISO based on available inputs
    if (aperture && objectDistance && (shutterSpeedNumerator || shutterSpeedDenominator)) {
      const shutterSpeedDecimal = shutterSpeedNumerator / shutterSpeedDenominator || 1;
      const calculatedIso = (aperture * aperture * 2 * objectDistance) / shutterSpeedDecimal;
      setIso(calculatedIso);
    }
  }, [objectDistance, iso, shutterSpeedNumerator, shutterSpeedDenominator, aperture]);

  return (
    <div>
      <h1 className="mb-4">Camera Body</h1>
      <div className="mb-3">
        <label htmlFor="objectDistance" className="form-label">Object Distance:</label>
        <input
          type="number"
          id="objectDistance"
          className="form-control"
          value={objectDistance}
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
        <label htmlFor="shutterSpeedNumerator" className="form-label">Shutter Speed Numerator:</label>
        <input
          type="number"
          id="shutterSpeedNumerator"
          className="form-control"
          value={shutterSpeedNumerator}
          onChange={handleShutterSpeedNumeratorChange}
          placeholder="Shutter Speed Numerator"
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
      <Results
        objectDistance={objectDistance}
        iso={iso}
        shutterSpeed={{ numerator: shutterSpeedNumerator, denominator: shutterSpeedDenominator }}
        aperture={aperture}
      />
    </div>
  );
};

export default CameraBody;
