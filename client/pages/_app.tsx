import '../styles/globals.scss'
import '../styles/nav-bar.scss'
import '../styles/landing.scss'
import '../styles/side-bar.scss'
import '../styles/lower-nav-bar.scss'
import '../styles/dog-main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
