// Results.js
import React from 'react';

const Results = ({ objectDistanceFeet, iso, shutterSpeedDenominator, aperture }) => {
  // Convert object distance from feet to millimeters
  const objectDistanceMillimeters = objectDistanceFeet * 304.8; // 1 foot = 304.8 millimeters

  // Array of standard ISO numbers
  const standardIsoNumbers = [25, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600];

  // Calculate the nearest ISO value based on the input ISO
  const nearestIso = standardIsoNumbers.reduce((prev, curr) => {
    return Math.abs(curr - iso) < Math.abs(prev - iso) ? curr : prev;
  });

  // Calculate the aperture based on the formula: aperture = sqrt((iso * shutterSpeed) / (objectDistance * 2))
  const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
  const calculatedAperture = Math.sqrt((iso * shutterSpeedDecimal) / (objectDistanceMillimeters * 2)).toFixed(2);

  // Check if calculated values match provided values
  let bgColor = 'bg-green'; // Default to green background

  if (aperture && calculatedAperture !== aperture) {
    bgColor = 'bg-red';
  }

  return (
    <div className={`results-container ${bgColor}`}>
      <h2>Results</h2>
      <p>Object Distance: {objectDistanceMillimeters.toFixed(2)} millimeters</p>
      <p>ISO: {nearestIso}</p>
      <p>Shutter Speed: 1/{shutterSpeedDenominator} seconds</p>
      <p>Aperture: {calculatedAperture !== 'NaN' ? `f/${calculatedAperture}` : 'N/A'}</p>
    </div>
  );
};

export default Results;
