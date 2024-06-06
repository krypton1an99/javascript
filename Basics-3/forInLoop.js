const obj={
  name:"Satyam",
  midName:"Kumar",
  surName:"Sahni"

}

// console.log(obj)

for (const key in obj) {
  console.log(`${key} => ${obj[key]}`)
}