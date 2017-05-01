// Business Logic




// User Logic

$(function () {
  $("form#favoriteThings").submit(function(event) {
    debugger;
    var favorites = [$("input#question1").val(), $("input#question2").val(), $("input#question3").val(), $("input#question4").val()];
    var favorites2 = [];
    favorites2.push(favorites[1], favorites[0], favorites[2]);
    $("ul").prepend("<li>" + favorites2[0] + "</li>");
    $("ul").prepend("<li>" + favorites2[1] + "</li>");
    $("ul").prepend("<li>" + favorites2[2] + "</li>");

    event.preventDefault();
    });
});
