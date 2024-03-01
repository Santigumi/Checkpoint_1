import * as components from "./components/index.js"
import productsData from "./components/data/data.js"

class clothesContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow = [{mode: 'open'}]
    }

    static get observedAttributes(){
        return['id','title','description','value','inStock','image']
    }

    
    render(){
        productsData.forEach(element => {
        this.shadowRoot.innerHTML = `
        <clothes-target title="${this.title}" description="${this.description}" value="${this.value}" inStock="${this.inStock}" image="${this.image}"></clothes-target>
        `
        });  
    }
}

customElements.define("products-target", clothesContainer)
