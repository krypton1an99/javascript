const myNums=[2,4,6]
//const acc=0
const p=myNums.reduce((acc, curval)=>{
  return acc+curval
},0)

//console.log(p)

const course=[{
  course:"javascript",
  price:999
},
{
  course:"python",
  price:499
},
{
  course:"c++",
  price:990
},
]

const total=course.reduce((acc,current)=>{
  return acc+current.price
},0)

console.log(total)