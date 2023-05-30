import { HomeContainer } from "./style";
import { Card, CardContent, CircularProgress, Grid } from "@mui/material";
import { Container, Titles, Text } from "@/components/generalStyles";

import {
  calculateVisibility,
  mpsToMph,
} from "../../../helpers/weatherCalcules";
import { useEffect, useContext } from "react";
import weatherContext from "../../pages/context/weatherContext";

const Home = () => {
  const { data, getWeather, isLoading, location } = useContext(weatherContext);

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <HomeContainer>
      <Container justifyContent={"center"} AlignItems={"center"} isColumn>
        <Titles size={24}>Today’s Hightlights</Titles>
        <Grid container spacing={5} justifyContent="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Grid item sx={6}>
                <Card
                  sx={{ minWidth: 275, height: 240, background: "#1E213A" }}
                >
                  <CardContent>
                    <Container justifyContent={"center"}>
                      <Text size={15}>Humidity</Text>
                    </Container>
                    <Container justifyContent={"center"} AlignItems={"center"}>
                      <Titles weight={700} size={64}>
                        {data?.main?.humidity}
                      </Titles>
                      <Titles weight={500} size={45}>
                        %
                      </Titles>
                    </Container>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sx={6}>
                <Card
                  sx={{ minWidth: 275, height: 240, background: "#1E213A" }}
                >
                  <CardContent>
                    <Container justifyContent={"center"}>
                      <Text size={15}>Visibility</Text>
                    </Container>
                    <Container justifyContent={"center"} AlignItems={"center"}>
                      <Titles weight={700} size={64} marginRight={5}>
                        {calculateVisibility(data?.visibility)}
                      </Titles>
                      <Titles weight={500} size={45}>
                        miles
                      </Titles>
                    </Container>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sx={6}>
                <Card
                  sx={{ minWidth: 275, height: 240, background: "#1E213A" }}
                >
                  <CardContent>
                    <Container justifyContent={"center"}>
                      <Text size={15}>Wind status</Text>
                    </Container>
                    <Container justifyContent={"center"} AlignItems={"center"}>
                      <Titles weight={700} size={64} marginRight={5}>
                        {mpsToMph(data?.wind?.speed)}
                      </Titles>
                      <Titles weight={500} size={45}>
                        mph
                      </Titles>
                    </Container>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sx={6}>
                <Card
                  sx={{ minWidth: 275, height: 240, background: "#1E213A" }}
                >
                  <CardContent>
                    <Container justifyContent={"center"}>
                      <Text size={15}>Air pressure</Text>
                    </Container>
                    <Container justifyContent={"center"} AlignItems={"center"}>
                      <Titles weight={700} size={64} marginRight={5}>
                        {data?.main?.pressure}
                      </Titles>
                      <Titles weight={500} size={45}>
                        mb
                      </Titles>
                    </Container>
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </HomeContainer>
  );
};

export default Home;
