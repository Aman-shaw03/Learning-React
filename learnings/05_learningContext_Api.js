// In this part i will explain what is the use of contextAPI in react and what problem it solves , How it solve and Other similar Toolkits to use 

/*So before we start , lets create a mind diagram
suppose our app calls database and gets a variable/prop lets say it "userName" and that APP has some functionalities
home page , admin page , different components in admin page and in one one component of admin page ,there is a card which require this "userName" prop  */

// so before , when React is New the solution for this case would be => pass the prop to app => pass it to admin => pass it to every component => pass it to every card => finally our card which require it , get access to this prop

// Now , it was very inefficicent to pass all this props without proper usage , this solution reuire some sort of state management
//  its called prop drilling [ In React, Props Drilling is a practice in which a prop or data is passed from one
//  parent component to one or lower children's components, resulting in multiple levels of the component tree]

/*A Efficient solution to this would be to when we are calling for DB for prop "userName" and then App pass this 
prop to a global enviroment file and then the card which requires this prop can have direct access to this prop from Global access 
we dont have to drill this prop in multiple components => and this is what Context API actually does 

some alternative options for Context API would be :- Redux , reduxToolkit(RKT) which handle the state of props and also zustand 
*/

// A Not-correct way to this problem will be => craete a file name global.js and put the prop/variable there and import it where we want to access it , but this result in soo many error, lets say a prop is using in 2 comp and 1 comp from change the value and then error will be there , for undefined state 

//context api is a library