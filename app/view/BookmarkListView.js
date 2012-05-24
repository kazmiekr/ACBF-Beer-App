Ext.define("ACBF.view.BookmarkListView", {
	extend: 'Ext.dataview.List',
	xtype: 'bookmarklistview',
	config: {
		itemTpl: '<tpl for="beer"><div class="beerTitleContainer">' +
			'<div class="truncate"><b>{[values.data.name]}</b></div>' +
			'<div class="truncate">{[values.data.type]} {[values.data.abv]}</div>' +
			'</div>' +
			'<div class="beerScore">BA: {[values.data.bascore]}<br/>BRO: {[values.data.broscore]}</div></tpl>',
		store: 'BookmarkStore'
	}
});
