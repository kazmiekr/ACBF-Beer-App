Ext.define('ACBF.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			navigationView: 'navigationview',
			companyList: 'companylistview'
		},

		control: {
			companyList:{
				select: 'onCompanySelect'
			}
		}
	},

	launch: function() {
		console.log("Loading stores");
		Ext.getStore('BeerStore').load();
	},

	onCompanySelect: function(list, record) {
		console.log("onBeerSelect"+record.get('beerList').length);
		var detailView = Ext.create('ACBF.view.BeerListView', {
			title: record.get('company'),
			beers: record.get('beerList')
		});
		this.getNavigationView().push(detailView);
	}
})