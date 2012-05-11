Ext.define('ACBF.store.BeerStoreByStyle', {
	extend:'Ext.data.Store',
	config:{
		sorters: 'name',
		model: 'ACBF.model.BeerModel',
		grouper:{
			groupFn: function(record){
				return record.get('type');
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