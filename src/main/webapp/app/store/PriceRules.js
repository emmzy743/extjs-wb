Ext.define('app.store.PriceRules', {
    extend: 'Ext.data.Store',
    model: 'app.model.Pricing',
    autoLoad: true,
    autoSync: false,
    proxy: {
        type: 'ajax',
//        limitParam: 'size',
        startParam: undefined,
        api: {
            create: 'rest/pricing/add',
            read: 'rest/pricing/list',
            update: 'rest/pricing/update',
            destroy: 'rest/pricing/delete'
        },
        reader: {
            type: 'json',
//            root: 'data',
//            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});