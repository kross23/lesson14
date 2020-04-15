class DomElement {

    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
};
DomElement.prototype.render = function () {
    let bodyElement;
    if (this.selector[0] === '.') {
        let diV = document.createElement('div');
        diV.textContent = 'Our Class' + this.selector.slice(1);
        diV.classList.add(this.selector.slice(1));
        document.body.appendChild(diV);
        bodyElement = (diV);
        console.log('bodyElement: ', bodyElement);
    }
    if (this.selector[0] === '#') {
        let lem = document.createElement('p');
        lem.textContent = 'Our Class' + this.selector.slice(1);
        lem.id = this.selector.slice(1);
        document.body.appendChild(lem);
        bodyElement = (lem);
    }
    bodyElement.style.cssText = `
    
heigth:${this.height}px;
width:${this.width}px;
background-color:${this.bg}px;
fontSize:${this.fontSize}px;
`;
console.log('bodyElement: ', bodyElement);
};
let height = '80px';
let width = '80px';
let bg = '#444';
let palas = '.hai';
let fontSize = '14';
let dome = new DomElement('.hai','80px','80px', '#444', '14');

dome.render();