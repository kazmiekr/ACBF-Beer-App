Ext.define('ACBF.model.BeerModel', {
	extend:'Ext.data.Model',
	config:{
		fields:[
			'id',
			'company',
			'name',
			'url',
			'type',
			'abv',
			'bascore',
			'broscore'
		]
	}
});