Ext.Loader.setConfig({  enabled: true });
Ext.application({
	requires: ['Ext.container.Viewport'],
    name: 'app',
    appFolder: 'app',
    controllers: [
                  'PricingController'
              ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'pricinglist',
                title: 'Pricing Sheet',
                region: 'center',
                margins: '15 15 15 15'
            }
        });
    }
});