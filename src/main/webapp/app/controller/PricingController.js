Ext.define('app.controller.PricingController', {
    extend: 'Ext.app.Controller',
    stores: [
        'PriceRules'
    ],
    models: [
        'Pricing'
    ],
    views: [
            'pricing.ListPricing',
            'pricing.AddPricing',
            'pricing.EditPricing'
        ],
    init: function () {
    	console.log("controller init");
        this.control({
            'pricinglist': {
                itemdblclick: this.editPricing,
                removeitem: this.removePricing
            },
            'pricinglist > toolbar > button[action=create]': {
                click: this.onCreatePricing
            },
            'pricinglist > toolbar > button[action=save]': {
                click: this.onSavePricingStore
            },
            'pricingadd button[action=save]': {
                click: this.doCreatePricing
            },
            'pricingedit button[action=save]': {
                click: this.updatePricing
            }
        });
    },
    editPricing: function (grid, record) {
    	rowEditing.startEdit();
//        var view = Ext.widget('pricingedit');
//        view.down('form').loadRecord(record);
    },
    removePricing: function (pricing) {
        Ext.Msg.confirm('Remove Pricing', 'Are you sure?', function (button) {
            if (button == 'yes') {
                this.getPriceRulesStore().remove(pricing);
            }
        }, this);
    },
    onCreatePricing: function () {
    	rowEditing.cancelEdit();
        var store = this.getPriceRulesStore();
//        var view = Ext.widget('pricingadd');
        store.insert(0, {destinationZipCode:null});
        rowEditing.startEdit(0, 0);
    },
    onSavePricingStore: function () {
        var store = this.getPriceRulesStore();
        store.each(function(record){
            record.setDirty();
        });
        store.save();
    },
    doCreatePricing: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            store = this.getPriceRulesStore();
        if (form.getForm().isValid()) {
            store.add(values);
            win.close();
        }
    },
    updatePricing: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        if (form.getForm().isValid()) {
            record.set(values);
            win.close();
        }
    }
});