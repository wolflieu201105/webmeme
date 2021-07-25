let caculator = document.createElement('div');
caculator.id = 'caculator';
caculator.innerHTML = `
<div>
    <input type="number" id="a" placeholder="a">
    <input type="number" id="b" placeholder="b">
</div>
<div>
    <button id="plus">+</button>
    <button id="minus">-</button>
    <button id="multiply">*</button>
    <button id="divide">/</button>
    <button id="exponential">^</button>
</div>`
export default function showCaculator(){
    document.getElementById('app').appendChild(caculator);
}
import { plus, minus, multiply, divide, exponential } from "./buoi2.js";
export function caculate(name){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let result = 0;
    if(name == 'plus'){
        result = plus(a,b);
    }
    else if(name == 'minus'){
        result = minus(a,b);
    }
    else if(name == 'multiply'){
        result = multiply(a,b);
    }
    else if(name == 'divide'){
        result = divide(a,b);
    }
    else if(name == 'exponential'){
        result = exponential(a,b);
    }
    console.log(result);
}