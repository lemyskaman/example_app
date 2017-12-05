var ui = require('kaman-ui');
var langSource = require('../example.module.lang');

var ExampleMainView = ui.views.components.Row.extend({
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

module.exports = ExampleMainView;