import { AppProps } from 'next/app';
import '../styles/globals.css';

/**
 * @returns {JSX.Element} The NextJS top-level document.
 */
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default App;
