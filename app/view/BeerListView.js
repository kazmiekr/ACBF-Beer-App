Ext.define("ACBF.view.BeerListView", {
	extend: 'Ext.dataview.List',
	xtype: 'beerlistview',
	config: {
		beers: null,
		itemTpl: '<div class="beerTitleContainer">' +
					'<div class="truncate"><b>{name}</b></div>' +
					'<div class="truncate">{type} {abv}</div>' +
				'</div>' +
				'<div class="beerScore">BA: {bascore}<br/>BRO: {broscore}</div>'
	},
	updateBeers: function(beers){
		this.setData(beers);
	}
});
