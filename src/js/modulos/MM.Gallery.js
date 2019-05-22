/**
* Funcionalidade responsável por colocar as máscaras dos inputs no formulário
* @author: Mateus Moura
* @Version: 1.0
*/
Module('MM.Gallery', function(Gallery){
  Gallery.fn.initialize = function($swipe){
    this.swipes = $swipe != undefined ? $swipe : $('div.swipe-container');

    this.loadScripts();
  };
  /**
  * Carregar Scripts necessários para funcionalidade.
  */
 Gallery.fn.loadScripts = function(){
    var _this = this;

    jQuery.ajaxSetup({
      cache: true
    });

    if(window.Swipe === undefined){
      $.when(
        $.getScript(base_url + "js/plugins/swipe.min.js"),
        $.Deferred(function(deferred){
          $(deferred.resolve)
        })
      ).done(function(){
        _this.config();
      }).fail(function() {
        console.log('Erro getScript')
      });
    } else{
      
    }
  };
  /**
  * Configuração do plugin para mostrar as máscaras.
  */
  Gallery.fn.config = function(){
    this.swipeCreated = [];
    console.log(this.swipes)

    this.swipes.length && this.swipes.each(index => {
      const swipe = new Swipe(this.swipes[index], {
        speed: 400,
        auto: 3000,
        startSlide: 0,
        draggable: true,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem, dir) {},
        transitionEnd: function(index, elem) {}
      });
      const s = new Swipe(swipe);

      this.swipeCreated.push(s);
    });
  };
});