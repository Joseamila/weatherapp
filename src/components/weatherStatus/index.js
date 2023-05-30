import Image from "next/image";
import Clear from "@/images/Clear.png";
import Hail from "@/images/Hail.png";
import HeavyCloud from "@/images/HeavyCloud.png";
import Rain from "@/images/HeavyRain.png";
import Clouds from "@/images/LightCloud.png";
import LightRain from "@/images/LightRain.png";
import Shower from "@/images/Shower.png";
import Sleet from "@/images/Sleet.png";
import Snow from "@/images/Snow.png";
import Thunderstorm from "@/images/Thunderstorm.png";
import Mist from "@/images/Mist.png";
import { Container } from "../generalStyles";

const WeatherStatus = ({ weather }) => {
  const weatherImg = {
    Clear,
    Hail,
    HeavyCloud,
    Rain,
    Clouds,
    LightRain,
    Shower,
    Sleet,
    Snow,
    Thunderstorm,
    Mist: weather === "Mist" || weather === "Fog" ? Mist : Mist,
  };

  return (
    <Container>
      <Image
        src={weatherImg[`${weather}`]}
        alt={`${weather}`}
        style={{ objectFit: "contain" }}
        fill
      />
    </Container>
  );
};

export default WeatherStatus;
