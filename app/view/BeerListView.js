Ext.define("ACBF.view.BeerListView", {
	extend: 'Ext.dataview.List',
	xtype: 'beerlistview',
	config: {
		indexBar: true,
		itemTpl: '<strong>{name}</strong> ({type})',
		store: 'BeerStore',
		grouped: true
	}
});
