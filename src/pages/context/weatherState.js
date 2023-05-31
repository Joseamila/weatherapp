import { useReducer, useState } from "react";
import WeatherReducer from "./weatherReducer";
import Context from "./weatherContext";
import axios from "axios";

const weaterState = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, { weather: null });
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    country: "",
    states: "",
    defaultCountry: "uruguay",
    defaultStates: "montevideo",
  });

  const getWeather = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.BASEURL}/data/2.5/weather?q=${
          location.states ? location.states : location.defaultStates
        },${
          location.country ? location.country : location.defaultCountry
        }&appid=${process.env.APIKEY}`
      );
      dispatch({
        type: "getWeather",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        data: state.weather,
        getWeather,
        isLoading,
        setLocation,
        location,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default weaterState;
