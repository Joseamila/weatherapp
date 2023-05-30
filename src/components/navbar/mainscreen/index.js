import {
  HeaderLayout,
  CenterContainer,
  RainTypeContainer,
  FooterLayout,
} from "../style";
import {
  Container,
  Titles,
  EmptyContainer,
  Text,
} from "@/components/generalStyles";

import { Button } from "@mui/material";
import { Place } from "@mui/icons-material";
import { capitalizeString } from "@/../helpers/formater";
import { celciusDegrees } from "@/../helpers/weatherCalcules";
import WeatherStatus from "@/components/weatherStatus";
import CloudsBackground from "@/images/Clouds.png";
import Image from "next/image";
import moment from "moment";

const MainScreen = ({ data, handleChangeWin }) => {
  return (
    <>
      <HeaderLayout>
        <EmptyContainer>
          <Button
            variant="contained"
            sx={{ background: "#6E707A" }}
            onClick={handleChangeWin}
          >
            Search for places
          </Button>
        </EmptyContainer>
      </HeaderLayout>
      <CenterContainer>
        <Image
          src={CloudsBackground}
          alt="cloudsBackground"
          fill
          style={{ opacity: ".5", objectFit: "scale-down" }}
        />
        <Container height={250}>
          <WeatherStatus weather={data?.weather[0]?.main} />
        </Container>
      </CenterContainer>
      <CenterContainer>
        <Titles weight={500} size={144}>
          {celciusDegrees(data?.main?.temp)}
        </Titles>
        <Titles weight={500} size={80} color={"#A09FB1"}>
          °C
        </Titles>
      </CenterContainer>
      <RainTypeContainer>
        <Titles weight={100} color={"#A09FB1"}>
          {capitalizeString(data?.weather[0]?.description)}
        </Titles>
      </RainTypeContainer>
      <FooterLayout>
        <Container justifyContent={"center"}>
          <Text color={"#A09FB1"}>
            {moment().format("dddd")} • {moment().format("MMM Do YY")}
          </Text>
        </Container>
        <Container isColumn>
          <Container justifyContent={"center"} AlignItems={"center"}>
            <Place style={{ color: "#A09FB1" }} />
            <Text color={"#A09FB1"}>{data?.name}</Text>
          </Container>
        </Container>
      </FooterLayout>
    </>
  );
};

export default MainScreen;
