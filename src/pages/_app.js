import Navbar from "../components/navbar";
import { ParentContainer, Layout, Home } from "./globals";
import "@/normalize.css";
import "@/global.css";

import WeatherState from "../pages/context/weatherState";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <WeatherState>
      <ParentContainer>
        <Layout>
          <Navbar />
        </Layout>
        <Home>
          <Component {...pageProps} />
        </Home>
      </ParentContainer>
    </WeatherState>
  );
}
