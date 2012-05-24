Ext.define("ACBF.view.Main", {
    extend: 'Ext.tab.Panel',
	requires: ['Ext.Panel'],
    config: {
        tabBarPosition: 'bottom',
		fullscreen: true,
        items: [
            {
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
						xtype: 'panel'
					}
				]
			},
			{
				xtype: 'navigationview',
				title: 'Vendor Map',
				iconCls: 'info',
				items: [
					{
						title: 'Vendor Map',
						xtype: 'panel'
					}
				]
			}

        ]
    }
});
