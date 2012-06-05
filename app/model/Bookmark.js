Ext.define('ACBF.model.Bookmark', {
	extend:'Ext.data.Model',
	requires:['Ext.data.identifier.Uuid'],
	config:{
		identifier: 'uuid',
		fields:[
			'id',
			'company',
			'beer_id'
		],
		associations:{
			type: 'hasOne',
			model: 'ACBF.model.BeerModel',
			primaryKey: 'id',
			foreignKey: 'id'
		}
	}
});

