'use strict';
let headerInput = document.querySelector('.header-input'),
    Add = document.querySelector('#add'),
    domic = document.querySelector('.domic');

class DomElement {
    element;
    constructor(nameClass, height, width, bg, fontSize) {
        this.selector = nameClass
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
     tochka  () {
        let cla =  this.selector.slice(1);
        this.element = document.createElement('div'); //document.createElement('li');
        this.element.classList.add(cla);
        this.element.style.cssText = ` 
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg}`;
            console.log('element: ', this.element);
            return this.element;
            
    }
    netochka  () {
        let atr =  this.selector.slice(1);
        this.element = document.createElement('p'); //newElement.setAttribute('id','idName')
        this.element.setAttribute('id', atr);
        this.element.style.cssText = ` 
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px`;

            return this.element;
        }
    dif  () {
        if (this.selector[0] === '.') {
            let div=this.tochka();
       return div;
        } else if (this.selector[0] === '#') {
            let pi=  this.netochka();
            return pi;
        }
    }
};

DomElement.prototype
let height = '80px';
let width = '80px';
let bgd = '#444';
let palas = '#hai';
let  fontSize= '14';
let dome = new DomElement(palas, height, width, bgd, fontSize);

let par = dome.dif();

console.log('par: ', par);

domic.append(par);