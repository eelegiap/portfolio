$(document).ready(function(){

    var components = ['header','homeleft','homeright','footer']
    components.forEach(function(comp) {
        $("#"+comp).load(comp+".html")
    })
    $(".content").fadeIn('1000');
  });
