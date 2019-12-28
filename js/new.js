$(document).ready(function() {
    $("li#home").click(function() {
        $(".movies").hide()
        $(".tv-shows").hide()
        $(".review").hide()
        $("#welcome").hide()
        $("#fromovies").hide()
        $(".home").fadeIn(3000)
    })
    $("li#movies").click(function() {
        $(".home").hide()
        $(".tv-shows").hide()
        $(".review").hide()
        $("#welcome").hide()
        $("#fromovies").hide()
        $(".movies").slideDown(3000)
    })
    $("li#tv").click(function() {
        $(".home").hide()
        $(".movies").hide()
        $(".review").hide()
        $("#welcome").hide()
        $("#fromovies").hide()
        $(".tv-shows").fadeIn(3000)
    })
    $("li#review").click(function() {
        $(".home").hide()
        $(".movies").hide()
        $(".tv-shows").hide()
        $("#welcome").hide()
        $("#fromovies").hide()
        $(".review").slideDown(3000)
    })
  })
$(document).ready(function() {
    $("button#click").click(function(){
        $(this).next("div.movie-detail").slideToggle()
    })
})