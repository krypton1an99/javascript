const nums=[1,2,3,4,5,6,7,8,9,10]

const xyz=nums.map((op)=>{
  op=op+10
  return op
})

console.log(xyz)

//chaining 

const chain=nums.map((p)=>{
  p=p+10
  return p
}).filter((p)=>{
  if(p>13){
    return p;
  }
}).map((p)=>{
  p=p*11
  return p
})

console.log(chain)
