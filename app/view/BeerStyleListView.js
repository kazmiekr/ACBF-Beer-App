Ext.define("ACBF.view.BeerStyleListView", {
	extend: 'Ext.dataview.List',
	xtype: 'beerstylelistview',
	config: {
		indexBar: true,
		itemTpl: '<strong>{name}</strong> ({company})',
		store: 'BeerStoreByStyle',
		grouped: true
	}
});
