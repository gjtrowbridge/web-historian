var path = require('path');
var archive = require('../helpers/archive-helpers.js');
var helpers = require('./http-helpers.js');
var url = require('url');
// require more modules/folders here!
//
//
var qs = require('querystring');

//Handles incoming server requests
exports.handleRequest = function (request, response) {
  // res.end(archive.paths.list);

  //Get URI from URL
  var uri = url.parse(request.url).pathname;

  //Only handles root urls
  if (uri === '/') {
    if (request.method === 'POST') {
      request.on('data', function(data) {
        //Get url data from post request
        var postedData = qs.parse(data.toString());

        //Check whether url is already archived
        archive.isUrlArchived(postedData.url, function(isArchived) {
          if (isArchived) {
            //display cached page
            helpers.serveCachedSites(response, postedData.url);

          } else {
            //Adds url to list if it is not already in list
            archive.addUrlToList(postedData.url);

            //Navigate to loading page
            helpers.serveAssets(response, 'loading.html');
          }
        });
      });
    } else {
      //Render the home page (index.html)
      helpers.serveAssets(response, 'index.html');
    }

  //Otherwise tries to serve cached site
  } else {
    helpers.serveCachedSites(response, uri.substr(1));
  }
};
