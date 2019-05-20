/**
* Arquivo responsavel pela chamada de todas as funcionalidades do site 
*
* @author: Mateus Moura
* @email: chagas[dot]mateus[at]gmail[dot]com
* @date: 27/03/2018
* 
* Copyright(c) Todos os direitos reservados a 
*/

if (window.console == null) window.console = { log: function (p) { }, error: function (p) { } };

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(this instanceof fNOP && oThis
             ? this
             : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

var site = {
  /*
  * Funcionalidades GLOBAL onde e chamado em todas as páginas do projeto.
  */
  global: function(){
    MM.InputRange($('.field-slider'));
    MM.CustomSelect();
    MM.Mascarar();
    MM.Grafico();

    this.menu();
    this.modal();
  },
  /* Menu */
  menu: function () {
    const $menu = $('nav.nav');
    const $btnMenu = $('button.hamburger');
    let animation = false;

    $btnMenu.click(function() {
      if (animation) return;
      animation = true;

      $(this).addClass('hamburger--slider js-hamburger is-active');

      $menu.addClass('active');

      $menu.find('.nav-btn-close').click(function() {
        animation = true;
        $btnMenu.removeClass('hamburger--slider js-hamburger is-active');
        $menu.removeClass('slideInLeft active').addClass('slideOutLeft');
        setTimeout(() => {
          $menu.css('left', '-100%').removeClass('slideOutLeft');
          animation = false;
        }, 1000)
      })

      if ($menu.hasClass('active')) {
        $menu.css('left', 'auto').addClass('animated slideInLeft');
      }

      animation = false;
    })
  },
  
  modal: function() {
    const overlay = $('.modal-overlay');

    $('.btn-modal').click(function() {
      const target = $(this).data('target');

      overlay.toggleClass('active');
      $(target).toggleClass('active');
    });

    overlay.add($('.btn-close-modal')).click(function() {
      overlay.removeClass('active');

      $('.modal').removeClass('active');
    });
  }
}

$( function(){
  site.global();
});