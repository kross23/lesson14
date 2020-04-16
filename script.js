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
        diV.textContent = 'Это div  - ' + this.selector.slice(1);
        diV.classList.add(this.selector.slice(1));
        document.body.appendChild(diV);
        bodyElement = (diV);
        console.log('bodyElement: ', bodyElement);
    }
    if (this.selector[0] === '#') {
        let lem = document.createElement('p');
        lem.textContent = 'это параграф  -  ' + this.selector.slice(1);
        lem.id = this.selector.slice(1);
        document.body.appendChild(lem);
        bodyElement = (lem);
        console.log('lem: ', lem);
    }
    bodyElement.style.cssText = `
    height: ${this.height}px;
      width: ${this.width}px;
      background-color: ${this.bg};
      font-size: ${this.fontSize}px;
`;
    console.log('bodyElement: ', bodyElement.style);//height:
};

let dome = new DomElement('.hai', '500', '500', 'steelblue', '34');

dome.render();