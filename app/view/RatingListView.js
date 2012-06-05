Ext.define("ACBF.view.RatingListView", {
	extend: 'Ext.dataview.List',
	xtype: 'ratinglistview',
	config: {
		itemTpl: '<tpl for="beer"><div class="beerTitleContainer">' +
			'<div class="truncate"><b>{[values.data.name]}</b></div>' +
			'<div class="truncate">{[values.data.type]} {[values.data.abv]}</div>' +
			'</div>' +
			'</tpl><div class="beerScore">{score}</div>',
		store: 'RatingStore'
	}
});
