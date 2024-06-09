// we craete a custom react App which shows us how the BTS code is executing 

//const mainContainer = document.querySelector('#root') we hold the root div 

// const reactElement = {
//     type: "a",
//     props: {
//         href: "http://www.google.com",
//         target: "_blank"
//     },
//     children: "click me to visit Google"
// } this is the data we give 

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

// behind the scene in React we have a "transpiler"[Babel] ehich converts data like this tree


/* How to Inject Variable in jsx , since jsx is html and we do need to inject varible */

// we can inject variable using {variable_name} => this is called Evaluated expression (final result)
// this does nt hold if else and other statement , just final expression