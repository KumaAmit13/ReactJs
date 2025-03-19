function customRender(element, container) {
    const domElement=document.createElement(element.type);
    domElement.textContent=element.children;
    //if props exist setting attributes
    for (let prop in element.props) {
        if(prop == "children")continue;
        domElement.setAttribute(prop,element.props[prop]);
       
    }
    container.appendChild(domElement);


   /* const domElement = document.createElement(element.type);
    
    // Set children safely
    domElement.textContent = element.children;
    
    // Check if props exist before setting attributes
    if (element.props) {
        Object.keys(element.props).forEach(prop => {
            domElement.setAttribute(prop, element.props[prop]);
        });
    }
    
    container.appendChild(domElement);*/

}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
