(function(){
  var out = $('<div id="my_data_container" class="posAbstl zi3 bgContrast pam"></div>').appendTo('.page:first');

	var soldOut = 0;
	var minOff = 101;
	var maxOff = -1;

	var products = $('.product').each(function(){ 
		var $this = $(this); 
		$this.children().first().append('<div style="background-color:#33CCFF;"  class="posAbstl zi1">'+$this.data('json').eventItemItemId+'</div>'); 

		var txt  = $this.find('.bare.lightMedGrey.fwb.fsem1.tab-fsem0-9.pho-fsem0-9').text().replace($this.find('.bare.lightMedGrey.fwb.fsem1.tab-fsem0-9.pho-fsem0-9').find('.mrs').text(),'');
		
		if(txt != '')
		{
			var val = parseInt(txt.split('%')[0]);
			minOff = minOff > val ? val : minOff;
			maxOff = maxOff < val ? val : maxOff;
		}	
		
	});
    	//Go through products, collect unique soldouts
    	var products = $('.product').each(function(){ 
	var $this = $(this); 
		if($this.find('div:contains("Sold Out")').length > 0){
        	soldOut++;
        }
	});

	out = $('<ul></ul>').appendTo(out);
	out.append('<li> Total:' + products.length + '</li>');
	out.append('<li> Total Soldout:' + soldOut + '</li>');	
	out.append('<li> Minimum offer:' + minOff + '</li>');
	out.append('<li> Maximum offer:' + maxOff + '</li>');
	if(minOff == maxOff)
		out.append('<li> ALL ITEMS ' + maxOff.toString()+'%');
	else
		out.append('SAVE UP TO '+ maxOff.toString()+'%');
})();
