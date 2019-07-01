
$('.toggle-btn').click(function () {
    
    $('body').toggleClass('darkmode')
    
});



// accordion

$( "#accordion" ).accordion({
    heightStyle: "content",
    collapsible: true
});




var player1 = videojs('player1');
var player2 = videojs('player2');
var player3 = videojs('player3');
var player4 = videojs('player4');
var player5 = videojs('player5');

var play1 = $('#play1');
var play2 = $('#play2');
var play3 = $('#play3');
var play4 = $('#play4');
var play5 = $('#play5');

var terug1 = $('#terug1');
var terug2 = $('#terug2');
var terug3 = $('#terug3');
var terug4 = $('#terug4');
var terug5 = $('#terug5');

var check1 = $('#check1');
var check2 = $('#check2');
var check3 = $('#check3');
var check4 = $('#check4');
var check5 = $('#check5');

var checked1 = $('#checked1');
var checked2 = $('#checked2');
var checked3 = $('#checked3');
var checked4 = $('#checked4');
var checked5 = $('#checked5');
var time;



player1.on('ready', function() {

  play1.click (function(){
    if (!player1.paused() ){
      player1.pause(); 
    }
      else {
        player1.play();
      }   
  });

    terug1.click (function(){
    var time = player1.currentTime();
      
      player1.currentTime(time -10);
  });

    check1.click(function () {
        checked1.css({
            'opacity': "1"
        });        

    });
    
});





player2.on('ready', function() {

  play2.click (function(){
    if (!player2.paused() ){
      player2.pause(); 
    }
      else {
        player2.play();
      }   
  });

  terug2.click (function(){
    var time = player2.currentTime();
      
      player2.currentTime(time -10);
  });

   
    check2.click(function () {
        checked2.css({
            'opacity': "1"
        });
    });
    
});





player3.on('ready', function() {

  play3.click (function(){
    if (!player3.paused() ){
      player3.pause(); 
    }
      else {
        player3.play();
      }   
  });

  terug3.click (function(){
    var time = player3.currentTime();
      
      player3.currentTime(time -10);
  });

   
    check3.click(function () {
        checked3.css({
            'opacity': "1"
        });
    });
    
});




player4.on('ready', function() {

  play4.click (function(){
    if (!player4.paused() ){
      player4.pause(); 
    }
      else {
        player4.play();
      }   
  });

  terug4.click (function(){
    var time = player4.currentTime();
      
      player4.currentTime(time -10);
  });

   
    check4.click(function () {
        checked4.css({
            'opacity': "1"
        });
    });
    
});








player5.on('ready', function() {

  play5.click (function(){
    if (!player5.paused() ){
      player5.pause(); 
    }
      else {
        player5.play();
      }   
  });

  terug5.click (function(){
    var time = player5.currentTime();
      
      player5.currentTime(time -10);
  });

   
    check5.click(function () {
        checked5.css({
            'opacity': "1"
        });
    });
    
});







//
//console.log (time);
// 
//});
