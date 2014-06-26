var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

//Render the given asset (only renders assets that are in the public directory)
exports.serveAssets = function(response, asset) {
  //Only serves assets in 'public' directory
  var filename = archive.paths.siteAssets + '/' + asset;
  serveFile(response, filename);
};

exports.serveCachedSites = function(response, siteName) {
  var siteName = archive.paths.archivedSites + '/' + siteName;
  serveFile(response, siteName);
};

var serveFile = function(response, filename) {

  //Checks whether the asset passed has a valid path
  fs.exists(filename, function(exists) {
    //If not, 404
    if(!exists) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    //If so, render the asset
    fs.readFile(filename, 'binary', function(err, file) {
      if(err) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.write(err + '\n');
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, 'binary');
      response.end();
    });
  });
};



// As you progress, keep thinking about what helper functions you can put here!
