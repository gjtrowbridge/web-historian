var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpRequest = require('http-request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(cb){
  fs.readFile(exports.paths.list, function(err, text) {
    var urls = text.toString().split('\n');
    cb(urls);
  });
};

exports.isUrlInList = function(url, cb){
  exports.readListOfUrls(function(urls) {
    for (var i = 0; i < urls.length; i++) {
      if (urls[i] === url) {
        cb(true);
        return;
      }
    }
  });
  cb(false);
};

exports.addUrlToList = function(url) {
  exports.isUrlInList(url, function(inList) {
    if (!inList) {
      fs.appendFile(exports.paths.list, url);
    }
  });
};

exports.isUrlArchived = function(url, cb) {
  var filename = exports.paths.archivedSites + '/' + url;
  fs.exists(filename, function(exists) {
    cb(exists);
  });
};

exports.downloadUrls = function(urls){
  _.each(urls, function(url) {
    exports.isUrlArchived(url, function(archived) {
      if (!archived) {
        httpRequest.get(url, function(error, response) {
          if (error) {
            console.log("Error");
            return;
          } else {
            var filename = exports.paths.archivedSites + '/' + url;
            fs.writeFile(filename, response.buffer.toString());
          }
        });
      }
    });
  });
};
