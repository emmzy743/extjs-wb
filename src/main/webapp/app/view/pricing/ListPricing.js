var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });
Ext.define('app.view.pricing.ListPricing', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pricinglist',
    title: 'All Pricings',
    store: 'PriceRules',
    plugins: [rowEditing],
    initComponent: function () {
    	console.log('loading list');
        this.tbar = [{
            text: 'Create Pricing', action: 'create',
        },{
            text: 'Save All Changes', action: 'save'
        }];
        this.columns = [
            { header: 'Destination Zip', dataIndex: 'destinationZipCode', flex: 1, editor: {
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            } },
            { header: 'Origin Id', dataIndex: 'originId', flex: 1, editor: {
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            }  },
            { header: 'Shipper Id', dataIndex: 'shipperId', flex: 1, editor: {
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            }  },
            { header: 'Task Name', dataIndex: 'taskName', flex: 1 , editor: {
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            } },
            { header: 'Customer Id', dataIndex: 'customerId', flex: 1, editor: {
                // defaults to textfield if no xtype is supplied
                allowBlank: false
            }  },
            { header: 'Price', dataIndex: 'price', flex: 1, editor: {
            	  xtype: 'numberfield',
                allowBlank: false
            }  },
            { header: 'Payable', dataIndex: 'payable', flex: 1, editor: {
            	  xtype: 'numberfield',
            	  allowBlank: false
            } }
        ];
        this.addEvents('removeitem');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Remove Pricing',
                handler: function () { this.fireEvent('removeitem', this.getSelected()); },
                scope: this
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                this.actions.removeitem
            ]
        });
        this.on({
            itemcontextmenu: function (view, rec, node, index, e) {
                e.stopEvent();
                contextMenu.showAt(e.getXY());
                return false;
            }
        });
        console.log("hello");
        this.callParent(arguments);
    },
    getSelected: function () {
        var sm = this.getSelectionModel();
        var rs = sm.getSelection();
        if (rs.length) {
            return rs[0];
        }
        return null;
    }
});