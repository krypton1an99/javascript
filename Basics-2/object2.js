const user= new Object() //singleton object

//to combine two or more objects;

const xyz ={1: "A", 2:"B", 3:"C"}

const xyz1 ={4: "A", 5:"B", 6:"C"}

const obj3=Object.assign({},xyz,xyz1)

console.log(obj3)

console.log(xyz)

//spread method 

const obj11={...xyz,...xyz1}

console.log(obj11)

//how to get key values of object

console.log(Object.keys(xyz))