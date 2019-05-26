// (function($) {
//   $.fn.changeElementType = function(newType) {
//       var attrs = {};

//       $.each(this[0].attributes, function(idx, attr) {
//           attrs[attr.nodeName] = attr.nodeValue;
//       });

//       this.replaceWith(function() {
//           return $("<" + newType + "/>", attrs).append($(this).contents());
//       });
//   };
// })(jQuery);

$(() => {
  let table = $("table.partydata");
  // table.append('<tfoot />');
  // let footer = $('tbody tr:last-child').appendTo('tfoot', table)
  // $('td', footer).changeElementType('th');
  // $('tbody tr:last-child', table).addClass('tablesorter-ignoreRow');
  $('thead tr:first-child th:not([rowspan])', table).addClass('sorter-false');
  table.tablesorter({ sortList: [[0,0]]});
});