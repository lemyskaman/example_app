
var Backbone = require('backbone');
var core = require('kaman-core');
var ui  = require('kaman-ui');
var langSource = require('./example.module.lang');
module.exports = {
    name: "example",
    channelName: 'example-module',
    icon: 'fa-glass',
    caption: core.Functions.lang('module:name', langSource),
    MainView : Backbone.View.extend({})

}

