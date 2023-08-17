import React from 'react';

const Results = ({ objectDistance, iso, shutterSpeedFraction, aperture }) => {
  // Calculate the aperture based on the formula: aperture = sqrt((iso * shutterSpeed) / (objectDistance * 2))
  const shutterSpeed = 1 / shutterSpeedFraction; // Convert shutter speed fraction to decimal

  const calculatedAperture = Math.sqrt((iso * shutterSpeed) / (objectDistance * 2));

  return (
    <div>
      <h2>Results</h2>
      <p>Object Distance: {objectDistance} units</p>
      <p>ISO: {iso}</p>
      <p>Shutter Speed: {shutterSpeedFraction} seconds</p>
      <p>Calculated Aperture: f/{calculatedAperture.toFixed(2)}</p>
    </div>
  );
};

export default Results;
