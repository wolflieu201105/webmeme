// dữ liệu: tạo cấu trúc dữ liệu sao cho phù hợp với bài toán:
// VD: quản lý crush:
// thi online: user, đề thi, điểm thi

//cấu trúc: dễ dàng nâng cấp
// let crush = {
//     name: 'someone',
//     age: 20,
//     address: "HN",
//     eat: function() {
//         console.log('eat something');
//     }
// };

// let crush = {
//     name: 'someone',
//     age: 20,
//     address: "HN",
//     eat: function() {
//         console.log('eat something');
//     }
// };

// let crush = {
//     name: 'someone',
//     age: 20,
//     address: "HN",
//     eat: function() {
//         console.log('eat something');
//     }
// };

// let crush = {
//     name: 'someone',
//     age: 20,
//     address: "HN",
//     eat: function() {
//         console.log('eat something');
//     }
// };

class Crush {
    name;
    age;
    address;

    constructor(_name, _age, _address) {
        console.log('Tạo ra 1 crush', _name, _age, _address);
        this.name = _name;
        this.age = _age;
        this.address = _address;
    }
    //C1
    eat() {
        console.log('eat something');
    }
    introduce() {
        console.log(`Hello everyone, my name is ${this.name}, I am ${this.age} years old and currently living in ${this.address}`);
    }
}

let c1 = new Crush('someone', 20, 'HN');
c1.eat();
c1.introduce();
console.log(c1);
// let c2 = new Crush();
// let c3 = new Crush();
class Food {
    name;
    taste;
    time;
    chef;
    constructor(_name, _taste, _time, _chef){
        this.name = _name;
        this.taste = _taste;
        this.time = _time;
        this.chef = _chef;
    }
    introduce(){
        console.log(`this food is called ${this.name}, it is ${this.taste}, was made by ${this.chef}. The expiry date is ${this.time}`);
    }

    spoil(){
        console.log('đồ ăn này đã hết hạn');
    }
}
f1 = new Food('pizza', 'tasty af', '10/7/2021', 'me');
f1.introduce();
f1.spoil();
f2 = new Food('lemonade', 'sweet', '11/9/2022', 'cow');
f2.introduce();
f3 = new Food('Casu marzu', 'disgusting :D', 'null', "cheese' flies");
f3.introduce();

class boyCrush extends Crush {
    handsome;
    constructor(_name,_age,_address,_handsome){
        super(_name,_age,_address);
        this.handsome = _handsome;
        console.log('khai báo 1 boy crush');
    }
}
let someone = new boyCrush('someone',21,'HN','8/103');
console.log(someone);
//bên trên là kế thừa
//còn đa hình, trừu tượng, đóng gói

