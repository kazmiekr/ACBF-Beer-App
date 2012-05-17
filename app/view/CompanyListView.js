Ext.define("ACBF.view.CompanyListView", {
	extend: 'Ext.dataview.List',
	xtype: 'companylistview',
	config: {
		indexBar: true,
		itemTpl: '<b>{company}</b> - {beerList.length} beer<tpl if="beerList.length != 1">s</tpl>',
		store: 'BeerStore'
	}
});
