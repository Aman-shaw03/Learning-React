/* Learning Few Hooks  */

/**useEffect**/

// useEffect Hook takes a setup (function) and a dependencies,
// useeffect fire only when PaymentResponse,state,elements inside dependencies are change and setup function is executed
// After every re-render with changed dependencies, React will first run the cleanup 
// function (if you provided it) with the old values, and then run your setup function with the new values.

// The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].
//  React will compare each dependency with its previous value using the Object.is comparison. 
//  If you omit this argument, your Effect will re-run after every re-render of the component. 



/**useCallback**/

//useCallback is a React Hook that lets you cache a function definition between re-renders.
// its gives us a function to cache and its dependencies
//On the initial render, the returned function you’ll get from useCallback will be the function you passed.

// On the following renders, React will compare the dependencies with the dependencies you passed during the previous render. 
// If none of the dependencies have changed (compared with Object.is), useCallback will return the same function as before. 
// Otherwise, useCallback will return the function you passed on this render.


/**useId**/

//useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
// it does not take any argument, just returns a unique ID string associated with this particular useId call in this particular component.

/*Do not call useId to generate keys in a list */
