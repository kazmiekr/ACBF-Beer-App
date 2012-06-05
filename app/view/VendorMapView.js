Ext.define("ACBF.view.VendorMapView", {
	extend: 'Ext.Container',
	requires: ['Ext.Img'],
	xtype: 'vendormapview',
	config: {
		scrollable: true,
		items: {
			xtype: 'image',
			width: 684,
			height: 712,
			src: 'resources/images/vendormap.png'
		}
	}
});
