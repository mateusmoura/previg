/**
* Funcionalidade responsável customizar o select
* @author: Mateus Moura
* @Version: 1.0
*/
Module('MM.CustomSelect', function(CustomSelect){
  CustomSelect.fn.initialize = function($input){
    this.inputs = $input != undefined ? $input : $('select.select-custom');

    this.loadStyles();
    this.loadScripts();
  };
  /**
  * Carregar Scripts necessários para funcionalidade.
  */
  CustomSelect.fn.loadScripts = function(){
    var _this = this;

    jQuery.ajaxSetup({
      cache: true
    });

    if ($.fn.ionRangeSlider === undefined) {
      $.when(
        $.getScript(base_url + "js/plugins/jQuery.customSelect.js"),
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
  CustomSelect.fn.loadStyles = function(){
    var linkElem = document.createElement('link');
    document.getElementsByTagName('head')[0].appendChild(linkElem);
    linkElem.rel = 'stylesheet';
    linkElem.type = 'text/css';
    linkElem.href = base_url + 'css/custom-select.css';
  }
  /**
  * Configuração do plugin para mostrar as máscaras.
  */
  CustomSelect.fn.config = function(){
    console.log(this.inputs)
    this.inputs.customSelect();

  };
});