import {
  LayoutContainer,
} from "./style";
import { CircularProgress } from "@mui/material";

import { useState, useEffect } from "react";

import axios from "axios";
import MainScreen from "./mainscreen";
import Popup from "./popup";
const country = "uruguay";
const state = "montevideo";

const Navbar = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [changeWin, setChangeWin] = useState(false);
  console.log(changeWin)
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.BASEURL}/data/2.5/weather?q=${state},${country}&appid=${process.env.APIKEY}`
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const handleChangeWin = () => setChangeWin((value) => !value);
  
  return (
    <LayoutContainer>
      {isLoading ? (
        <CircularProgress />
      ) : (
        !changeWin ?( 
          <MainScreen data={data} handleChangeWin={handleChangeWin} />
        ):(
        <Popup handleChangeWin={handleChangeWin} />
      ))}
    </LayoutContainer>
  );
};

export default Navbar;
