Ext.define("ACBF.view.BeerDetailView", {
	extend: 'Ext.Panel',
	requires: ['Ext.Label','Ext.field.Toggle'],
	xtype: 'beerdetailview',
	config: {
		beer: null,
		bookmarked: null,
		rating: -1,
		cls: 'detailPanel',
		scrollable: true,
		layout: {
			type: 'vbox'
		},
		defaults:{
			//flex: 1
		},
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
				itemId: 'typeLabel',
				height: 40
			},
			{
				xtype: 'togglefield',
				cls: 'detailPanel',
				label: 'Bookmark this beer?',
				labelWidth: '60%',
				itemId: 'bookmarkButton'
			},
			{
				label: 'Smell:',
				labelWidth : '30%',
				xtype: 'rating',
				itemsCount : 5,
				height: 50,
				cls: 'x-imageless-rating',
				itemCls : 'x-imageless-star',
				itemHoverCls : 'x-imageless-hover',
				itemId: 'smellRating'
			},
			{
				label: 'Taste:',
				labelWidth : '30%',
				xtype: 'rating',
				itemsCount : 5,
				height: 50,
				cls: 'x-imageless-rating',
				itemCls : 'x-imageless-star',
				itemHoverCls : 'x-imageless-hover',
				itemId: 'tasteRating'
			},
			{
				label: 'Mouthfeel:',
				labelWidth : '30%',
				xtype: 'rating',
				height: 50,
				itemsCount : 5,
				cls: 'x-imageless-rating',
				itemCls : 'x-imageless-star',
				itemHoverCls : 'x-imageless-hover',
				itemId: 'mouthfeelRating'
			},
			{
				label: 'Overall:',
				labelWidth : '30%',
				xtype: 'rating',
				height: 50,
				itemsCount : 5,
				cls: 'x-imageless-rating',
				itemCls : 'x-imageless-star',
				itemHoverCls : 'x-imageless-hover',
				itemId: 'overallRating'
			}/*,
			{
				xtype: 'button',
				itemId: 'openButton',
				text: 'View on Beer Advocate'
			}*/
		],
		listeners: [/*{
			delegate: '#openButton',
			event: 'tap',
			fn: 'openBeerAdvocate'
		},*/{
			delegate: '#bookmarkButton',
			event: 'change',
			fn: 'changeBookmark'
		}, {
			delegate: 'rating',
			event: 'change',
			fn: 'changeRating'
		}]
	},
	changeRating: function(t, n, o){
		console.log("changeRating: " + n);
		var s = this.getComponent("smellRating").getValue()+1;
		var t = this.getComponent("tasteRating").getValue()+1;
		var m = this.getComponent("mouthfeelRating").getValue()+1;
		var o = this.getComponent("overallRating").getValue()+1;
		ACBF.util.StoreUtils.updateRating(this.getBeer(), s, t, m, o);
	},
	updateRating: function(newRating){
		if (newRating != null){
			this.getComponent("smellRating").setValue(newRating.get('smell')-1);
			this.getComponent("tasteRating").setValue(newRating.get('taste')-1);
			this.getComponent("mouthfeelRating").setValue(newRating.get('mouthfeel')-1);
			this.getComponent("overallRating").setValue(newRating.get('overall')-1);
			//this.getComponent('ratingControl').setValue(newRating-1);
		}
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

		/*var baview = Ext.create('ACBF.view.BABeerView', {
			title: '1Beer Advocate Details',
			url: this.getBeer().get('url')
		});
		this.up('navigationview').push(baview);*/

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
