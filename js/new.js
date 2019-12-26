$(document).ready(function() {
    $("li#home").click(function() {
        $(".movies").hide()
        $(".tv-shows").hide()
        $(".review").hide()
        $(".home").fadeIn()
    })
    $("li#movies").click(function() {
        $(".home").hide()
        $(".tv-shows").hide()
        $(".review").hide()
        $(".movies").fadeIn()
    })
    $("li#tv").click(function() {
        $(".home").hide()
        $(".movies").hide()
        $(".review").hide()
        $(".tv-shows").fadeIn()
    })
    $("li#review").click(function() {
        $(".home").hide()
        $(".movies").hide()
        $(".tv-shows").hide()
        $(".review").fadeIn()
    })
  })