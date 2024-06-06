const sum = (a,b)=>{
  return a+b
}

console.log(sum(4,8));

//iife

(function xyz(){
  //named iife
  console.log("Hello")
})();

(
  (name)=>{
    //unnamed iife with paramater
    console.log(`${name} , Hello`)
  }
)("satyam")