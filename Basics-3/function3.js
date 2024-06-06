const obj={
  name: "Satyam",
  age:19,
  fun:function(){
    console.log(`${this.name} , Hello`)
    console.log(this)
  }
}

obj.fun()