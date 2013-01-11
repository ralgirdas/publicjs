$('.product').each(function(){
    var $this = $(this); 
    $this.children().first().append('<div class="posAbstl zi1">'+$this.data('json').eventItemItemId+'</div>'); 
});
