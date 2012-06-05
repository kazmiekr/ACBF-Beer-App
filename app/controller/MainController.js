Ext.define('ACBF.controller.MainController', {
	extend: 'Ext.app.Controller',
	requires: ['ACBF.util.StoreUtils'],
	config: {
		refs: {
			beerNavigationView: 'navigationview[title=Beers]',
			bookmarkNavigationView: 'navigationview[title=Bookmarks]',
			ratedNavigationView: 'navigationview[title=Rated]',
			companyList: 'companylistview',
			beerList: 'beerlistview',
			bookmarkList: 'bookmarklistview',
			ratingList: 'ratinglistview'
		},
		control: {
			companyList:{
				itemtap: 'onCompanySelect'
			},
			beerList:{
				itemtap: 'onBeerSelect'
			},
			bookmarkList:{
				itemtap: 'onBookmarkSelect'
			},
			ratingList:{
				itemtap: 'onRatingSelect'
			},
			bookmarkNavigationView:{
				show: 'onBookmarkListShow'
			},
			ratedNavigationView:{
				show: 'onRatedListShow'
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
	onRatedListShow: function(){
		console.log("onRatedListShow");
		this.getRatedNavigationView().reset();
	},
	onBookmarkListShow: function(){
		console.log("onBookmarkListShow");
		this.getBookmarkNavigationView().reset();
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
			var beer = ACBF.util.StoreUtils.getBeerByIdAndCompany(record.get('beer_id'), record.get('company'));
			if (beer != null){
				record.set('beer', beer);
			} else {
				console.log("not found - " + record.get('beer_id'));
			}
		}, this );

		var ratingStore = Ext.getStore('RatingStore');
		ratingStore.load({
			callback: this.loadRatingBeers,
			scope: this
		});
	},
	loadRatingBeers: function(){
		var ratingStore = Ext.getStore('RatingStore');
		//ratingStore.removeAll();
		//ratingStore.sync();
		//return;

		ratingStore.each( function(record){
			var beer = ACBF.util.StoreUtils.getBeerByIdAndCompany(record.get('beer_id'), record.get('company'));
			if (beer != null){
				record.set('beer', beer);
			} else {
				console.log("not found - " + record.get('beer_id'));
			}
		}, this );
	},
	onCompanySelect: function(l, i, t, record, e, eOpts) {
		var nv = this.getBookmarkNavigationView();
		var store = Ext.getStore('BeerStore');
		console.log("onCompanySelect: "+record.get('beerList').length);
		var detailView = Ext.create('ACBF.view.BeerListView', {
			title: record.get('company'),
			beers: record.get('beerList')
		});
		this.getBeerNavigationView().push(detailView);
	},
	onBeerSelect: function(l, i, t, record, e, eOpts) {
		console.log("onBeerSelect: "+record.get('name'));
		var detailView = Ext.create('ACBF.view.BeerDetailView', {
			title: record.get('name'),
			beer: record,
			bookmarked: ACBF.util.StoreUtils.isBeerBookmarked(record),
			rating: ACBF.util.StoreUtils.getRating(record)
		});
		this.getBeerNavigationView().push(detailView);
	},
	onBookmarkSelect: function(l, i, t, record, e, eOpts){
		var beer = record.get('beer');
		console.log("onBookmarkSelect: "+beer.get('name'));
		var detailView = Ext.create('ACBF.view.BeerDetailView', {
			title: beer.get('name'),
			beer: beer,
			bookmarked: ACBF.util.StoreUtils.isBeerBookmarked(beer),
			rating: ACBF.util.StoreUtils.getRating(beer)
		});
		this.getBookmarkNavigationView().push(detailView);
	},
	onRatingSelect: function(l, i, t, record, e, eOpts){
		var beer = record.get('beer');
		console.log("onRatingSelect: "+beer.get('name'));
		var detailView = Ext.create('ACBF.view.BeerDetailView', {
			title: beer.get('name'),
			beer: beer,
			bookmarked: ACBF.util.StoreUtils.isBeerBookmarked(beer),
			rating: ACBF.util.StoreUtils.getRating(beer)
		});
		this.getRatedNavigationView().push(detailView);
	}
})