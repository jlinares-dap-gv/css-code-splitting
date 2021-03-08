import React, {
    useState,
    useEffect,
    createContext,
    useContext} from 'react';
  
  const defaultValue = {}
  
  const BreakpointContext = createContext(defaultValue);

  const cssLoaded = [];
  
  const BreakpointProvider = ({children, queries}) => {
    const [queryMatch, setQueryMatch] = useState({});

    useEffect(() => {
      const mediaQueryLists = {};
      const keys = Object.keys(queries);
      let isAttached = false;
  
      const handleQueryListener = () => {
        const updatedMatches = keys.reduce((acc, media) => {
            acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
            
            console.log(acc);

            let url = ''
            if (!cssLoaded.xs && acc.xs) { 
                url = '/_next/static/css/mobile.css'
                cssLoaded.xs = true;
            }
            if (!cssLoaded.lg && acc.lg) {
                url = '/_next/static/css/desktop.css'
                cssLoaded.lg = true;
            }

            if (url) {
                let head  = document.getElementsByTagName('head')[0];
                let link  = document.createElement('link');
                link.rel  = 'stylesheet';
                link.type = 'text/css';
                link.href = url;
                link.media = 'all';
                head.appendChild(link);
            }

            return acc;
        }, {})
        setQueryMatch(updatedMatches)
      }

      handleQueryListener();
  
      if (window && window.matchMedia) {
        const matches = {};
        keys.forEach(media => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media] = window.matchMedia(queries[media]);
            matches[media] = mediaQueryLists[media].matches
          } else {
            matches[media] = false
          }
        });
        setQueryMatch(matches);
        isAttached = true;
        keys.forEach(media => {
          if(typeof queries[media] === 'string') {
            mediaQueryLists[media].addListener(handleQueryListener)
          }
        });
      }
  
      return () => {
        if(isAttached) {
          keys.forEach(media => {
            if(typeof queries[media] === 'string') {
              mediaQueryLists[media].removeListener(handleQueryListener)
            }
          });
        }
      }
    }, [queries]);
  
    return (
      <BreakpointContext.Provider value={queryMatch}>
        {children}
      </BreakpointContext.Provider>
    )
  
  }
  
  function useBreakpoint() {
    const context = useContext(BreakpointContext);
    if(context === defaultValue) {
      throw new Error('useBreakpoint must be used within BreakpointProvider');
    }
    return context;
  }
  export {useBreakpoint, BreakpointProvider};