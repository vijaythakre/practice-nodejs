// const sayHello = function(name) {
// 	return 'Hello! ' + name;
// }

// console.log(sayHello('Aman'));


//===========================

// const sayHello = (name) => {
// 	return 'Hello! ' + name;
// }

// console.log(sayHello('Aman'));

//===========================

// const sayHello = (name) => `Hello! ${name}`;

// console.log(sayHello('Aman'));

//===========================

// const sayHello = name => `Hello! ${name}`;

// console.log(sayHello('Aman'));


// ==============================
// const cameras = {
// 	price: 600,
// 	weight: 3000,
// 	myDes: function() {
// 		return `This is a canon Camera for Price ${this.price}`;
// 	}
// }

// console.log(cameras.myDes());

// ==============================
const cameras = {
	price: 600,
	weight: 3000,
	myDes: () => `This is a canon Camera for Price ${this.price}`
}

console.log(cameras.myDes());