Ext.define("ACBF.view.Main", {
    extend: 'Ext.tab.Panel',
	requires: ['Ext.Panel','Ext.form.Field'],
    config: {
        tabBarPosition: 'bottom',
		fullscreen: true,
        items: [
            {
				itemId: 'beerNavigationView',
				xtype: 'navigationview',
				title: 'Beers',
				iconCls: 'search',
				items: [
					{
						title: 'Brewery List',
						xtype: 'companylistview'
					}
				]
            },
			{
				itemId: 'bookmarkNavigationView',
				xtype: 'navigationview',
				title: 'Bookmarks',
				iconCls: 'bookmarks',
				items: [
					{
						title: 'Bookmarked Beers',
						xtype: 'bookmarklistview'
					}
				]
			},
			{
				xtype: 'navigationview',
				title: 'Rated',
				iconCls: 'favorites',
				items: [
					{
						title: 'Rated Beers',
						xtype: 'ratinglistview'
					}
				]
			},
			{
				xtype: 'vendormapview',
				title: 'Vendor Map',
				iconCls: 'info'
			}
        ]
    }
});
