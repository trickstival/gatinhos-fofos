


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

$(document).ready(
  function(){
      configuraAnimacoes();
      $("#btnTroca").click(function(){trocaMenu();});
  }
);

var estado = false;
var scrollAtivo = false;

var ultimoScrollTop = 0;
function scrollar(){
  /*var scrollTopAtual = $(this).scrollTop();
  var header = $("header");

  if (scrollTopAtual > ultimoScrollTop){

    //   header.addClass('headerUp').removeClass('headerDown');
    header.animate({top : '0px'}, 1000);




   } else {

    //  $("header").removeClass('headerUp').addClass('headerDown');
    header.animate({top : '-100px'}, 1000);

   }

  ultimoScrollTop = scrollTopAtual;
  */
}

function configuraAnimacoes(){

  //configura o header up e down
  /*
  $(window).scroll(function(event){scrollAtivo = true;});
  setInterval(function(){
    if(scrollAtivo){
      scrollar();
      scrollAtivo = false;
    }
  }, 250);
  */

  $("#dentinho").hide();
  animaProgress();

  //animação até 40px
  $("#surpresa").click(function(){
    animaDentinho();

    estado = !estado;
    if(estado){
      $("#titulo").stop();
      $("#titulo").animate(
        {
          fontSize:"40px"
        }, 1000, function() {
          //animação completa
        });


      }

      else{
        //animação que volta ao estado original
        $("#titulo").stop();

        $("#titulo").animate({
          fontSize:"35px"

        }, 1000);
      }

    });


  }

  function cliqueDireitoMap(){
    alert('clique direito');
  }

  function cliqueEsquerdoMap(){
    alert('clique esquerdo');
  }

  function animaProgress(){
    var progressbar = $('#progressoAnimado');
    var max = progressbar.attr('max'),
    time = 1000 / parseInt(max)*5,
      value = progressbar.val();

      var loading = function() {
      value += 1;
      addValue = progressbar.val(value);


      if (value == max) {
        value = 0;
          progressbar.val(value);

      }
  };

  var animate = setInterval(function() {
      loading();
  }, time);


  }



  function animaDentinho(){
    var dentinho = $("#dentinho");

    if(dentinho.display != "none"){
      dentinho.show();
      dentinho.addClass("gatinhoAnimado");
      dentinho.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){dentinho.hide()});
    }
    else{
      dentinho.removeClass("gatinhoAnimado");
      dentinho.hide();
    }

  }





  var menuAtivo = "html";
  async function trocaMenu(){



    var nav = $("#navNavegacao");
    var heightAtual = nav.css("height");

    nav.addClass("animacaoTrocaMenu");
    nav.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){nav.removeClass("animacaoTrocaMenu")});

    var ativo, futuro;
    if(menuAtivo == "html"){
      menuAtivo="css";
      ativo = $("#menuHtml");
      futuro = $("#menuCss");
    }
    else{
      menuAtivo="html"
      ativo = $("#menuCss");
      futuro = $("#menuHtml");
    }


    ativo.animate({height: "toggle"}, 1000);
    await sleep(1000);
    ativo.hide();
    futuro.animate({height:"show"}, 1000);
    futuro.show();

  }
