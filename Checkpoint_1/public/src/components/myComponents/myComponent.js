class Clothes extends HTMLElement {

    constructor(){
        super();
        this.attachShadow = [{mode:'open'}]
    }

    static get observedAttributes(){
        return['id','title','description','value','inStock','image']
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./myComponent.css">
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        <p>${this.value}</p>
        <p>${this.inStock}</p>
        <img>${this.img}</img>
        `
    }
}

customElements.define("clothes-target",Clothes)
export default Clothes