// console.log('Hi All !!!')

// var a = 100

// console.log(typeof(a));
// console.log(a + 40);

// a = "Hello";
// console.log(typeof(a));
// console.log(a + 40);

// a = true;
// console.log(typeof(a));

// a = null;
// console.log(typeof(a));

// a = undefined;
// console.log(typeof(a));

// // console.log('passcode is ',passcode)

// let passcode = "12345";

// console.log('passcode is ', passcode);
// if(passcode == 12345){
//     let passcode = 987656;
//     console.log('passcode is ', passcode);
//     console.log('Password Verified')
// }
// else{
//     console.log('Verification Failed')
// }
// console.log('passcode is ', passcode);

// if(passcode === 12345){
//     console.log('Password Verified')
// }
// else{
//     console.log('Verification Failed')
// }

// let a1 = null;
// let a2 = undefined;

// console.log('a1==a2',a1==a2);

// console.log('a1===a2',a1===a2);


// function sum(n1,n2){
//     return n1+n2;
// }

let num1 = 30;
let num2 = 20;
//let total = sum(num1,num2);

//console.log(`total of ${num1} and ${num2} is ${total}`);


// value of mysum is definition of function with the name sum
// let mysum = function sum(n1,n2){
//     return n1 + n2;
// }

// let total = mysum(num1,num2);
// console.log(`total of ${num1} and ${num2} is ${total}`);

function squareOfSum(sumfn, n,m){
    return sumfn(n,m) * sumfn(n,m)
}

// let sq = squareOfSum(function sum(n1,n2){
//     return n1 + n2;
// },num1,num2);

// let sq = squareOfSum((n1,n2)=>{
//     return n1 + n2;
// },num1,num2);


// let sq = squareOfSum((n1,n2)=>n1 - n2,num1,num2);

// console.log(`Square of Sum of ${num1} and ${num2} is ${sq}`);


// function processNumber(code, n){
    
//     return `The Processed Result is ${code(n)}`;
// }
// let result1 = processNumber(a=>a*a,10)

// console.log(result1);

// let result2 = processNumber(a=>a * a * a,10)

// console.log(result2);

// let result3 = processNumber((a)=>{
//     if(a%2==0){
//         return 'Even No.'
//     }
//     else{
//         return 'Odd No. '
//     }

// },10);

// console.log(result3)

// const pi = 3.14;
// console.log(pi);

// pi = 22/7;
// console.log(pi);


let cadet1 =  {
    name : "Anita",
    email : "anita@gmail.com",

    print : function(){
        console.log(`Name : ${this.name}`)
        console.log(`Email : ${this.email}`)
    }
}

console.log(cadet1.name);
console.log(cadet1.email);

cadet1.print();


function Cadet(name,email){
    this.name = name;
    this.email = email;

    this.printCadetRecord=()=>{
        return `Hello ${this.name} ${this.email}`
    }
}

console.log(Cadet);

let cadet2 = new Cadet('smita','smita@gmail.com')

console.log(cadet2);

console.log(cadet2.printCadetRecord());

console.log(typeof(cadet2));
console.log(cadet2.printCadetRecord);

class Product{
    constructor(id,name,description,category,stock){
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category
        this.stock = 30;
    }

    getProduct(){
        return `ID : ${this.id} Name : ${this.name} Description: ${this.description}`;
    }
}

let p1 = new Product(101,'Mobile','Samsung Mobile','Electronics');
console.log(p1.getProduct());

let prop = "id";
console.log(`Product Name : ${p1.prop}`)
console.log(`Product Id : ${p1[prop]}`);

console.log(p1);


console.log(Product.prototype)

Product.prototype.price = 240;

console.log(p1);

console.log(p1.price);

p1.price = 2450;

console.log(p1.price);

let p2 = new Product(102,'Watch','Titan','Accessories')

console.log(p2);

p2.__proto__.color = "black";
p2.rating = "5";
console.log(p2);

Product.prototype.price = 455;

console.log(Product);

let p3 = new Product(103,'Sun glasses','RayBan','Accessories')

console.log(p3);



