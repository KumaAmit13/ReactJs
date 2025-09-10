// console.log((new Date().toLocaleString()).split(",")[1]);

// let arr=Array.of(32,0,23,23,23,34,32,2)
// arr.sort()
// console.log(Math.abs(-1))
var name="as"
function hh(){

// console.log(obj1.wle());
}
// name="Amit";
// console.log(this)
this.name="kii"

let obj1={
    name:"jnaj",
    name1:"jnaj",
    getname:function (){
        console.log(this.name)
    }
}

let obj2={
    __proto__:obj1
}
console.log(obj2.name)
// console.log(Object.freeze(obj1))
// console.log(Object.setPrototypeOf(obj1))
// console.log(Object.getOwnPropertyDescriptor(obj1,"name1"))

// console.log({}==1)

// function outer() {
//     this.name = "Amit";

//     const a = () => {
//                         console.log(this.name,"asas");

//          const b = () => {
//             const c = () => {
//                 console.log(this.name,"asas");
//             };
//             c();
//         };
//         b();
//     };
//     a();
// }

// outer.call({ name: "jnaj" }); 
// // Output → "jnaj"
