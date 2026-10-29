$(document).ready(function(){

    var components = ['header','homeleft','homeright','footer']
    components.forEach(function(comp) {
        $("#"+comp).load(comp+".html?v=20261028")
        console.log(comp)
    })
    $(".content").fadeIn('1000');
  });
