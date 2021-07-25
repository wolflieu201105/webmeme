// export function vietnam() {
//   console.log('Xin Chào');
// }
// export function english() {
//   console.log('hello');
// }
// export function vietnamlol() {
//   console.log('lô con Hiếu');
// }
// export const PI = 3.14;
// // export : xuất ra tính năng cho module dùng
// // export default : xuất ra tính năng chính của module, tối đa 1
// export default function hello(name){
//   console.log("Hello "+ name);
// }
export function plus(a, b) {
  console.log(a + b);
}
export function minus(a, b) {
  console.log(a - b);
}
export function multiply(a, b) {
  console.log(a * b);
}
export function divide(a, b) {
  if (b == 0) {
    console.log('0')
  }
  else {
    console.log(a / b);
  }
}
export function exponential(a, b) {
  console.log(a ** b);
}
export default function print() {
  console.log('This is a khá xịn caculator')
}