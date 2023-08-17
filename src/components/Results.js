import React from 'react';

const Results = ({ objectDistance, iso, shutterSpeedDenominator, aperture }) => {
  let calculatedAperture = aperture;
  let calculatedIso = iso;
  let calculatedObjectDistance = objectDistance;
  let bgColor = 'bg-green'; // Default to green background

  // Calculate values if missing
  // ...

  // Check if calculated values match provided values
  if (
    (calculatedAperture && calculatedAperture !== aperture) ||
    (calculatedIso && calculatedIso !== iso) ||
    (calculatedObjectDistance && calculatedObjectDistance !== objectDistance)
  ) {
    bgColor = 'bg-red'; // Set background color to red
  }

  return (
    <div className={`results-container ${bgColor}`}>
      <h2>Results</h2>
      <p>Object Distance: {calculatedObjectDistance} feet</p>
      <p>ISO: {calculatedIso}</p>
      <p>Shutter Speed: 1/{shutterSpeedDenominator} </p>
      <p>Calculated Aperture: {calculatedAperture === aperture ? `f/${calculatedAperture}` : 'N/A'}</p>
    </div>
  );
};

export default Results;
