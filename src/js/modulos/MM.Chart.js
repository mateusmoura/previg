/**
* Funcionalidade responsável por colocar as máscaras dos inputs no formulário
* @author: Mateus Moura
* @Version: 1.0
*/
Module('MM.Chart', function(Chart){
  Chart.fn.initialize = function($chart){
    this.charts = $chart != undefined ? $chart : $('.chart');

    this.loadScripts();
  };
  /**
  * Carregar Scripts necessários para funcionalidade.
  */
  Chart.fn.loadScripts = function(){
    var _this = this;

    jQuery.ajaxSetup({
      cache: true
    });

    _this.config();

    // if($.mask === undefined){
    //   $.when(
    //     // $.getScript(base_url + "js/plugins/moment.min.js"),
    //     // $.getScript(base_url + "js/plugins/Chart.min.js"),
    //     $.Deferred(function(deferred){
    //       $(deferred.resolve)
    //     })
    //   ).done(function(){
    //     _this.config();
    //   }).fail(function() {
    //     console.log('Erro getScript')
    //   });
    // } else{
      
    // }
  };
  /**
  * Configuração do plugin para mostrar as máscaras.
  */
  Chart.fn.config = function(){
    this.chartsCreated = [];

    for (let i = 0; i < this.charts.length; i++) {
      const $elem = $(this.charts[i]);
      const dados = eval("(" + $elem.data('chart') + ")");
      const canvas = $elem.find('canvas')[0];
      const chart2 = document.getElementsByTagName('canvas');
      const chart = new Chart(chart2, dados);

      // console.log(document.getElementsByTagName('canvas'))
      // console.log(canvas)

      this.chartsCreated.push(chart);
    }
  };
});