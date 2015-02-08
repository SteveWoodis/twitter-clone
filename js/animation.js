$(document).ready(function(){
 $('#tweet-controls').css('display', 'none');
    var charLeft = 140;

$('.tweet-compose').on('focus', function(){
  $('#char-count').css('display', 'inline');
    $('#tweet-controls').css('display', 'inline');
    $('.tweet-compose').css('height', '5.0em');
})
$('.tweet-compose').on('keydown, keypress, keyup',function(){
  var remaining = 140;
    var rcolor = 130;
    var count = $('.tweet-compose').val().length;
    $('#char-count').text(remaining - count);
   
    if(count>rcolor){
        $('#char-count').css('color', 'red');
    }
    if(count>=remaining){
        $('#tweet-submit').css('display', 'none');
        $('#char-count').css('display', 'none');
    }
    else{
        $('#tweet-submit').css('display', 'inline');
        $('#char-count').css('display', 'inline');
    }
    
     
   })//end of charcount function
   
$('.button').on('click', function(){
 var ref = $('.tweet-compose').val(); 
    $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/damenleeturks.jpg"/><strong class="fullname">My BFF</strong><span class="username">@mybff</span><p class="tweet-text">' + ref + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg"/><img src="img/vklimenko.jpg"/></div></div>');
$('.tweet-compose').val('');
});
                  
 });




