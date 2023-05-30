export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "getWeather":
      return {
        ...state,
        weather: payload,
      };
    default:
      return state;
  }
};
