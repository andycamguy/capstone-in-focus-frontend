import React, { useState, useEffect } from 'react';
import { calculateAperture, calculateISO, calculateShutterSpeedDenominator, calculateObjectDistanceMillimeters } from './helpers';

const Results = ({ objectDistanceFeet, iso, shutterSpeedDenominator, aperture }) => {
  const objectDistanceMillimeters = objectDistanceFeet * 304.8; // Convert feet to millimeters
  const calculatedAperture = calculateAperture(iso, shutterSpeedDenominator, objectDistanceMillimeters);
  const calculatedISO = calculateISO(shutterSpeedDenominator, calculatedAperture, objectDistanceMillimeters);

  const standardFstops = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];
  const standardISOs = [100, 200, 400, 800, 1600, 3200, 6400];

  const nearestAperture = standardFstops.reduce((prev, curr) => {
    return Math.abs(curr - calculatedAperture) < Math.abs(prev - calculatedAperture) ? curr : prev;
  });

  const nearestISO = standardISOs.reduce((prev, curr) => {
    const prevDiff = Math.abs(prev - calculatedISO);
    const currDiff = Math.abs(curr - calculatedISO);
    return currDiff < prevDiff ? curr : prev;
  });

  const calculatedShutterSpeedDecimal = 1 / shutterSpeedDenominator;

  const calculatedShutterSpeedNumerator = Math.round(1 / (calculatedShutterSpeedDecimal * 2));
  const calculatedShutterSpeedDenominator = 2;

  const containerStyle = {
    backgroundColor: objectDistanceMillimeters > 0 && iso > 0 && shutterSpeedDenominator > 0 && aperture > 0 ? 'green' : 'red',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
    float: 'right',
  };

  const formatShutterSpeed = () => {
    const shutterSpeed = `1/${calculatedShutterSpeedNumerator} seconds`;
    return shutterSpeed;
  };

  const formatISO = () => {
    const formattedISO = new Intl.NumberFormat().format(nearestISO);
    return formattedISO;
  };

  return (
    <div style={containerStyle}>
      <h2>Results</h2>
      <p>Object Distance: {objectDistanceMillimeters.toFixed(2)} millimeters</p>
      <p>ISO: {formatISO()}</p>
      <p>Shutter Speed: {formatShutterSpeed()}</p>
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
