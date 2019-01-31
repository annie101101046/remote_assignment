//assignment1

function delayedResult(n1, n2, delayTime, callback) {
// your code here
	var number = (n1 + n2) + "(" + n1  + "+" + n2 + ")";
	function test() {
		callback(number);
	}
	var timeoutID = window.setTimeout(test, delayTime);
	console.log(timeoutID);
}

delayedResult(4, 5, 3000, function(result) {
	console.log(result);
});  // 9 (4+5) will be shown in the console after 3 seconds 


delayedResult(-5, 10, 2000, function(result) {
	window.alert(result);
});  // 5 (-5+10) will be shown in an alert dialog after 2 seconds



// //assignment1

// function delayedResult(n1, n2, delayTime, callback) {
// // your code here
// 	var number = (n1 + n2) + "(" + n1  + "+" + n2 + ")";

// 	var timeoutID = window.setTimeout(test, delayTime);
// 	function test() {
// 		callback(number);
// 	}
// }


// delayedResult(4, 5, 3000, function(result) {
// 	console.log(result);
// });  // 9 (4+5) will be shown in the console after 3 seconds 


// delayedResult(-5, 10, 2000, function(result) {
// 	window.alert(result);
// });  // 5 (-5+10) will be shown in an alert dialog after 2 seconds



// //assignment2
// var xmlhttp = new XMLHttpRequest();

// function ajax(src, callback){
// 	if(xmlhttp.readyState== 4 && xmlhttp.statis ==200){
// 			console.log(xmlhttp.responseText);
// 	}
// }

// function render(data){
// 	// your code here.
// 	var xmlhttp = new XMLHttpRequest();
// 	var contentDiv = document.createElement("div");
// 	xmlhttp:open("POST", "Demo", true);
// 	xmlhttp.onreadystatechange = ajax;
// 	xmlhttp.setRequestHeader("Content-Type", "https://cwpeng.github.io/live-records-samples/data/products.json)
// 	//  document.createElement()  and appendChild()  methods are preferred. }
	

// 	function(response){ render(response);
// 	});  // you should get product information in JSON format and render data in the page