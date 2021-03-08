import {BreakpointProvider} from '../useBreakPoint'

const queries = {
    xs: '(max-width: 320px)',
    md: '(max-width: 720px)',
    lg: '(max-width: 1024px)',
    or: '(orientation: portrait)',
  }

const Button = ({children}) => {
    return (<BreakpointProvider queries={queries}>
            <button className="btn btn-primary">{children}</button>
        </BreakpointProvider>)
}

export default Button