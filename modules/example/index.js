var Backbone = require('backbone');
var Mn = require('backbone.marionette')
var core = require('kaman-core');
var ui = require('kaman-ui');

var langSource = require('./example.module.lang');
var views = require('./views')

/*
//var views = require('./views');
var XView = core.View.extend({
    tagName: 'label',
    template: _.template('<b>interno</b>')
})

var ColView = core.View.extend({
    template: _.template('<div id="content"></div>'),
    replaceableRegions: {
        content: '#content'
    },
    onRender: function () {
        this.showChildView('content', new this.model.attributes.content())
    }
})*/
var cosa = Backbone.View.extend();
/*
var views = {

    Index: ui.views.components.Row.extend({
        langSource: langSource,
        childViewClassName: 'col-lg-4',
        collection: new Backbone.Collection([{
            name: 'MainMenu',
            content: ui.views.elements.Panel.extend()
        }, {
            name: 'other thing',
            content: ui.views.components.Loren.extend()
        }])
    })

};*/





var ExampleModule = {
    name: "example",
    langSource: langSource,
    channelName: 'example-module',
    icon: 'fa-glass',
    caption: core.Functions.lang('module:name', langSource),
    View: ui.views.components.Module.extend({
        langSource: langSource,
        views: views
    })
};

module.exports = ExampleModule