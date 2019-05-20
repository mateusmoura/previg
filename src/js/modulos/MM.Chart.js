/**
* Funcionalidade responsável por colocar as máscaras dos inputs no formulário
* @author: Mateus Moura
* @Version: 1.0
*/
Module('MM.Grafico', function(Grafico){
  Grafico.fn.initialize = function($chart){
    this.charts = $chart != undefined ? $chart : $('div.chart-container');

    this.loadScripts();
  };
  /**
  * Carregar Scripts necessários para funcionalidade.
  */
 Grafico.fn.loadScripts = function(){
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
  Grafico.fn.config = function(){
    this.chartsCreated = [];

    this.charts.length && this.charts.each(index => {
      const $elem = $(this.charts[index]);
      const dados = eval("(" + $elem.data('chart') + ")");
      const chart2 = document.getElementsByTagName('canvas');
      const b = new Chart(chart2, dados);

      this.chartsCreated.push(b);
    });
  };
});