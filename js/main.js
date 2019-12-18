var movieName = ["Black Panther", "Sarafina", "The Lion King(2019)", "Queen of Katwe", "Sarafina", "12 Years a Slave", "Cairotime", "Sahara", "Hyenas", "Out of Africa", "African Cats", "Congo"]
var showName = ["Shuga", "Rhythm City", "Tinsel", "The Queen"]

$(document).ready(function() {
    $("#movie-slct").empty()
    $.each(movieName, function(val, text) {
        $("#movie-slct").append($("<option></option>").val(val).html(text))
    })
    $("#tv-slct").empty()
    $.each(showName, function(val, text) {
        $("#tv-slct").append($("<option></option>").val(val).html(text))
    })
    $("#movie-review").click(function() {
      $(".review1").fadeIn()
    })
    $("#tv-review").click(function() {
      $(".review2").fadeIn()
    })
    $("#submit").click(function() {
      alert("Thank you. We have received your review")
    })
  })