function start() {
    var xmlhttp = new XMLHttpRequest();
    var contentDiv = document.getElementById("Content");
    xmlhttp.open("GET", "https://api.cobinhood.com/v1/market/currencies", true);
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            console.log(xmlhttp.responseText);
            contentDiv.innerText = xmlhttp.responseText
        }
    }
    //xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
    xmlhttp.send();
}