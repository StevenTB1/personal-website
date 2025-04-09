import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-xl">
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
