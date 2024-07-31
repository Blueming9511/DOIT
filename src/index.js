import _ from 'lodash';
import './style.css';
import printMe from './print';

 function component() {
   const element = document.createElement('div');
   const button = document.createElement('button');

   button.innerHTML = "fuck me"
   button.onclick = printMe

   element.appendChild(button)

   return element;
 }

 document.body.appendChild(component());