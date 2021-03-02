import '../styles/index.scss'

if (window && window.innerWidth <= 600) {
    //import ( /* webpackChunkName: 'example-desktop' */ './example-desktop.scss');
}

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}

export default MyApp