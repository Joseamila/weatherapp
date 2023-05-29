export const celciusDegrees = (temp) =>{
    return Math.floor(temp - 273);
}

const metersToMiles = (meters) => {
    const miles = meters * 0.000621371;
    return miles.toFixed(1);
  };
  
export  const calculateVisibility = (visibility) => {
    if (visibility >= 1609) {
      const miles = metersToMiles(visibility);
      return `${miles}`;
    } else {
      return `${visibility}`;
    }
  };

export const mpsToMph = (mps) => (mps * 2.237).toFixed(2);