import "../asset/styles.css";
import SEO from '../next-seo.config';
import Footer from '../components/Footer';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (<>
    <DefaultSeo {...SEO} />
       <Component {...pageProps} />;
    <Footer />
  </>)
}

export default MyApp;
