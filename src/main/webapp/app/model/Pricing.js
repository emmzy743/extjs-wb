Ext.define('app.model.Pricing', {
    extend: 'Ext.data.Model',
    fields: ['destinationZipCode', 'shipperId', 'originId', 'taskName', 'customerId', 'price', 'payable']
});