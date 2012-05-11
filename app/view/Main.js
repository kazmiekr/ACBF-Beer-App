Ext.define("ACBF.view.Main", {
    extend: 'Ext.tab.Panel',
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
						title: 'Beer List',
						xtype: 'beerlistview'
					}
				]
            },
			{
				xtype: 'navigationview',
				title: 'Styles',
				iconCls: 'search',
				items: [
					{
						title: 'Beers By Style',
						xtype: 'beerstylelistview'
					}
				]
			}
        ]
    }
});
