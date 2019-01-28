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

// 1 way
	let result = {
 	 args:""
	};

	result.args = function(){
    if(args.op==="+"){ 
		result=args.n1+args.n2;
	}else if(args.op==="-"){ 
		result=args.n1-args.n2;
  	}else{
		result="Not supported";
	}
	return result; 
}

result.args();


// 2 way
	let result = {
	if(args.op==="+"){ 
		result=args.n1+args.n2;
	}else if(args.op==="-"){ 
		result=args.n1-args.n2;
  	}else{
		result="Not supported";
	}
	return result; 
}

function args() {
  result.args = result;
};


result.args(); 
	


// Try to call calculate function correctly 

/*
For example, if we have an add function like this: function add(args){
return args.n1+args.n2; }
We can call it by passing an object created by JSON literal: add({n1:3, n2:4});
And, you should find another way to create a proper object. // your way
*/