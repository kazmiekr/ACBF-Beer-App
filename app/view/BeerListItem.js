// Example of a custom DataItem, but not currently used because dataview.List doesn't support it....
Ext.define('ACBF.view.BeerListItem', {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'beerlistitem',
	requires: [
		'Ext.slider.Slider'
	],
	config: {
		nameLabel: {
			flex: 1
		},
		sliderControl: {
			flex: 1
		},
		button: {
			text: 'Bookmark'
		},
		layout: {
			type: 'hbox',
			align: 'center'
		},
		dataMap: {
			getNameLabel: {
				setHtml: 'name'
			}
		}
	},
	applyButton: function(config){
		return Ext.factory(config, Ext.Button, this.getButton());
	},
	updateButton: function(newButton, oldButton){
		if (newButton){
			this.add(newButton);
		}
		if (oldButton){
			this.remove(oldButton);
		}
	},
	applyNameLabel: function(config){
		return Ext.factory(config, Ext.Component, this.getNameLabel());
	},
	updateNameLabel: function(newName, oldName){
		if (newName){
			this.add(newName);
		}
		if (oldName){
			this.remove(oldName);
		}
	},
	applySliderControl: function(config){
		return Ext.factory(config, Ext.slider.Slider, this.getSliderControl());
	},
	updateSliderControl: function(newSlider, oldSlider){
		if (newSlider){
			this.add(newSlider);
		}
		if (oldSlider){
			this.remove(oldSlider);
		}
	}
});