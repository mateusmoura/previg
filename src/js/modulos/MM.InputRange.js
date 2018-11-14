/**
* Funcionalidade responsável customizar o input Range
* @author: Mateus Moura
* @Version: 1.0
*/
Module('MM.InputRange', function(InputRange){
  InputRange.fn.initialize = function($input){
    this.inputs = $input != undefined ? $input : $('input[type=number]');

    this.loadStyles();
    this.loadScripts();
  };
  /**
  * Carregar Scripts necessários para funcionalidade.
  */
  InputRange.fn.loadScripts = function(){
    var _this = this;

    jQuery.ajaxSetup({
      cache: true
    });

    if ($.fn.ionRangeSlider === undefined) {
      $.when(
        $.getScript(base_url + "js/plugins/jQuery.ion-slider.min.js"),
        $.Deferred(function(deferred){
          $(deferred.resolve)
        })
      ).done(function(){
        _this.config();
      }).fail(function() {
        console.log('Erro getScript')
      });
    } else {
      _this.config();
    }
  };
  /**
  * Carregar CSS necessários para funcionalidade.
  */
  InputRange.fn.loadStyles = function(){
    var linkElem = document.createElement('link');
    document.getElementsByTagName('head')[0].appendChild(linkElem);
    linkElem.rel = 'stylesheet';
    linkElem.type = 'text/css';
    linkElem.href = base_url + 'css/ion-slider.css';
  }
  /**
  * Configuração do plugin para mostrar as máscaras.
  */
  InputRange.fn.config = function(){
    console.log(this.inputs)

    this.inputs
      .filter('.field-slider__currancy')
      .each(function() {
        const $this = $(this);
        const input = $this.find('input');

        input.ionRangeSlider({
          min: 500,
          max: 5000,
          prefix: 'R$ ',
          onStart: function (obj) {
            $this.find('.field-slider__display').text('R$ ' + obj.from);
          },
          onChange: function(obj) {
            $this.find('.field-slider__display').text('R$ ' + obj.from);
          }
        });
      })
      .end()
      .filter('.field-slider__month')
      .each(function() {
        const $this = $(this);
        const input = $this.find('input');
        let q = undefined;

        input.ionRangeSlider({
          min: 1,
          max: 720,
          postfix: ' m',
          onStart: function (obj) {
            const txt = obj.from > 1 ? ' meses' : ' mês';
            $this.find('.field-slider__display').text(`${obj.from}${txt}`);
          },
          onChange: function(obj) {
            const txt = obj.from > 1 ? ' meses' : ' mês';
            $this.find('.field-slider__display').text(`${obj.from}${txt}`);
          }
        });
      });
  };
});