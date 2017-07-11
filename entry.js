//as current language is to be guessed by the backend server
//it will be on DOM lang so we retive it a make it GLOBAL
//window.LANG = document.documentElement.lang;
window._ = require('underscore');


var Backbone = require('backbone');
window.Backbone = Backbone;
Backbone.$ = window.$;
var radio = require('backbone.radio');

/*
var core = require('./kaman/core')
console.log(core)
window.core = core
var ui= require('./kaman/ui')
window.ui=ui
console.log(ui)*/


var kamanCore = require('kaman-core');

var configData = require('./config');
var config = new kamanCore.Config(configData);
radio.channel('kaman:app').reply('config', config);

//got to come after so radio reply for config is setted
var kamanApp = require('kaman-app');

//every time you create a new application
//you need to pass at least region selector, MainLayoutView Constructor
//and a modules object with all modules view data

var app = new kamanApp({
  name: 'example App',
  langSource: require('./lang'),
  modules: [require('./modules/example'),{}] //require( './modules.js')
});

window.app = app;


//so lets jquery check dom load
$(document).ready(function() {

  console.log('Dom Loaded');

  //  window.App = App;
  //and we fireup the app
  //
  app.start();
  app

});
