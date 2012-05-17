Ext.define('ACBF.store.BeerStore', {
	extend:'Ext.data.Store',
	config:{
		sorters: 'company',
		model: 'ACBF.model.CompanyModel',
		grouper:{
			groupFn: function(record){
				return record.get('company');
			}
		},
		proxy:{
			type:'ajax',
			url:'data/beerlist.json',
			reader:{
				type:'json',
				rootProperty:'beers'
			}
		}
	}
});