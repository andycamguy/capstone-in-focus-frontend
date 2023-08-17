// Results.js
import React from 'react';

const Results = ({ objectDistance, iso, shutterSpeed, aperture }) => {
  // Calculate the aperture based on the formula: aperture = sqrt((iso * shutterSpeed) / (objectDistance * 2))
  const shutterSpeedDecimal = shutterSpeed.numerator / shutterSpeed.denominator;
  const calculatedAperture = Math.sqrt((iso * shutterSpeedDecimal) / (objectDistance * 2));

  return (
    <div>
      <h2>Results</h2>
      <p>Object Distance: {objectDistance} feet</p>
      <p>ISO: {iso}</p>
      <p>Shutter Speed: {shutterSpeed.numerator}/{shutterSpeed.denominator} seconds</p>
      <p>Calculated Aperture: f/{calculatedAperture.toFixed(2)}</p>
    </div>
  );
};

export default Results;
