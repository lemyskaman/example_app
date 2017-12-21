var Radio = require('backbone.radio');
var core = require('kaman-core');
var ui = require('kaman-ui');
var langSource = require('./example.module.lang');
var views = require('./views');


var moduleChannelName = 'example-module';
var ModuleChannel = Radio.channel(moduleChannelName);


ModuleChannel.reply('direct:test', function () { alert('hola') });

var ExampleModuleView=ui.views.components.Module.extend({
    name:'example',
    channelName: moduleChannelName,
   
    langSource: langSource,
    views: views,

    onRender:function(){
        this.ui.header.html(this.lang('example:module:name'))
        this.showChildView('mainContent',new this.views.MainMenu() )
    }
});

var ExampleModule = {
    name: "example",
    langSource: langSource,
    channelName: moduleChannelName,
    icon: 'fa-glass',
    caption: core.Functions.lang('example:module:name', langSource),
    View: ExampleModuleView

    
};

module.exports = ExampleModule;