'use strict';
let headerInput = document.querySelector('.header-input'),
    Add = document.querySelector('#add'),
    header = document.querySelector('.header');

const DomElement = function () {
    this.selector = '';
    this.height = 0;
    this.width = 0;
    this.bg = 0;
    this.fontSize = 0;
    this.element;
};
DomElement.prototype.addSelector = function (elem) {
    if (elem[0] === '.') {
        let cla = elem.slice(1);
        this.element = document.createElement('div'); //document.createElement('li');
        element.classList.add(cla);
        console.log('tempElem: ', this.element);

    } else if (elem[0] === '#') {
        let atr = elem.slice(1);
        this.element = document.createElement('p'); //newElement.setAttribute('id','idName')
        this.element.setAttribute('id', atr);
        console.log('tempElem: ', this.element);
    }

};
DomElement.prototype.addDom=function(event){
    event.preventDefault();
    this.element.innerText = headerInput.value;
    header.insertAdjacentElement('afterend', this.element);
    console.log('this.element: ', this.element);
};
DomElement.prototype.batton = function () {
   
    
    Add.addEventListener('click', this.addDom.bind(this));
};
const domelem = new DomElement();
domelem.addSelector('#class');
domelem.batton();