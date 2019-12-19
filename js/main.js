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
      $(".review1").slideDown()
    })
    $("#tv-review").click(function() {
      $(".review2").slideDown()
    })
  })
  $(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#username").val()
        var review = $("#usereview").val()
        var movieVal = $("#movie-slct option:selected").text()

    if(name === "") {
        alert("Enter your name")
    }
    else if(review === "") {
        alert("Please share your thoughts on the movie")
    }
    else{
        alert(name + ". Thank you for sharing your thoughts on " + movieVal + ".")
    }
    })
    $("#submit-tv").click(function() {
        var name = $("#user-name").val()
        var review = $("#user-review").val()

    if(name === "") {
        alert("Enter your name")
    }
    else if(review === "") {
        alert("Please share your thoughts on the show")
    }
    else{
        alert(name + ". Thank you. We have received your review")
    }
    })
  })