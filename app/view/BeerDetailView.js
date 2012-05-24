Ext.define("ACBF.view.BeerDetailView", {
	extend: 'Ext.Panel',
	xtype: 'beerdetailview',
	config: {
		beer: null,
		bookmarked: null,
		items:[
			{
				xtype: 'label',
				itemId: 'companyLabel'
			},
			{
				xtype: 'label',
				itemId: 'nameLabel'
			},
			{
				xtype: 'label',
				itemId: 'typeLabel'
			},
			{
				xtype: 'togglefield',
				label: 'Bookmark this beer?',
				labelWidth: '60%',
				itemId: 'bookmarkButton'
			},
			{
				xtype: 'button',
				width: 150,
				itemId: 'openButton',
				text: 'View on BA'
			}
		],
		listeners: [{
			delegate: '#openButton',
			event: 'tap',
			fn: 'openBeerAdvocate'
		},{
			delegate: '#bookmarkButton',
			event: 'change',
			fn: 'changeBookmark'
		}]
	},
	updateBookmarked: function(newBookmarked){
		this.getComponent('bookmarkButton').setValue(newBookmarked);
	},
	updateBeer: function(newBeer){
		var nameLabel = this.getComponent('nameLabel');
		this.getComponent('companyLabel').setHtml(this.getBeer().get('company'));
		nameLabel.setHtml(newBeer.get('name'));
		this.getComponent('typeLabel').setHtml(this.getBeer().get('type') + " | " + this.getBeer().get('abv') + " ABV");
	},
	openBeerAdvocate: function(/*t, e, eOpts*/){
		console.log("BeerDetailView.openBeerAdvocate()");
		window.open(this.getBeer().get('url'));
	},
	changeBookmark: function(m, s, t, n, o, eOpts){
		console.log("BeerDetailView.changeBookmark()" + n + " -old=" + o);
		var bookmarkStore = Ext.getStore('BookmarkStore');
		var beerId = this.getBeer().get('id');
		var index = -1;
		var bookmark;

		index = bookmarkStore.find('beer_id', beerId);
		if (index != -1){
			bookmark = bookmarkStore.removeAt(index);
		} else {
			bookmark = new ACBF.model.Bookmark({
				beer_id: this.getBeer().get('id'),
				company: this.getBeer().get('company')
			})
			bookmark.set('beer', this.getBeer());
			bookmarkStore.add(bookmark);
		}

		bookmarkStore.sync();
	}
});
