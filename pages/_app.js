import { useEffect } from 'react'
import '../styles/index.scss'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    
    if (window && window.innerWidth <= 600) {
      import ( /* webpackChunkName: 'media-mobile' */ '../public/css/mobile.css');
    }
    else if (window && window.innerWidth >= 1200) {
      import ( /* webpackChunkName: 'media-desktop' */ '../public/css/desktop.css');
    }


  }, [])


    return <Component {...pageProps }
    />
}

export default MyApp