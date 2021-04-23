/*##################################################*/
/* Body function handling resizing  */
/*##################################################*/
$(window).on('resize', function(){
  var winWidth = $(this)[0].innerWidth;
  console.log(winWidth);

  $("body").css({
    "max-width": winWidth
  });

});


/*##################################################*/
/* Mouse Div Size  */
/*##################################################*/

// The mouse div will follow the mouse according to the below
$(document).on('mousemove', function(e){
  var ran = e.pageX + 1.5 * e.pageY;
  var rotate1 = 'rotate(' + ran + 'deg)'; // Rotation effect var

  $('.mouseDiv').css({
    left:  e.pageX + 3,
    top:   e.pageY + 3,
  });
});

// The mouse div will disappear outside the viewport and reappear when within the viewport
$(document).hover(
  function () { }, function () { // mouse leave
    $(".mouseDiv").removeClass("mouseDiv-fontNorm");
    $(".mouseDiv").addClass("mouseDiv-font0");
  }
);

// The mouse div will disappear within the anchor links and reappear when not over the anchor links
$('.indexQuote a').hover(
  function () { // Mouse enter
    $(".mouseDiv").removeClass("mouseDiv-font0");
    $(".mouseDiv").addClass("mouseDiv-fontNorm");
  }, function () { // mouse leave
    $(".mouseDiv").removeClass("mouseDiv-fontNorm");
    $(".mouseDiv").addClass("mouseDiv-font0");
  }
);

$('.titleBar').hover(
  function () { // Mouse enter
    $(".mouseDiv").removeClass("mouseDiv-font0");
    $(".mouseDiv").addClass("mouseDiv-fontNorm");
  }, function () { // mouse leave
    $(".mouseDiv").removeClass("mouseDiv-fontNorm");
    $(".mouseDiv").addClass("mouseDiv-font0");
  }
);

$('.boxQuote').hover(
  function () { // Mouse enter
    $(".mouseDiv").removeClass("mouseDiv-font0");
    $(".mouseDiv").addClass("mouseDiv-fontNorm");
  }, function () { // mouse leave
    $(".mouseDiv").removeClass("mouseDiv-fontNorm");
    $(".mouseDiv").addClass("mouseDiv-font0");
  }
);


/*##################################################*/
/* Animations upon opening the website */
/*##################################################*/

// If we have already scrolled past the position of the key divs, they will open when refreshing the page if we are already past the position.
ifKeyDivsAreOnScreen();

// Animation on the div2 main images
imageFilt(0);

// Reveal the logo when opening the website
var offset = 0;
var winWidth = $(this)[0].innerWidth;
console.log(winWidth);

$("body").css({
  "max-width": winWidth
});

setTimeout(function () {
  $(".myLogo").removeClass("hiddenPadding offblink").addClass("expandPadding onLink");
}, offset + 1000);


// Reveal the links and navbar toggler when opening the website
var i;
for (i=0; i< 7; i++) {
  linkReveal(offset + 1200, i);
}

setTimeout(function () {
  $(".titleBar").removeClass("offblink").addClass("onLink");
  $(".navbar").removeClass("offblink").addClass("onLink");
  $(".titleBar .navbar-toggler").removeClass("offblink").addClass("onLink");
}, offset + 1200);

sideWipe(2200);

// Animate the logo after revealing it
titleSparkle(4700);

// Animate the Quote revealing for each page when it is necessary to reveal
setTimeout(function () {
  $(".IndexLgContainer div.indexQuote").removeClass("displayNone").addClass("displayQuote");
  $(".pg2LgContainer div.boxQuote").removeClass("displayNone").addClass("displayQuote");
  $(".pg2LgContainer div.boxQuote").removeClass("displayNone").addClass("displayQuote");
}, 1500);

// Animate the box shadow for the Quote for each page
boxshadowEff(4600);


/*##################################################*/
/* Effects and Animations going on intervals */
/*##################################################*/

// The title, links bar, Quote box shadow and side wipes (vertical lines) used throughout will go on interval.

setInterval(function() {
  titleSparkle(0);
  boxshadowEff(8000);
  linksAnimate(2000);
  sideWipe(2000);
}, 12000);


/*##################################################*/
/* Effects and Animations going on hover */
/*##################################################*/

// The title will animate if the mouse moves over it.
$(".myLogo span").hover(function () {
  titleSparkle(100);
});

// The Quotes box shadow will animate if the mouse moves over it.
$(".pg2LgContainer .boxQuote").hover(function () {
  boxshadowEff(100);
});
$(".IndexLgContainer .indexQuote").hover(function () {
  boxshadowEff(100);
});
$(".pg2LgContainer .boxQuote").hover(function () {
  boxshadowEff(100);
});


