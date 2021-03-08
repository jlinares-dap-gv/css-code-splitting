import { useEffect } from 'react'
import '../styles/index.scss'
import '../components/Button/style.scss'
import {BreakpointProvider} from '../components/useBreakPoint'

//https://betterprogramming.pub/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97

const queries = {
  xs: '(max-width: 320px)',
  md: '(max-width: 720px)',
  lg: '(max-width: 1024px)',
  or: '(orientation: portrait)',
}
 

function MyApp({ Component, pageProps }) {
    /*const matchPoints = useBreakpoint(queries);

    return  <Component {...pageProps }/>*/

    return (<BreakpointProvider queries={queries}>
            <Component {...pageProps }/>
        </BreakpointProvider>)
}

export default MyApp