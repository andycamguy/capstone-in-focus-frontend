import React from 'react';
import {
  calculateAperture,
  calculateISO,
  calculateShutterSpeedDenominator,
  calculateObjectDistanceMillimeters,
} from './helpers';

const Results = ({ objectDistanceMillimeters, iso, shutterSpeedDenominator, aperture }) => {
  // Calculate missing values using helper functions if needed
  const calculatedAperture = aperture || calculateAperture(iso, shutterSpeedDenominator, objectDistanceMillimeters);
  const calculatedISO = iso || calculateISO(shutterSpeedDenominator, calculatedAperture, objectDistanceMillimeters);
  const calculatedShutterSpeedDenominator =
    shutterSpeedDenominator || calculateShutterSpeedDenominator(calculatedISO, calculatedAperture, objectDistanceMillimeters);
  const calculatedObjectDistanceMillimeters =
    objectDistanceMillimeters ||
    calculateObjectDistanceMillimeters(calculatedISO, calculatedShutterSpeedDenominator, calculatedAperture);

  // Array of standard f-stops
  const standardFstops = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];

  // Find the nearest standard f-stop value
  const nearestAperture = standardFstops.reduce((prev, curr) => {
    return Math.abs(curr - calculatedAperture) < Math.abs(prev - calculatedAperture) ? curr : prev;
  });

  // Determine if numbers match up
  const numbersMatch =
    Math.abs(calculatedObjectDistanceMillimeters - objectDistanceMillimeters) < 0.01 &&
    Math.abs(calculatedISO - iso) < 1 &&
    Math.abs(calculatedShutterSpeedDenominator - shutterSpeedDenominator) < 1 &&
    Math.abs(nearestAperture - aperture) < 0.1;

  // Determine if inputs are valid
  const inputsValid =
    !isNaN(objectDistanceMillimeters) &&
    !isNaN(iso) &&
    !isNaN(shutterSpeedDenominator) &&
    !isNaN(aperture);

  // Apply conditional styles
  const containerStyle = {
    backgroundColor: numbersMatch && inputsValid ? 'green' : 'red',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2>Results</h2>
      <p>Object Distance: {calculatedObjectDistanceMillimeters.toFixed(2)} millimeters</p>
      <p>ISO: {calculatedISO}</p>
      <p>Shutter Speed: 1/{calculatedShutterSpeedDenominator} seconds</p>
      <p>Aperture: f/{nearestAperture.toFixed(1)}</p>
      {inputsValid ? <p>Inputs Valid</p> : <p>Invalid Inputs</p>}
    </div>
  );
};

export default Results;
