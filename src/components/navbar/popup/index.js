import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import {
  Container,
  InnerContainer,
  Input,
  InputContainer,
} from "@/components/generalStyles";
import { useState, useContext } from "react";
import weatherContext from "../../../pages/context/weatherContext";

const Popup = ({ handleChangeWin, setChangeWin }) => {
  const { location, setLocation } = useContext(weatherContext);
  const [searchLocation, setSearchlocation] = useState({
    country: "",
    state: "",
  });

  const handleChange = (e) =>
    setSearchlocation({ ...searchLocation, [e.target.name]: e.target.value });

  const sendSearch = (e) => {
    e.preventDefault();
    if (!searchLocation.country || !searchLocation.state) {
      return;
    } else if (searchLocation.country.trim() || searchLocation.state.trim()) {
      setLocation({
        ...location,
        country: searchLocation.country.trim(),
        states: searchLocation.state.trim(),
      });
      setChangeWin(false);
    } else {
      return;
    }
  };

  return (
    <InnerContainer>
      <Container justifyContent={"end"} padding={10}>
        <Button onClick={handleChangeWin}>
          <Close sx={{ color: "white" }} />
        </Button>
      </Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md >
          <InputContainer onSubmit={sendSearch}>
            <Search sx={{ color: "#616475" }} />
            <Input
              name="country"
              id="outlined-basic"
              variant="standard"
              placeholder="Search country"
              value={searchLocation.country}
              onChange={handleChange}
            />
          </InputContainer>
        </Grid>
        <Grid item xs={12} sm={12} md >
          <InputContainer onSubmit={sendSearch}>
            <Search sx={{ color: "#616475" }} />
            <Input
              name="state"
              id="outlined-basic"
              variant="standard"
              placeholder="Search state"
              value={searchLocation.state}
              onChange={handleChange}
            />
          </InputContainer>
        </Grid>
        <Grid item xs={12} sm={12} md alignSelf="center" >
          <Button
            variant="contained"
            sx={{ background: "#3C47E9" }}
            onClick={sendSearch}
          >
            Search
          </Button>
          
        </Grid>
      </Grid>
    </InnerContainer>
  );
};

export default Popup;
