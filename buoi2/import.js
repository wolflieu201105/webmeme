// import { vietnam , vietnamlol , english } from "./buoi2.js";
// vietnamlol();
// vietnam();
// english();
// import hello, { vietnam}from "./buoi2.js";
// hello('Mèo');
// vietnam();
import print from "./buoi2.js";
print();
import showCaculator, {caculate} from "./center.js";
showCaculator();
const button = document.getElementsByTagName("button");
for(let i = 0; i < 5; i++){
    button[i].addEventListener("click", () => {
        console.log(button[i].id);
        caculate(button[i].id);
    })
}