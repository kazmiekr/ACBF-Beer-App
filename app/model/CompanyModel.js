Ext.define('ACBF.model.CompanyModel', {
	extend:'Ext.data.Model',
	config:{
		fields:[
			'company',
		],
		hasMany: [
			{
				model: 'ACBF.model.BeerModel',
				name: 'beerList',
				associationKey: 'beerList'
			}
		],
	}
});

