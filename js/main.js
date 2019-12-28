var movieName = []
var showName = []

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
      $(".review1").slideToggle()
    })
    $("#tv-review").click(function() {
      $(".review2").slideToggle()
    })
  })
  $(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#username").val()
        var review = $("#usereview").val()
        var message = $("#msg").val()
        var movieValue = $("#movie-slct option:selected").text()

    if(name === "") {
        alert("Enter your name")
    }
    else if(review === "") {
        alert("Please share your thoughts " + movieValue)
    }
    else{
        alert(name + ". Thank you for sharing your thoughts on " + movieValue + ".")
    }
    $("#reviews").append("<li>" + name + ": " + message + "(" +movieValue + ")" + "</li>")
    })
    $("#submit-tv").click(function() {
        var name = $("#user-name").val()
        var review = $("#user-review").val()
        var msg = $("#msg").val()
        var tvValue = $("#tv-slct option:selected").text()

    if(name === "") {
        alert("Enter your name")
    }
    else if(review === "") {
        alert("Please share your thoughts on " + tvValue)
    }
    else{
        alert(name + ". Thank you for sharing your thoughts on " + tvValue + ".")
    }
    $("#reviews-tv").append("<li>" + name + ": " + msg + "(" + tvValue + ")" + "</li>")
    })
  })