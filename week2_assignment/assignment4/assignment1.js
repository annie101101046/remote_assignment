document.addEventListener('DOMContentLoaded', function(){
var myBanner = document.getElementById('banner');
myBanner.addEventListener('click', () => {
  myBanner.innerHTML = "<p>Have a Good Time!</p>";  
});
}, false);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

            
    function toggle_visibility() {
       var e = document.getElementById('iii');
       if(e.style.display == 'block'){
          e.style.display = 'none';
       }
       else{
          e.style.display = 'block';
       }
    }

