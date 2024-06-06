//Object literals

const mySym= Symbol("key")
const xyzUser={
  name: "Satyam ",
  age :22,
  [mySym] :"xyz",
  email : "imkryptonian11@gmail.com",
  isLoggedIn: true,
  lastLogin:["Monday", "Saturday"],
  "Full Name" : "Satyam Sahni",


}

console.log(xyzUser.name);
console.log(xyzUser["Full Name"]);
//console.log(xyzUser[mySym])
console.log(typeof mySym);

//we Can ovverride properties of objects using . keyword

xyzUser["Full Name"]="Satyam Kumar Sahni"

console.log(xyzUser)

//After freezing we cannot further make any changes to the object;

//Object.freeze(xyzUser)

xyzUser.age=29

const fun= function(){
  console.log(`Namaste ${xyzUser["Full Name"]}`)
  console.log(`Hii Your age is ${this.age}`)
}
console.log(fun())

//console.log(xyzUser)