import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Chai is Ready!</h1>
        </div>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "http://www.google.com",
//         target: "_blank"
//     },
//     children: "click me to visit Google"
// }
// this wont work , this need to be in a tree structure, and babel cant transpile into it now since its not a element or a function

// this is not custom React and "render" is not doing custom render , so it follow some rules so this object cant be render now maily due to syntax

const appReady = (
    <a href="hhtp://www.google.com" target='_blank'>say Hello to Google</a>
)

// this proves that it (render) can render object but not Object with syntax like reactElement since React has different way to convert html in a tree structure which uses Babel 

// a way to write element as per React is
// how a variable is injected 
// since it also is html in js , so like in html we dont use ifelse and other js code , so the logic is same

const user2 = "Chai aur changa"

const reactElement = React.createElement("a",{
    href: "http://google.com", target: "_blank"
},"Dont Go to Google",user2
)
// so if we create element using React.createElement that it can convert to tree structure and Render it but otherwise => no

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
