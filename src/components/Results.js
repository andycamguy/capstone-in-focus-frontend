import React from 'react';

const Results = ({ objectDistance, iso, shutterSpeedDenominator, aperture }) => {
  let calculatedAperture = aperture;
  let calculatedIso = iso;
  let calculatedObjectDistance = objectDistance;

  if (!calculatedAperture && iso && shutterSpeedDenominator && objectDistance) {
    const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
    calculatedAperture = Math.sqrt((iso * shutterSpeedDecimal) / (objectDistance * 2)).toFixed(2);
  }

  if (!calculatedIso && aperture && shutterSpeedDenominator && objectDistance) {
    const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
    calculatedIso = (aperture * aperture * 2 * objectDistance) / shutterSpeedDecimal;
  }

  if (!calculatedObjectDistance && aperture && iso && shutterSpeedDenominator) {
    const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
    calculatedObjectDistance = (iso * shutterSpeedDecimal) / (aperture * aperture * 2);
  }

  return (
    <div>
      <h2>Results</h2>
      <p>Object Distance: {calculatedObjectDistance} feet</p>
      <p>ISO: {calculatedIso}</p>
      <p>Shutter Speed: 1/{shutterSpeedDenominator} seconds</p>
      <p>Calculated Aperture: {calculatedAperture === aperture ? `f/${calculatedAperture}` : 'N/A'}</p>
    </div>
  );
};

export default Results;
