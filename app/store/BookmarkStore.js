Ext.define('ACBF.store.BookmarkStore', {
	extend:'Ext.data.Store',
	config:{
		model: 'ACBF.model.Bookmark',
		proxy:{
			type: 'localstorage',
			id: 'beerbookmarks'
		}
	}
});