
$(document).ready(init);


function init(){

 $('[data-access="tooltip"]').tooltip();
  hideBackground();

}// end init.

function hideBackground(){

  var body = $('body').children().wrapAll('<div id="global_content"></div>');

 var modal = $('#exampleModal');
 modal.remove();

 $('#global_content').after(modal);

 $('#btnModal').on('click', function(){
$('#global_content').attr('aria-hidden', 'true');
});

$('#exampleModal').on('hidden.bs.modal', function(){
$('#global_content').attr('aria-hidden', 'false');
});

}// end hideBackground.
