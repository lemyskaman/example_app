var Radio = require('backbone.radio');
var core = require('kaman-core');
var ui = require('kaman-ui');
var langSource = require('./example.module.lang');
var views = require('./views');

var moduleChannelName = 'example-module';
var ModuleChannel = Radio.channel(moduleChannelName);



ModuleChannel.reply('direct:test', function() {
    alert('hola');
});

var ExampleModuleView = ui.views.components.Module.extend({
    name: 'example',
    channelName: moduleChannelName,
    icon: "fa-glass",
    langSource: langSource,
    views: views


});

var ExampleModule = {
    name: "example",
    langSource: langSource,
    channelName: moduleChannelName,
    icon: 'fa-glass',
    caption: core.Functions.lang('module:example:name', langSource),
    View: ExampleModuleView


};



module.exports = ExampleModule;