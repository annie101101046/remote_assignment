var button = document.getElementById('change-phrase'),
    content = document.getElementById('phrase');

button.onclick = function() {
    content.innerHTML = 'Have a Good Time!';
};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

<script type="text/javascript">
 jQuery(document).ready(function() {
// Hide the div
jQuery('#reveal').hide();
jQuery('.rv_button').click(function(e){
e.preventDefault();jQuery("#reveal").slideToggle();
jQuery('.rv_button').toggleClass('opened closed');
});
});
</script>