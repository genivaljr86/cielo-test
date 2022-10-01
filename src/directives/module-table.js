'use strict';

require('datatables.net');
require('datatables.net-bs4');
require('datatables.net-buttons')
require('datatables.net-buttons/js/buttons.colVis.js')
require('datatables.net-buttons-bs4')
require('datatables.net-bs4/css/dataTables.bootstrap4.css');
require('datatables.net-buttons-bs4/css/buttons.bootstrap4.css')

function moduleTable() {
  return {
    restrict: 'A',
    transclude: true,
    scope: {
      headers: '=',
      items: '=data'
    },
    templateUrl: require('./module-table.html'),
    link: function (scope, element, attrs, controller, transcludeFn) {
      var unwatch = scope.$watch('headers', (nv, ov) => {
        if (!!nv) {
          unwatch();
          launch();
        }
      })
      function launch() {
        console.log('scope.headers', scope.headers);
        setTimeout(() => {
          jQuery('#custom_table').DataTable({
            dom: 'B',
            buttons: [
              { extend: 'colvis', text: '+ Colunas' }
            ],
            language: {
              emptyTable: 'Nenhum registro encontrado',
              zeroRecords: 'Nenhum registro encontrado',
              lengthMenu: 'Exibir _MENU_ resultados por página',
              search: 'Pesquisar',
              info: 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
              paginate: {
                'next': 'Próximo',
                'previous': 'Anterior',
                'first': 'Primeiro',
                'last': 'Último'
              },
            }
          });

        }, 0)
      }
    }
  }
}

angular.module('app')
  .directive('moduleTable', moduleTable)

module.exports = {
  name: 'moduleTable',
  directive: moduleTable
}

