Ext.define('ACBF.controller.DetailViewController', {
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
	}
});