/* Today i learn how to install tailwind with its dev dependencies  */

/* props = when we create a function for any element(card, button) in react it accept a props(properties)
which we can use to pass details , so it would take lesser time to create same type of elements 
or simply pass {channel,btnText} and use them  */

/*ALso explore devUI.io */

/* one of the intervie question: on React 

create a counter with 2 button add value and remove value.
 */

/* <h2>Counter: {counter}</h2>
<button onclick="addValue">Add Value: {counter}</button>
<button onclick="removeValue">Remove Value: {counter}</button>

<script>
  function App(){
    let [counter , setCounter] = useState(15)
    const addValue = ()=> {
        setCounter(counter + 1)

    }
    const removeValue= ()=>{
      setCounter(counter - 1 )
    }
  }
</script> */

// Interviewer :- what if you do       
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)

        // will this add the value 4 times ? if the initial value is 15 ..what is the new value 
        // answer is the new value is 16
        /*in React  if there are multiple setstate then react will batch this updates and que them first,then process it accordingly and react will update all the values in the next render.The reason react does this is for performance optimization because if our component renders after each update then it's not really good performance wise so react will batch these updates and just perform one render. */

        // counter will change in this 
        const addValue = ()=> {
            setCounter(prevCounter => prevCounter + 1)
            setCounter(prevCounter => prevCounter + 1)
            setCounter(prevCounter => prevCounter + 1)
            setCounter(prevCounter => prevCounter + 1)
    
        }


        
     /* Detailed explaination of why does first syntax only updates the count once:
        Initial State: Assume count is initially 69.
        First Call: setCount(count + 1) schedules a state update to set count to 70 (69 + 1).
        Second Call: setCount(count + 1) schedules another state update to set count to 70 (69 + 1), because count is still 69 in this scope.
        Third Call: setCount(count + 1) schedules yet another state update to set count to 70 (69 + 1), again because count is still 69 in this scope.
        The set function only updates the state variable for the next render.
        calling the set function does not update the age state variable in the already running code.

        In case of functional updater syntax React ensures that changes are made to the latest state of the count hence each function gets access to the latest state of the count variable:
        First Call: setCount(count =>count+1) schedules a state update to set count to 70
        Second Call : schedules a state update to set count to (70+1) because count is now 70 in this scope and so on...
        
        and since we are doing as a callback function (yes we dont have to write like this ()=> {})
            after callback another call/render is happen which update the values from (69 to 70 to ....)
            due to this callback function it updates the values and provides us previous state/vals to add/subtract more*/

          // updater function. It takes the pending state and calculates the next state from it.

          // React puts your updater functions in a queue. Then, during the next render, it will call them in the same order

      /* Great under the hood of stateCounter , def go through the async with this part */