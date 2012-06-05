Ext.define('ACBF.model.Rating', {
	extend:'Ext.data.Model',
	requires:['Ext.data.identifier.Uuid'],
	config:{
		identifier: 'uuid',
		fields:[
			'id',
			'company',
			'beer_id',
			{
				name: 'smell',
				type: 'int'
			},
			{
				name: 'taste',
				type: 'int'
			},
			{
				name: 'mouthfeel',
				type: 'int'
			},
			{
				name: 'overall',
				type: 'int'
			},
			{
				name: 'score',
				type: 'float'
			}
		],
		associations:{
			type: 'hasOne',
			model: 'ACBF.model.BeerModel',
			primaryKey: 'id',
			foreignKey: 'id'
		}
	}
});

