import React, { useState, useEffect } from 'react';

const cssLoaded = [];

const useBreakpoint = (queries) => {
    const [queryMatch, setQueryMatch] = useState(null);
  
    useEffect(() => {
      const mediaQueryLists = {};
      const keys = Object.keys(queries);
      
      // To check whether event listener is attached or not
      let isAttached = false;
  
      const handleQueryListener = () => {
        const updatedMatches = keys.reduce((acc, media) => {
            acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
            //console.log(acc)
        
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
        //Setting state to the updated matches 
        // when document either starts or stops matching a query
        setQueryMatch(updatedMatches)
      }
  
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
        //Setting state to initial matching queries
        setQueryMatch(matches);
        isAttached = true;
        keys.forEach(media => {
          if(typeof queries[media] === 'string') {
            mediaQueryLists[media].addListener(handleQueryListener);
          }
        });
      }
  
      return () => {
      //If event listener is attached then remove it when deps change
        if(isAttached) {
          keys.forEach(media => {
            if(typeof queries[media] === 'string') {
              mediaQueryLists[media].removeListener(handleQueryListener);
            }
          });
        }
      }
    }, [queries]);
  
    return queryMatch;
  }
  
  export default useBreakpoint;