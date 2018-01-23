var core = require('kaman-core');
var ui = require('kaman-ui');
var langSource  =require('./../example.module.lang');
        
        
var Button  =ui.views.components.Button.extend({
    //expose_as:"button"
})

var MainMenuView = ui.views.components.Panel.extend({
    langSource:langSource,
    expose_as:"mainMenu",
    onRender: function () {
        this.ui.heading.html("<b>"+this.lang("module:example:main:menu")+"</b>")
        this.ui.footer.html("");
        
        console.log("button will be rendered from panel")
        //this.showChildView('body', new ui.views.components.Button({ expose_as: "button",name:"button",disabled:true }));
        this.showChildView("body", new Button({expose_as:"button",disabled:true}))
    }

})

/**
 *wrapping the above main menu view (within a grid element) to be displayed in order   
 */
var WrappedMainMenuView = ui.views.components.grid.Row.extend({
    childViewClassName: 'col-lg-12',//the intenion is to make the content of this row 100% screen wide
    collection: new Backbone.Collection(
        [
            {
                name: 'MainMenu',
                contentView: MainMenuView
            }
        ]
    )
})



module.exports = WrappedMainMenuView  ;