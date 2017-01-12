$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var occupation = $("#occupation").val();
    var hair = $("#hair").val();
    $(".col-md-12 h1").show();

    if (occupation === "Movie Star" && hair === "Brunette") {
      $(".fox").show();
    } else if (occupation === "Movie Star" && hair === "Blonde") {
      $(".diaz").show();
    } else if (occupation === "Movie Star" && hair === "Red") {
      $(".stone").show();
    } else if (occupation === "Musician" && hair === "Brunette") {
      $(".perry").show();
    } else if (occupation === "Musician" && hair === "Blonde") {
      $(".madona").show();
    } else if (occupation === "Musician" && hair === "Red") {
      $(".reba").show();
    } else if (occupation === "Model" && hair === "Brunette") {
      $(".sarah").show();
    } else if (occupation === "Model" && hair === "Blonde") {
      $(".trish").show();
    } else {
      $(".laura").show();
    }
  });
});
