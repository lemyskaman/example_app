
//order matters
var modules = {
    //kapp bundled modules
    notify:require('./modules/notify/index.js'),
    auth: require('./modules/auth/index.js'),
    users: require('./modules/users/index.js'),


    people: require('./modules/people/index.js')


};

module.exports = modules;