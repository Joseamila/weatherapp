import { LayoutContainer } from "./style";
import { CircularProgress } from "@mui/material";

import { useState, useEffect, useContext } from "react";
import { Container } from "../generalStyles";
import weatherContext from "../../pages/context/weatherContext";

import MainScreen from "./mainscreen";
import Popup from "./popup";

const Navbar = () => {
  const { data, getWeather, isLoading, location } = useContext(weatherContext);
  const [changeWin, setChangeWin] = useState(false);

  useEffect(() => {
    getWeather();
  }, [location]);

  const handleChangeWin = () => setChangeWin((value) => !value);

  return (
    <LayoutContainer>
      {isLoading ? (
        <Container
          height={"100%"}
          justifyContent={"center"}
          AlignItems={"center"}
        >
          <CircularProgress />
        </Container>
      ) : !changeWin ? (
        <MainScreen data={data} handleChangeWin={handleChangeWin} />
      ) : (
        <Popup handleChangeWin={handleChangeWin} setChangeWin={setChangeWin} />
      )}
    </LayoutContainer>
  );
};

export default Navbar;
