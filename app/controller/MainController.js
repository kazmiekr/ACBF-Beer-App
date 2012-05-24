Ext.define('ACBF.controller.MainController', {
	extend: 'Ext.app.Controller',
	requires: ['ACBF.util.StoreUtils'],
	config: {
		refs: {
			navigationView: 'navigationview',
			companyList: 'companylistview',
			beerList: 'beerlistview',
			bookmarkList: 'bookmarklistview'
		},
		control: {
			companyList:{
				select: 'onCompanySelect'
			},
			beerList:{
				select: 'onBeerSelect'
			},
			bookmarkList:{
				select: 'onBookmarkSelect'
			}
		}
	},
	launch: function() {
		console.log("Loading stores");
		Ext.getStore('BeerStore').load({
			callback: this.onBeerLoad,
			scope: this
		});
	},
	onBeerLoad: function(){
		console.log("onBeerLoad");
		var bookmarkStore = Ext.getStore('BookmarkStore');
		bookmarkStore.load({
			callback: this.loadBookmarkedBeers,
			scope: this
		});
	},
	loadBookmarkedBeers: function(){
		var bookmarkStore = Ext.getStore('BookmarkStore');
		bookmarkStore.each( function(record){
			var beer = ACBF.util.StoreUtils.getBookmarkedBeer(record.get('beer_id'), record.get('company'));
			if (beer != null){
				record.set('beer', beer);
			} else {
				console.log("not found - " + record.get('beer_id'));
			}

		}, this );
	},
	onCompanySelect: function(list, record) {
		var store = Ext.getStore('BeerStore');
		console.log("onCompanySelect: "+record.get('beerList').length);
		var detailView = Ext.create('ACBF.view.BeerListView', {
			title: record.get('company'),
			beers: record.get('beerList')
		});
		this.getNavigationView().push(detailView);
	},
	onBeerSelect: function(list, record) {
		console.log("onBeerSelect: "+record.get('name'));
		var detailView = Ext.create('ACBF.view.BeerDetailView', {
			title: record.get('name'),
			beer: record,
			bookmarked: ACBF.util.StoreUtils.isBeerBookmarked(record)
		});
		this.getNavigationView().push(detailView);
	},
	onBookmarkSelect: function(list, record){
		console.log("onBookmarkSelect: "+record.get('name'));
	}
})