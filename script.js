var tags = [
    'Front-end web developer',
    'Graphic designer',
    'Creative',
    'Australian',
    '33/M/Sydney\'s East',
    'More doge person than pusheen person',
    'Level 8 Fighter-wizard',
    'Freelance all-rounder',
    'Ready to mingle, give me a jingle',
    'Desktop publisher',
    'Sherlock to your Watson',
    'Hot sauce for your digital burrito',
    'Aspiring space tourist',
    'Lightbulb engineer',
    'Gamer and gamifier',
    'Not quite full-stack but more than one pancake',
    'Click me one more time, I dare you',
    'Amateur beach volleyballer'
];

var caption = tags[0];
var captionLength = 0;
var busy = 0;

$(document).ready( function() {
    $('.tagline, #cursor').click( function() {
        var newTag = tags[Math.floor(Math.random() * tags.length)];
        $('.tagline').html(newTag);
    });

//    $('.tagline').html(tags[0]);    

    setInterval ('cursorAnimation()', 600);
    captionEl = $('#tagline');
  
    $('#tagline').click(function(){
     if(!busy) {
       busy = 1;
      caption = captionEl.html();
      captionLength = caption.length;
      erase();
        setTimeout('startType()', 1000);
     }
    });
  
    type();    
    
});


function startType() {
  randomCaption();
  type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 40);
    } else {
        captionLength = 0;
        caption = '';
        busy=0;
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 20);
    } else {
        captionLength = 0;
        caption = '';
    }	
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function randomCaption() {
  var newTag = tags[Math.floor(Math.random()*tags.length)];
  caption = newTag;
}