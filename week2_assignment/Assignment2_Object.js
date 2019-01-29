//In JavaScript, there are many different sets of syntax for creating objects. In the codes below, function parameters are encapsulated into an object, try using at least  two ways  to create a proper object as a parameter of the calculate function.
 
function calculate(args){ 
	let result;
	if(args.op==="+"){ 
		result=args.n1+args.n2;
	}else if(args.op==="-"){ 
		result=args.n1-args.n2;
  	}else{
		result="Not supported";
	}
	return result; 
}


let args1 = {
	op: '+',
	n1: 1,
	n2: 4,
}

let args2 = {}
args2.op = '-'
args2.n1 = 1
args2.n2 = 4

let A = function(op, n1, n2) {
	this.op = op
	this.n1 = n1
	this.n2 = n2
}

let a = new A('-', 1, 4)

class A {
	constructor(op, n1, n2) {
		this.op = op
		this.n1 = n1
		this.n2 = n2
	}
}

console.log(calculate(args1))
console.log(calculate(args2)



console.log (calculate(adddddd( 1 , 4)));
console.log(calculate(sub( 1 , 4)));



// Try to call calculate function correctly 

/*
For example, if we have an add function like this: function add(args){
return args.n1+args.n2; }
We can call it by passing an object created by JSON literal: add({n1:3, n2:4});
And, you should find another way to create a proper object. // your way
*/