/*##################################################*/
/* Effects and Animations going on click */
/*##################################################*/

$(".RevealCard .container-fluid .card.Text").on("click", function () {
  var card_text = $(".RevealCard .container-fluid .card.Text .card-text");
  var plusFa = $(".RevealCard .container-fluid .card.Text .fas.fa-plus");

  if (!plusFa.hasClass("plusHide")) {
    plusFa.addClass("plusHide");
    card_text.addClass("textReveal");

  } else if (plusFa.hasClass("plusHide")) {
    card_text.removeClass("textReveal");
    plusFa.removeClass("plusHide");
  }
});


/*##################################################*/
/* Effects and Animations going on scroll */
/*##################################################*/

// 001-Index.html function to move the quote line at the top in parallax
var startOfPage = true;
var distanceFromTop = -1;
$(document).on( "scroll", function () {
  // Offset is if we don't want to identify the element until it is already more than offset pixels into the viewport

  if (startOfPage) {
    if ($('.lgContainerDiv').length > 0) {
      distanceFromTop = $('.lgContainerDiv').offset().top;;
    }
    if ($('.TwoColSec').length > 0) {
      distanceFromTop2 = $('.TwoColSec').offset().top;
    }
    startOfPage = false;
  }

  let intViewportHeight = window.innerHeight;

  var newPosition = 50 - (($(window).scrollTop() - distanceFromTop) / intViewportHeight) * 45 + "%";

  var newPosition1 = 50 - (($(window).scrollTop() - distanceFromTop) / intViewportHeight) * 25 + "%";

  var newDimensions = (100 + ($(window).scrollTop() - distanceFromTop) * 20) + "% " + (120 + ($(window).scrollTop() / intViewportHeight) * 20) + "%";

  //newDimensions = "top " + (($(window).scrollTop() / intViewportHeight) * 10) + "%";

  $(".indexQuote").css({
    "top":   newPosition
  });
  // console.log(newPosition);

  $(".boxQuote").css({
    "top":   newPosition1
  });


});

$(document).on( "scroll", function () {
  ifKeyDivsAreOnScreen();
});

function linkReveal(offset, i) {
  setTimeout(function () {
    $(".titleBar li").eq(i).removeClass("offblink").addClass("onLink");
  }, offset + i * 200);
}

function titleSparkle(offset) {
  setTimeout(function () {
    $(".myLogo").addClass("blink");
  }, offset + 0);

  setTimeout(function () {
    $(".myLogo").removeClass("blink");
  }, offset + 2000);
}

function boxshadowEff(offset) {
  var TO;

  TO = setTimeout(function () {
    $(".IndexLgContainer .indexQuote").remove("qtextShadow").addClass("qtextShadowHover");

    $(".pg2LgContainer .boxQuote").addClass("boxShadowExp").addClass("qtextShadowHover");
  }, offset + 100);

  TO = setTimeout(function () {
    $(".IndexLgContainer .indexQuote").removeClass("qtextShadowHover").addClass("qtextShadow");

    $(".pg2LgContainer .boxQuote").removeClass("boxShadowExp").removeClass("qtextShadowHover");
  }, offset + 3000);
}

function imageFilt(offset) {
  setTimeout(function () {
    $(".IndexLgContainer .container-fluid").removeClass("lgContainerInit").addClass("lgContainerFinal");
    $(".pg2LgContainer .container-fluid").removeClass("lgContainerInit").addClass("lgContainerFinal");
    $(".pg3LgContainer .container-fluid").removeClass("lgContainerInit").addClass("lgContainerFinal");
    $(".pg4LgContainer .container-fluid").removeClass("lgContainerInit").addClass("lgContainerFinal");
    $(".pg5LgContainer .container-fluid").removeClass("lgContainerInit").addClass("lgContainerFinal");
    $(".pg6LgContainer .container-fluid").removeClass("lgContainerInit").addClass("lgContainerFinal");

  }, offset + 0);

  setTimeout(function () {
    $(".lgContainerDiv .container-fluid").removeClass("transition1").addClass("transition2");

  }, offset + 3000);
}

function linksAnimate(offset) {
  setTimeout(function () {
    $(".titleBar .navbar-toggler").removeClass("onLink").addClass("offblink");
  }, offset);

  setTimeout(function () {
    $(".titleBar .navbar-toggler").removeClass("offblink").addClass("onLink");
  }, offset + 5000); // offset + 1000);

  for (i=0; i< 7; i++) {
    linkBlink(offset, i);
  }
}

function linkBlink(offset, i) {
  setTimeout(function () {
    $(".titleBar li").eq(i).removeClass("onLink").addClass("offblink");
  }, offset + i * 150);
  setTimeout(function () {
    $(".titleBar li").eq(i).removeClass("offblink").addClass("onLink");
  }, offset + 2000 + i * 200);
}

