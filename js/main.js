$(document).ready(function() {
    $("li.movie-review").click(function() {
      $(".review1").fadeIn()
    })
    $("li.tv-review").click(function() {
      $(".review2").fadeIn()
    })
    $("#submit").click(function() {
      alert("Thank you. We have received your review")
    })
  })