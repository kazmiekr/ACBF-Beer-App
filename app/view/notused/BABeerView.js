Ext.define("ACBF.view.BABeerView", {
	extend: 'Ext.Panel',
	xtype: 'babeerview',
	config: {
		fullscreen: true,
		layout: 'fit',
		url: null,
		items:[
		{
			xtype: 'panel',
			scroll: 'vertical',
			layout: 'fit',
			html: '<iframe width="100%" height="100%" src="http://www.w3schools.com"></iframe>'
		}]
	},
	onActivate: function(me, container){
		me.setHtml('<iframe src="http://www.w3schools.com" style:"width:100%, height:100%"></iframe>');
	}
});
