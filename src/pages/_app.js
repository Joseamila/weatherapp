import Navbar from '../components/navbar';
import { ParentContainer,
         Layout,
         Home
 } from './globals'


 export default function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ParentContainer>
      <Layout>
        <Navbar />
      </Layout>
      <Home>
        <Component {...pageProps} />
      </Home>
    </ParentContainer>
  );
};

;
