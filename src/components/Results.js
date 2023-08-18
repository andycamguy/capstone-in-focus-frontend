// Results.js
import React from 'react';
import { calculateAperture } from './helpers';

const Results = ({ objectDistanceMillimeters, iso, shutterSpeedDenominator, aperture }) => {
  const standardIsoNumbers = [25, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600];
  const nearestIso = standardIsoNumbers.reduce((prev, curr) => {
    return Math.abs(curr - iso) < Math.abs(prev - iso) ? curr : prev;
  });

  const standardFstops = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];
  const nearestAperture = aperture || calculateAperture(iso, shutterSpeedDenominator, objectDistanceMillimeters);

  return (
    <div className="results-container">
      <h2>Results</h2>
      <p>Object Distance: {objectDistanceMillimeters.toFixed(2)} millimeters</p>
      <p>ISO: {nearestIso}</p>
      <p>Shutter Speed: 1/{shutterSpeedDenominator} seconds</p>
      <p>Aperture: f/{nearestAperture}</p>
    </div>
  );
};

export default Results;