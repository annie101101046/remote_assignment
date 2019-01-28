//1.Function and Array
//Complete the function below to find the  max number  of passing numbers. You may refer to this  MDN document  about rest parameters of the function.

function max(...numbers){
// your code here, for-loop method preferred
	var arr = [...numbers];
	var min = arr[0];
	var max = arr[0];
	var average = 0;

for(var i = 0; i < arr.length; i++) {
  if(arr[i] > max) max = arr[i];
}

return max;
}

var r = max(1, 2, 4, 5);  // result to 5 
var rr = max(5, 2, 7, 1, 6);  // result to 7


console.log(r);
console.log(rr);


