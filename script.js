'use strict';
let headerInput = document.querySelector('.header-input'),
    Add = document.querySelector('#add'),
    domic = document.querySelector('.domic');

class DomElement {
    constructor(nameClass, height, width, bg, fontSize) {
        this.selector = nameClass
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
     tochka  () {
        let cla =  this.selector.slice(1);
        let element = document.createElement('div'); //document.createElement('li');
        element.classList.add(cla);
        element.style.cssText = ` 
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg}`;
            console.log('element: ', element);
            return element;
    }
    netochka  () {
        let atr =  this.selector.slice(1);
        let element = document.createElement('p'); //newElement.setAttribute('id','idName')
        element.setAttribute('id', atr);
        element.style.cssText = ` 
            height: ${height}px;
            width: ${width}px;
            background: ${bg};
            font-size: ${fontSize}px`;
    }
    dif  () {
        if (this.selector[0] === '.') {
            this.tochka();
        } else if (this.selector[0] === '#') {
        this.netochka();
        }
    }
};

DomElement.prototype
let height = '80px';
let width = '80px';
let bgd = '#444';
let palas = '.hai';
let  fontSize= '14';
let dome = new DomElement(palas, height, width, bgd, fontSize);
console.log('dome: ', dome);
let par=dome.dif();
console.log('par: ', par);

console.log('domic: ', domic);
domic.append(par);