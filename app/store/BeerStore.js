Ext.define('ACBF.store.BeerStore', {
	extend:'Ext.data.Store',
	config:{
		sorters: 'name',
		model: 'ACBF.model.BeerModel',
		grouper:{
			groupFn: function(record){
				return record.get('company');
			}
		},
		proxy:{
			type:'ajax',
			url:'data/beers.json',
			reader:{
				type:'json',
				rootProperty:'beers'
			}
		}
	}
});