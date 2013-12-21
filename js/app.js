// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(function() {
  // Foundation
  $(document).foundation();

  // Check SVG
  if (!Modernizr.svg) {
    $(".logo img").attr("src", "/img/logo.png");
  }
  // Check Canvas
  // Check SVG
  if (!Modernizr.canvas) {
    $(".chart-wrapper").hide();
    $(".charts-no-svg").show();
  }

  // Charts
  $('.chart.one').easyPieChart({
    easing: 'easeOutBounce',
    scaleColor:	'#D0D0D0',
    barColor:	'#94C83D',
    size:		100,
    lineWidth:	12,
    lineCap:	'square',
    animate:  	2000,
    onStep: function(from, to, percent) {
      $(this.el).find('.percentage.one').text(Math.round(percent));
    }
  });
  var chart1 = window.chart1 = $('.chart1').data('easyPieChart');
  $('.chart.two').easyPieChart({
    easing: 'easeOutBounce',
    scaleColor:	'#D0D0D0',
    barColor:	'#94C83D',
    size:	200,
    lineWidth:	12,
    lineCap:	'square',
    animate:  	3500,
    onStep: function(from, to, percent) {
      $(this.el).find('.percentage.two').text(Math.round(percent));
    }
  });
  var chart2 = window.chart2 = $('.chart2').data('easyPieChart');
  $('.chart.three').easyPieChart({
    easing: 'easeOutBounce',
    scaleColor:	'#D0D0D0',
    barColor:	'#94C83D',
    size:	300,
    lineWidth:	12,
    lineCap:	'square',
    animate:  	7000,
    onStep: function(from, to, percent) {
      $(this.el).find('.percentage.three').text(Math.round(percent));
    }
  });
  var chart3 = window.chart3 = $('.chart3').data('easyPieChart');
});

// Email capture
$("#email").submit(function() {

  var url = "contact.php"; // the script where you handle the form input.

  $.ajax({
    type: "POST",
    url: url,
    data: $("#email").serialize(), // serializes the form's elements.
    success: function(data)
    {
      $("#email").fadeOut(300, function(){
        $("#result").hide().append("Thank you! We'll be in touch soon.").fadeIn();
      });
    }
  });

  return false; // avoid to execute the actual submit of the form.
});