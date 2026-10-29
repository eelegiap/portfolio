$(document).ready(function(){

    var components = ['header','homeleft','publications','homeright','past','footer']
    components.forEach(function(comp) {
        $("#"+comp).load(comp+".html?v=20261029d")
        console.log(comp)
    })
    $(".content").fadeIn('1000');
  });
