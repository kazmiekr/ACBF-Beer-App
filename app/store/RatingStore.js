Ext.define('ACBF.store.RatingStore', {
	extend:'Ext.data.Store',
	config:{
		sorters: {
			direction: 'DESC',
			property: 'score'
		},
		model: 'ACBF.model.Rating',
		proxy:{
			type: 'localstorage',
			id: 'beerratings'
		}
	}
});