function sideWipe(offset) {
  setTimeout(function () {
    $(".sideWipe").removeClass("leftSideWipe").addClass("rightSideWipe");
    $(".sideWipe1").removeClass("leftSideWipe").addClass("rightSideWipe");
    $(".sideWipe2").removeClass("leftSideWipe").addClass("rightSideWipe");

    $(".vertWipe").eq(0).removeClass("upVertWipe").addClass("downVertWipe");
    $(".vertWipe").eq(1).removeClass("downVertWipe1").addClass("upVertWipe1");

    $(".vertWipe").eq(2).removeClass("upVertWipe").addClass("downVertWipe");
    $(".vertWipe").eq(3).removeClass("downVertWipe1").addClass("upVertWipe1");

  }, offset + 0);

  setTimeout(function () {
    $(".sideWipe").removeClass("rightSideWipe").addClass("leftSideWipe");
    $(".sideWipe1").removeClass("rightSideWipe").addClass("leftSideWipe");
    $(".sideWipe2").removeClass("rightSideWipe").addClass("leftSideWipe");
    $(".vertWipe").eq(0).removeClass("downVertWipe").addClass("upVertWipe");
    $(".vertWipe").eq(1).removeClass("upVertWipe1").addClass("downVertWipe1");

    $(".vertWipe").eq(2).removeClass("downVertWipe").addClass("upVertWipe");
    $(".vertWipe").eq(3).removeClass("upVertWipe1").addClass("downVertWipe1");
  }, offset + 4000); // offset + 2500);

  setTimeout(function () {
    $(".sideWipe").removeClass("leftSideWipe").addClass("rightSideWipe");
    $(".sideWipe1").removeClass("leftSideWipe").addClass("rightSideWipe");
    $(".sideWipe2").removeClass("leftSideWipe").addClass("rightSideWipe");

    $(".vertWipe").eq(0).removeClass("upVertWipe").addClass("downVertWipe");
    $(".vertWipe").eq(1).removeClass("downVertWipe1").addClass("upVertWipe1");

    $(".vertWipe").eq(2).removeClass("upVertWipe").addClass("downVertWipe");
    $(".vertWipe").eq(3).removeClass("downVertWipe1").addClass("upVertWipe1");
  }, offset + 4050); // offset + 2550);

  setTimeout(function () {
    $(".sideWipe").removeClass("rightSideWipe").addClass("leftSideWipe");
    $(".sideWipe1").removeClass("rightSideWipe").addClass("leftSideWipe");
    $(".sideWipe2").removeClass("rightSideWipe").addClass("leftSideWipe");

    $(".vertWipe").eq(0).removeClass("downVertWipe").addClass("upVertWipe");
    $(".vertWipe").eq(1).removeClass("upVertWipe1").addClass("downVertWipe1");

    $(".vertWipe").eq(2).removeClass("downVertWipe").addClass("upVertWipe");
    $(".vertWipe").eq(3).removeClass("upVertWipe1").addClass("downVertWipe1");
  }, offset + 8050); // offset + 5050);

}

function isOnOrPastScreen(uniqueElement, offset) {
  // Offset is if we don't want to identify the element until it is already more than offset pixels into the viewport

  let intViewportHeight = window.innerHeight;

  let el = $(uniqueElement)[0];

  if (typeof el === 'undefined') {
    return false;
  }

  let domRect = el.getBoundingClientRect();

  if (domRect.y + offset < intViewportHeight) {  // Element is not within the viewport
    return true;
  }

  return false;
}

function ifKeyDivsAreOnScreen() {
  // Function to reveal RevealCard divs on scroll

  if (isOnOrPastScreen(".Shitotsu", 200) && $(".Shitotsu").hasClass("hideDiv")) {
    $(".Shitotsu").removeClass("hideDiv").addClass("revealDiv");
  }

  if (isOnOrPastScreen(".Futatsu", 200) && $(".Futatsu").hasClass("hideDiv")) {
    $(".Futatsu").removeClass("hideDiv").addClass("revealDiv");
  }

  if (isOnOrPastScreen(".FeatPgh", 100) && $(".FeatPgh").hasClass("hideDiv")) {
    $(".FeatPgh").removeClass("hideDiv").addClass("revealDiv");
    $(".btn").removeClass("hideDiv").addClass("revealDiv");
  }

  if (isOnOrPastScreen(".Ichi", 200) && $(".Ichi").hasClass("hideDiv")) {
    $(".Ichi").removeClass("hideDiv").addClass("revealDiv");
  }

  if (isOnOrPastScreen(".Nii", 200) && $(".Nii").hasClass("hideDiv")) {
    $(".Nii").removeClass("hideDiv").addClass("revealDiv");
  }
}










/**/
