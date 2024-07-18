// we craete a custom react App which shows us how the BTS code is executing 

//const mainContainer = document.querySelector('#root') => we hold the root div 

// const reactElement = {
//     type: "a",
//     props: {
//         href: "http://www.google.com",
//         target: "_blank"
//     },
//     children: "click me to visit Google"
// }  => this is the data we give 

// it change our data to this format [function customRender(reactElement , container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)

    // container.appendChild(domElement)

    // another version of it

//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     for (const prop in reactElement.props) {
//         if (prop === "children") continue
//         domElement.setAttribute(prop,reactElement.props[prop])
//         }
//     container.appendChild(domElement)
//     }
// ]
// this is custom React code and its custom Render 

// then finally it render our code, which is now in tree structure 
// customRender(reactElement, mainContainer)

// behind the scene in React we have a "transpiler"[Babel] which converts our data like this tree structure


/* How to Inject Variable in jsx , since jsx is html and we do need to inject varible */

// we can inject variable using {variable_name} => this is called Evaluated expression (final result)
// this does not hold if else and other statement , just final expression


/*Virtual DOM and React fiber */

// Virtual DOM is based on a algortihm which then does Reconciliation , it create  a Tree which is different from tree created by browser .

//But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.


// earlier when a single button/property is updated on browser => whole page reloads and update everything on the web pagebut with Virtual DOM (since it creates his own Tree of components ) it compares with the browser Tree and only update those components and state's which need to be updates (setState is used to update)

// when we use render in React it create a tree node and saved in a memory and move to rendering enviroment , which then compare to the web DOM and only setState those operation which are diffed

// React previously relied on a reconciliation process based on the Virtual DOM, but it now primarily uses the Fiber algorithm for more efficient updates. Fiber enables prioritized, interruptible work, leading to better performance in complex UIs and animations. 

/*But some values depends on network call so if we update a value it might get update immediately via a network call.
 So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
 The current algo used by the React is called the "React Fibre algo".
 The algo react uses to "differentiate" the web browser's tree and React's tree formed through create root is called "reconciliation."
 Reconciliation is the algo behind what popularly known as the Virtual-DOM. 
 
 in UI it is not necessary for every update to be applied immediately which cause framedrops , and degrades user Experience*/

//  in react if we use list to do some operations , we have to use "keys" to increase the efficiency of operations