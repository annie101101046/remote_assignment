function ajax(src, callback){
// your code here
	var data;
	var req = new XMLHttpRequest();
	
	/*
	data.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log('this', this);
			callback();
		}
	};
	*/
	req.addEventListener('load', function(event) {
		callback(event.target.responseText);
	})

	req.open("GET","https://cwpeng.github.io/live-records-samples/data/products.json", true);
	req.send();
}

function render(data){
	data = JSON.parse(data);
	var newTb = document.createElement("table");
	var newTr = document.createElement("tr")
	// newTr.innerHTML = '<td>`$`</td>' 記得看

	var newThName = document.createElement("th");
	var newThPrice = document.createElement("th");
	var newThDes = document.createElement("th");


	newThName.textContent = 'name';
	newThPrice.textContent = 'price';
	newThDes.textContent = 'description';
	newTr.innerHTML = newThName.outerHTML + newThPrice.outerHTML + newThDes.outerHTML
	newTb.appendChild(newTr);
	document.body.appendChild(newTb); 


	for (i = 0; i <data.length; i++ ){
	let newTr = document.createElement("tr")
	let newTdName = document.createElement("td")
	let newTdPrice = document.createElement("td")
	let newTdDes = document.createElement("td")
	let tdName = data[i].name
	let tdPrice = data[i].price
	let tdDes = data[i].description
	newTdName.textContent = tdName
	newTdPrice.textContent = tdPrice
	newTdDes.textContent = tdDes
	newTr.appendChild(newTdName)
	newTr.appendChild(newTdPrice)
	newTr.appendChild(newTdDes)
	newTb.appendChild(newTr)
}



	// document.write(data)
	// var newTr = document.createElement("tr");
	// var newTd = document.createElement("td");
	// var newTb = document.createElement("table");
	// var newContent = document.createTextNode("name");

	// newTd.appendChild(newContent); 
 // 	newTr.appendChild(newTd);

	// newContent = document.createTextNode("price");
	// newTd.appendChild(newContent);
	// newTr.appendChild(newTd);
 // 	newTb.appendChild(newTr);


 // 	newContent = document.createTextNode("description");
	// newTd.appendChild(newContent);
	// newTr.appendChild(newTd);
 // 	newTb.appendChild(newTr);


	// for (i = 0; i <data.length; i++ ){
	// newTr = document.createElement("tr")
	// newTd = document.createElement("td")
	// newContent = document.createTextNode(data[i].name)
	// newTd.appendChild(newContent)
	// newTr.appendChild(newTd)
	// newTb.appendChild(newTr)
	// }


	// for (i = 0; i <data.length; i++ ){
	// newTr = document.createElement("tr")
	// newTd = document.createElement("td")
	// newContent = document.createTextNode(data[i].price)
	// newTd.appendChild(newContent)
	// newTr.appendChild(newTd)
	// newTb.appendChild(newTr)
	// }


	// for (i = 0; i <data.length; i++ ){
	// newTr = document.createElement("tr")
	// newTd = document.createElement("td")
	// newContent = document.createTextNode(data[i].description)
	// newTd.appendChild(newContent)
	// newTr.appendChild(newTd)
	// newTb.appendChild(newTr)
	// }

	
	
	document.innerHTML = data;
// your code here.
//  document.createElement()  and appendChild()  methods are preferred. 
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", 
function(response){ 
	render(response);
});  







 // you should get product information in JSON format and render data in the page

