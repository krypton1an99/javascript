const xyz=["abc", "cpp", "hjk", "ncv"]

xyz.forEach(function (abc){
  //console.log(abc)
})

//console.log(xyz)

//const xyz1=["1", 1,"abc", true,"satyam", 320]

xyz.forEach((xy,i)=>{
  //console.log(xy,i)
})


const arr=[
  {
  langauage:"javascript",
  filename:".js"
},
{
  langauage:"c++",
  filename:".cpp"
},
{
  langauage:"python",
  filename:".py"
}
]

arr.forEach((xyz,abc)=>{
  console.log(xyz.filename)
  console.log(xyz.langauage)
  console.log(abc);
})
