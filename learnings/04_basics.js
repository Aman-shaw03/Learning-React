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

/*when using React why shouldnt we use "a" tag and what to use instead of it? */

/* A tag require the web page to reload but React is there so we dont have to reload the whole page and paint the 
picture again and again , instead we compare it to our tree and inject the diff and also this is why we dont prefer 
"a" tag in react , one of the reason for using REACT

instead we use link tag and nav link tag for same feature with additional things */

/*useRef */

// we use this hook to take a reference of a value. 
// This object persists across renders and can be used to store values that don't need to trigger re-renders.
// A current property: This property holds the value you want to persist. 
// It can be any type of data (object, array, primitive, etc.).
