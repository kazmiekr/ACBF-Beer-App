Ext.define('ACBF.util.StoreUtils', {
	statics:{
		getBeerByIdAndCompany: function(beerId, company){
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
		},
		updateRating: function(beer, s, t, m, o){
			console.log("updateRating:" + s + "," + t + "," + m + "," + o);
			var ratingStore = Ext.getStore('RatingStore');
			var index = ratingStore.find('beer_id', beer.get('id'));
			var rating;
			if (index != -1){
				rating = ratingStore.getAt(index);
			} else {
				rating = new ACBF.model.Rating({
					beer_id: beer.get('id'),
					company: beer.get('company')
				})
				rating.set('beer', beer);
				ratingStore.add(rating);
			}
			var count = 0;
			var total = 0;
			if ( s != 0 ){
				rating.set('smell', s);
				total += s;
				count++;
			}
			if ( t != 0 ){
				rating.set('taste', t);
				total += t;
				count++;
			}
			if ( m != 0 ){
				rating.set('mouthfeel', m);
				total += m;
				count++;
			}
			if ( o != 0 ){
				rating.set('overall', o);
				total += o;
				count++;
			}

			if ( count > 0 ){
				var score = total / count;
				console.log("SCORE: " + score);
				rating.set('score', score);
			}

			ratingStore.sync();
		},
		getRating: function(beer){
			var ratingStore = Ext.getStore('RatingStore');
			var index = ratingStore.find('beer_id', beer.get('id'));
			if (index != -1){
				var rating = ratingStore.getAt(index);
				return rating;
			}else
				return null;
		},
		removeRating: function(beer){
			var ratingStore = Ext.getStore('RatingStore');
			var index = ratingStore.find('beer_id', beer.get('id'));
			if (index != -1){
				ratingStore.removeAt(index);
				ratingStore.sync();
				return true;
			}else
				return false;
		}
	}
});