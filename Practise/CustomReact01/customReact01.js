function CustomRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)

    if(typeof reactElement.children === "string") {
        domElement.textContent = reactElement.children 
    } else {
        for (const child  of reactElement.children) {
            CustomRender(child, domElement)
        }
    }

    for (const prop in reactElement.props) {
        if(prop === "children") continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: "div",
    props: {
    },
    children: [
        {
            type: 'h1', // Heading
            props: {},
            children: 'My Simple SPA'
          },
          {
            type: 'p', // Paragraph
            props: {},
            children: 'This is a paragraph explaining the content.'
          },
          {
            type: 'a', // Link
            props: {
              href: 'https://google.com',
              target: '_blank'
            },
            children: 'Click me to Visit Google'
          }
    ]
}

const mainContainer = document.getElementById("root")

CustomRender(reactElement, mainContainer)