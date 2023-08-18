// helpers.js
export const calculateAperture = (iso, shutterSpeedDenominator, objectDistanceMillimeters) => {
  const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
  return Math.sqrt((iso * shutterSpeedDecimal) / (objectDistanceMillimeters * 2)).toFixed(2);
};