import '../index.css';
import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
