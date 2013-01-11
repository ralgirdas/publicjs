(function(){
  var out = $('<div id="my_data_container" class="posAbstl zi3 bgContrast pam"></div>').appendTo('body');

	var soldOut = 0;
	var minOff = 101;
	var maxOff = -1;

	var products = $('.product').each(function(){ 
		var $this = $(this); 
		$this.children().first().append('<div class="posAbstl zi1">'+$this.data('json').eventItemItemId+'</div>'); 
		var txt = $this.find('i').text();
		if(txt != '')
		{
			var val = parseInt(txt.split('%')[0]);
			minOff = minOff > val ? val : minOff;
			maxOff = maxOff < val ? val : maxOff;
		}	
		
	});

	soldOut = products.find('.soldSticker').length;

	out = $('<ul></ul>').appendTo(out);
	out.append('<li> Total:' + products.length + '</li>');
	out.append('<li> Total Soldout:' + soldOut + '</li>');	
	out.append('<li> Minimum offer:' + minOff + '</li>');
	out.append('<li> Maximum offer:' + maxOff + '</li>');
})();

//javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://livejs.com/live.js#css,notify';})();
