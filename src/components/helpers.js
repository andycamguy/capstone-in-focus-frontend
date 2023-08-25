export const calculateAperture = (iso, shutterSpeedDenominator, objectDistanceMillimeters) => {
  const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
  return Math.sqrt((iso * shutterSpeedDecimal) / (objectDistanceMillimeters * 2)).toFixed(2);
};

// Helper function to calculate ISO based on other values
export const calculateISO = (shutterSpeedDenominator, aperture, objectDistanceMillimeters) => {
  const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
  return (aperture * aperture * 2 * objectDistanceMillimeters * objectDistanceMillimeters) / (shutterSpeedDecimal);
};

// Helper function to calculate shutter speed denominator based on other values
export const calculateShutterSpeedDenominator = (iso, aperture, objectDistanceMillimeters) => {
  const apertureSquare = aperture * aperture;
  return Math.round((iso * apertureSquare * objectDistanceMillimeters * objectDistanceMillimeters) / 2);
};

// Helper function to calculate object distance millimeters based on other values
export const calculateObjectDistanceMillimeters = (iso, shutterSpeedDenominator, aperture) => {
  const shutterSpeedDecimal = 1 / shutterSpeedDenominator;
  return Math.sqrt((iso * aperture * aperture * 2) / (shutterSpeedDecimal * 2));
};