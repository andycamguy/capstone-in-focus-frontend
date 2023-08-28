import React, { useState, useEffect } from 'react';
import { calculateAperture, calculateISO, calculateShutterSpeedDenominator, calculateObjectDistanceMillimeters } from './helpers';

const Results = ({ objectDistanceFeet, iso, shutterSpeedDenominator, aperture }) => {
  const objectDistanceMillimeters = objectDistanceFeet * 304.8; // Convert feet to millimeters
  const calculatedAperture = calculateAperture(iso, shutterSpeedDenominator, objectDistanceMillimeters);

  // Convert entered ISO to the nearest standard ISO value
  const standardISOs = [100, 200, 400, 800, 1600, 3200, 6400];
  const nearestISO = standardISOs.reduce((prev, curr) => {
    const prevDiff = Math.abs(prev - iso);
    const currDiff = Math.abs(curr - iso);
    return currDiff < prevDiff ? curr : prev;
  });

  const calculatedISO = nearestISO; // Use the nearest standard ISO value

  // Calculate aperture based on the formula sAperture = -ln(Aperture) / ln(√2) still in testing
  const calculatedApertureValue = aperture;

  const standardFstops = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];

  // Find the nearest aperture value from the standardFstops array
  const nearestAperture = standardFstops.reduce((prev, curr) => {
    const prevDiff = Math.abs(prev - calculatedApertureValue);
    const currDiff = Math.abs(curr - calculatedApertureValue);
    return currDiff < prevDiff ? curr : prev;
  });

  const containerStyle = {
    backgroundColor: objectDistanceMillimeters > 0 && iso > 0 && shutterSpeedDenominator > 0 && aperture > 0 ? 'green' : 'red',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
    float: 'right',
  };

  return (
    <div style={containerStyle}>
      <h2>Results</h2>
      <p>Object Distance: {objectDistanceMillimeters.toFixed(2)} millimeters</p>
      <p>ISO: {calculatedISO}</p> {/* Display the calculatedISO value */}
      <p>Shutter Speed: {shutterSpeedDenominator}</p>
      <p>Aperture: f/{nearestAperture.toFixed(1)}</p>
      {objectDistanceMillimeters > 0 && iso > 0 && shutterSpeedDenominator > 0 && aperture > 0 ? (
        <p>Inputs Valid</p>
      ) : (
        <p>Invalid Inputs</p>
      )}
    </div>
  );
};

export default Results;
