Ext.define('ACBF.controller.DetailViewController', {
	extend: 'Ext.app.Controller',
	requires: ['ACBF.util.StoreUtils'],
	config: {
		refs: {
			detailView: 'beerdetailview',
			detailViewOpen: 'beerdetailview > button',
			bookmarkButton: 'beerdetailview > togglefield',
			ratingField: 'beerdetailview > rating'
		},
		control: {
			detailViewOpen:{
				tap: 'openBeerAdvocate'
			},
			bookmarkButton:{
				change: 'changeBookmark'
			},
			ratingField:{
				change: 'changeRating'
			}
		}
	},
	openBeerAdvocate: function(t, e, eOpts){
		console.log("DetailViewController.openBeerAdvocate()");
		var beer = t.up('beerdetailview').getBeer();
		window.open(beer.get('url'));
	},
	changeBookmark: function(m, s, t, n, o, eOpts){
		console.log("DetailViewController.changeBookmark()" + n + " -old=" + o);
		var beer = m.up('beerdetailview').getBeer();

		var bookmarkStore = Ext.getStore('BookmarkStore');
		var beerId = beer.get('id');
		var index = -1;
		var bookmark;

		index = bookmarkStore.find('beer_id', beerId);
		if (index != -1){
			bookmark = bookmarkStore.removeAt(index);
		} else {
			bookmark = new ACBF.model.Bookmark({
				beer_id: beer.get('id'),
				company: beer.get('company')
			})
			bookmark.set('beer', beer);
			bookmarkStore.add(bookmark);
		}

		bookmarkStore.sync();
	},
	changeRating: function(t, n, o){
		console.log("changeRating: " + n);

		var detailView = t.up('beerdetailview');
		var beer = detailView.getBeer();

		var s = detailView.getComponent("smellRating").getValue()+1;
		var t = detailView.getComponent("tasteRating").getValue()+1;
		var m = detailView.getComponent("mouthfeelRating").getValue()+1;
		var o = detailView.getComponent("overallRating").getValue()+1;

		ACBF.util.StoreUtils.updateRating(beer, s, t, m, o);
	}
});