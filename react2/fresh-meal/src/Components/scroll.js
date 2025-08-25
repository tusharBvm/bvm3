window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bistro-nav").style.background = "#fa811e"
    document.getElementById("border").style.display = "none"
    document.getElementById("mt-15").style.marginTop = "0"
   
  } else {
    document.getElementById("bistro-nav").style.background = "transparent"
    document.getElementById("border").style.display = "block"
     document.getElementById("mt-15").style.marginTop = "20px"
  }
}