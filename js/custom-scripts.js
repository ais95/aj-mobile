//Navigation panel
$(document).ready(function(){
    
    //Nav panel slide In-Out
    var panelSlide = $("#panel-slide");
    $("#nav-panel").click(function(){
        $(panelSlide).css({"width":"100%","transition-delay":"0s"}).find(".nav-panel").css({"margin-left":"0px"});
    });    
    $("#close-panel").click(function(){
        $(panelSlide).css({"width":"0%","transition-delay":"0.5s"}).find(".nav-panel").css({"margin-left":"-300px"});
    });
    
    // Homepage search field focused
    var el = $(".search-container .search-box");
    $(el).focus(function(){
        $(".search-container").children(".map-marker").css("color", "#ff375f");
    });
    $(el).focusout(function(){
        $(".search-container").children(".map-marker").css("color", "#8e8e93");
    }); 
});


//Owl carousel
$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})


// Star ratings component
$(function() {
  $(".my-rating").starRating({
    initialRating: 0,
    starSize: 15,
	readOnly: true,
    totalStars: 5,
    strokeColor: 'black',
    starShape: 'rounded',
    emptyColor: '#999999',
    hoverColor: '#555555',
    activeColor: 'rgba(255, 189, 46, 1)',
    useGradient: false,
	disableAfterRate: true,
	    onHover: function(currentIndex, currentRating, $el){
		  console.log('index: ', currentIndex, 'currentRating: ', currentRating, ' DOM element ', $el);
		  $('.live-rating').text(currentIndex);
		},
		onLeave: function(currentIndex, currentRating, $el){
		  console.log('index: ', currentIndex, 'currentRating: ', currentRating, ' DOM element ', $el);
		  $('.live-rating').text(currentRating);
		}
  });
});


//Datepicker 
$(document).ready(function()
{
    $("#datepicker").datepicker({dateFormat: 'D, dd-M-yy'}).datepicker("setDate", new Date());
    if( $('#datepicker').val().length > 0 ) {
        $('.date-selector').addClass('hide-now');
        $('.date-change').removeClass('hide-now');
    }
});

$('#datepicker').change(function()
{
    if( $('#datepicker').val().length > 0 ) {
        $('.date-selector').addClass('hide-now');
        $('.date-change').removeClass('hide-now');
    }
});




//Number input validatio
$("input.qnty-input").keypress(function(event) {
  return /\d/.test(String.fromCharCode(event.keyCode));
});


//Count down/up
    $(".btn-count-up").click(function () {
      var $n = $(this).parent(".counter-pos").find(".qnty-input");
      var amount = Number($n.val());
      if (amount < 99) {
        $n.val(amount + 1);
      }
    });

    $(".btn-count-down").click(function () {
      var $n = $(this).parent(".counter-pos").find(".qnty-input");
      var amount = Number($n.val());
      if (amount > 0) {
        $n.val(amount - 1);
      }
    });
