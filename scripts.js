$(document).ready(function(){

    var components = ['header','homeleft','homeright','footer']
    components.forEach(function(comp) {
        $("#"+comp).load(comp+".html")
        console.log(comp)
    })
    $(".content").fadeIn('1000');
  });
