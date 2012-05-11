Ext.define('ACBF.controller.MainController', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			navigationView: 'navigationview',
			beerList: 'beerlistview'
		},

		control: {
			beerList:{
				select: 'onBeerSelect'
			}
		}
	},

	launch: function() {
		console.log("Loading stores");
		Ext.getStore('BeerStore').load();
		Ext.getStore('BeerStoreByStyle').load();
	},

	onBeerSelect: function(list, record) {
		console.log("onBeerSelect"+record.get('name'));
	}
})