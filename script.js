'use strict';
let headerInput = document.querySelector('.header-input'),
    Add = document.querySelector('#add'),
    domic = document.querySelector('.domic');

    let domElement=class DomElement {
       element;
    constructor(nameClass,height, width, bg, fontSize) {

        
        // this.height = height;
        // this.width = width;
        // this.bg = bg;
        // this.fontSize = fontSize;
        // this.nameClass=nameClass;
        // this.element ;

        if(nameClass[0]==='.'){
            let cla = nameClass.slice(1);
            this.element = document.createElement('div'); //document.createElement('li');
            this.element.classList.add(cla);
            this.element.style.height=  height;
            this.element.style.width=  width;
            this.element.style.bg= bg;
            console.log('this.element: ', this.element);

        }else if(nameClass[0]==='#'){
            let atr = nameClass.slice(1);
            this.element = document.createElement('p'); //newElement.setAttribute('id','idName')
            this.element.setAttribute('id', atr);
            this.element.style.fontSize=fontSize;
            this.element.style.bg=bg;
    
        }
    }
    };
  
let height='80px';
let width='80px';
let bgd='#444';
let palas='.hai';

let dome = new domElement(palas,height,width,bgd);
console.log('dome: ', dome);
domic.append(dome);
