Ext.define('app.view.pricing.EditPricing', {
    extend: 'Ext.window.Window',
    alias: 'widget.pricingedit',
    title: 'Edit Pricing',
    layout: 'fit',
    autoShow: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                bodyStyle: {
                    background: 'none',
                    padding: '10px',
                    border: '0'
                },
                items: [
                        {
                            xtype: 'textfield',
                            name: 'destinationZipCode',
                            allowBlank: false,
                            fieldLabel: 'Destination Zip'
                        },
                        {
                            xtype: 'textfield',
                            name: 'shipperId',
                            allowBlank: false,
                            fieldLabel: 'Shiiper Id'
                        },
                        {
                            xtype: 'textfield',
                            name: 'originId',
                            allowBlank: false,
                            fieldLabel: 'Origin Id'
                        },
                        {
                            xtype: 'textfield',
                            name: 'taskName',
                            allowBlank: false,
                            fieldLabel: 'Task Name'
                        },
                        {
                            xtype: 'textfield',
                            name: 'customerId',
                            allowBlank: false,
                            fieldLabel: 'Customer Id'
                        },
                        {
                            xtype: 'textfield',
                            name: 'price',
                            allowBlank: false,
                            fieldLabel: 'Price'
                        },
                        {
                            xtype: 'textfield',
                            name: 'payable',
                            allowBlank: false,
                            fieldLabel: 'Payable'
                        }
                 ]
            }
        ];
        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];
        this.callParent(arguments);
    }
});