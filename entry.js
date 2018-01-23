//as the current app display language is to be guessed by the backend server
//it will be on DOM lang so we retrive it a make it GLOBAL
//window.LANG = document.documentElement.lang;
window._ = require('underscore');
var Backbone = require('backbone');
window.Backbone = Backbone;
Backbone.$ = window.$;
var radio = require('backbone.radio');
var KamanCore = require('kaman-core');
var configData = require('./config');
var config = new KamanCore.Config(configData);
radio.channel('kaman:app').reply('config', config);
        

if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

/*
var core = require('./kaman/core')
console.log(core)
window.core = core
var ui= require('./kaman/ui')
window.ui=ui
console.log(ui)*/





//got to come after requiring backbone.radio so radio reply for config is setted
var KamanApp = require('kaman-app');
var KamanUi = require('kaman-ui');
var langSource = require('./lang');
window.kaman={
  app:KamanApp,
  core:KamanCore,
  ui:KamanUi
}
/* every time you create a new application
*you need to pass at least a region dom selector, a MainLayoutView Constructor
*and a modules object with all modules view data
**/

var app = new KamanApp({

  name: 'example App',
  langSource: langSource,
  modules: [require('./modules/example'), {}], //require( './modules.js')
  Ui: KamanUi.Object.extend({
    name: 'KamanApp UI',
    langSource: langSource
  }),
  config:config
})

window.app = app;



//so lets jquery check dom load
$(document).ready(function () {

  console.log('Dom Loaded');

  //  window.App = App;
  //and we fireup the app
  //
  app.start();
  

});
