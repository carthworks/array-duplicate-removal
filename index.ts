// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var ArrList= [23,45,56,23,89,10];

console.log(ArrList);
var ArrListResult =[];

ArrList =   ArrList.filter(function(elem, index, self) {

  console.log(elem + ' =>  ' + self + ' =>  '+ index);
        return index === self.indexOf(elem);
    });

console.log(ArrListResult);
// "#"+((1<<24)*Math.random()|0).toString(16)
appDiv.innerHTML = ArrList.toString();