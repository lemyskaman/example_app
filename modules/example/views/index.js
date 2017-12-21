//example module views
var ui = require('kaman-ui');
var MainMenu = require('./example.module.main_menu.view')


//as almost all the views of this module will be show all wide we use this
var WideRowWrapper = ui.views.components.Row.extend({

    childViewClassName: 'col-lg-12',//we make the content of this row screen wide


})


var MainMenuView = WideRowWrapper.extend(
    {
        collection: new Backbone.Collection(
            [
                {
                    name: 'MainMenu',
                    contentView: MainMenu
                }
            ]
        )
    }

)



module.exports = {
    //one col and and one wide row
    MainMenu: MainMenuView,
}