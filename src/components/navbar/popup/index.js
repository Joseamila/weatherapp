import { SearchContainer } from "./styles";
import { Button, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Container, Text, InnerContainer } from "@/components/generalStyles";
import { useState } from "react";

const Popup = ({ handleChangeWin }) => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);

  const saveSearch = () => setSearch([...search, inputValue.trim()]);

  console.log(search);
  return (
    <>
      <Container justifyContent={"end"} padding={10}>
        <Button onClick={handleChangeWin}>
          <Close sx={{ color: "white" }} />
        </Button>
      </Container>
      <Container padding={5} justifyContent={"space-between"}>
        <TextField
          id="outlined-basic"
          variant="standard"
          placeholder="Search location"
          value={inputValue}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{ background: "#3C47E9" }}
          onClick={saveSearch}
        >
          Search
        </Button>
      </Container>
      <Container isColumn>
        <InnerContainer>
            {search.map((s) => (
                <>
                    <SearchContainer>
                        <Text color="white" key={s}>
                        {s}
                        </Text>
                    </SearchContainer>
                </>
            ))}
        </InnerContainer>
      </Container>
    </>
  );
};

export default Popup;
