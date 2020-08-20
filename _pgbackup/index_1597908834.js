$(document).ready(function() {
    $('.slider').slider();
    $('.parallax').parallax();
   	$('.scrollspy').scrollSpy({
        getActiveElement: function(id){ console.log('this is the element: a[href="#' + id + '"]');});
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.modal-trigger').leanModal();
    $('.carousel').carousel();
    $('.side-btn').sideNav({
        onOpenStart: function(el){
           console.log('started');},
        onCloseStart: function(el){console.log('ended');}
    });
        //#$('.side-btn').click(function(){});
   
});


function updateSideBarButton(){
    var butt=document.getElementById("butt")
    butt.classList.toggle('opened');
    butt.setAttribute('aria-expanded', butt.classList.contains('opened'))
}


window.onscroll = function() {updateProgress()};
function updateProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("pgbar").style.width = scrolled + "%";
}