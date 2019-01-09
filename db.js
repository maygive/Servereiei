var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost/tgr2019test';
var collections = ['test'];
var option = {"auth":{"user":"admin","password":"tgr2019"}}
var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};
