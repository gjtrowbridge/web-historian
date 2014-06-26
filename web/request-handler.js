var path = require('path');
var archive = require('../helpers/archive-helpers.js');
var helpers = require('./http-helpers.js');
var url = require('url');
// require more modules/folders here!

//Handles incoming server requests
exports.handleRequest = function (request, response) {
  // res.end(archive.paths.list);

  //Get URI from URL
  var uri = url.parse(request.url).pathname;

  //Only handles root urls
  if (uri === '/') {
    //Render the home page (index.html)
    helpers.serveAssets(response, 'index.html');

  //Otherwise tries to serve cached site
  } else {
    helpers.serveCachedSites(response, uri.substr(1));
  }
};
