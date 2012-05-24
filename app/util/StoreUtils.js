Ext.define('ACBF.util.StoreUtils', {
	statics:{
		getBookmarkedBeer: function(beerId, company){
			var index = -1;
			var beer,beerList;
			var beerStore = Ext.getStore('BeerStore');

			index = beerStore.find('company', company);
			if (index != -1){
				company = beerStore.getAt(index);
				beerList = company.beerListStore;
				beer = beerList.getById(beerId);
			}
			return beer;
		},
		isBeerBookmarked: function(beer){
			var bookmarkStore = Ext.getStore('BookmarkStore');
			var index = bookmarkStore.find('beer_id', beer.get('id'));
			if (index != -1)
				return true;
			else
				return false;
		}
	}
});