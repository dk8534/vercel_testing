


window.addEventListener("load", function () {
  var loader = document.getElementById("preloader");
  loader.style.display = "none";

  var body = document.getElementById('body')
  body.classList.add('fade')

  
  
    window.onscroll = function () {

    var nav = document.getElementById("mynav");

    if (

      document.body.scrollTop >= 50 ||

      document.documentElement.scrollTop >= 50

    ) {



      nav.classList.add("fixed-top" );

    }else{



      nav.classList.remove("fixed-top");

    }

  };

});





var links = document.querySelectorAll('.hide-nav');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
}

