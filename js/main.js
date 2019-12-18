$(document).ready(function() {
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