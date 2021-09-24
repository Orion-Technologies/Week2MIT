//Declare a variable calld "counter" and set it to 0
var counter = 0;

//Write a function that increments the variable "counter" by 1 every time it is called
function contador(){
  counter++;
  console.log(counter);
}

//Schedule the execution og the function every 3 seconds
setInterval(contador, 3000);
