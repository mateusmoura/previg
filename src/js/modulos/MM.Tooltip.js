/**
* Funcionalidade responsável pelos Tooltips
* @author: Mateus Moura
* @Version: 1.0
*/

Module('MM.Tooltip', function(Tooltip){
  Tooltip.fn.initialize = function(){
    this.tips = $('.btn-tooltip:not([disabled])');

    //this.conteudo.hide();
    for (var i = this.tips.length - 1; i >= 0; i--) {
      this.building(this.tips.eq(i));
    };

    this.addEventListeners();
  };
  Tooltip.fn.building = function($elem){
    !$elem.find('.tooltip').length
      && $('<div class="tooltip"><p></p><i class="icon"></i></div>"').find('p').text($elem.attr('title')).end().appendTo($elem)
          .css('margin-left', - ( $elem.find('.tooltip').outerWidth() / 2) ).hide();
  };
  /**
  * Adiciona os eventos necessários.
  */
  Tooltip.fn.addEventListeners = function(){
    this.tips
      .on('mouseenter', this.onLinkMouseEnter)
      .on('mouseleave', this.onLinkMouseLeave)
      // .on('focus', this.onLinkMouseEnter)
      // .on('blur', this.onLinkMouseEnter);
  };
  /**
  * Funcionalidade que mostra o tooltip.
  */
  Tooltip.fn.onLinkMouseEnter = function(event){
    var _this = $(this);

    _this.find('.tooltip').css('margin-left', - ( (_this.find('.tooltip').outerWidth() - 13) / 2) ).stop(0, 0).fadeIn();
  };
  /**
  * Funcionalidade que esconde o tooltip.
  */
  Tooltip.fn.onLinkMouseLeave = function(event){
    $(this).find('.tooltip').stop(0, 0).fadeOut();
  };
});