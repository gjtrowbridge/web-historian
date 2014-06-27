var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpRequest = require('http-request');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'webHistorianDb'
});
connection.connect();
// connection.query('select * from sites', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('There are: ' + rows.length + ' records.');
//   console.log('The solution is: ', rows[0]);
// });

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
//
exports.readTableRows = function(cb) {
  connection.query('select * from sites', function(err, rows) {
    if (err) throw error;
    cb(rows);
  });
};

exports.readListOfUrls = function(cb){
  exports.readTableRows(function(rows) {
    var urls = _.map(rows, function(row) {
      return row.url;
    });
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
      connection.query('insert into sites (url) values (\'' + url + '\')');
    }
  });
};

exports.isUrlArchived = function(url, cb) {
  exports.readTableRows(function(rows) {
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].cachedSite === null && rows[i].url === url) {
        cb(true);
        return;
      }
    }
    cb(false);
  });
};

exports.downloadAllUrls = function() {
  exports.readTableRows(function(rows) {
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (row.cachedSite === null) {
        httpRequest.get(row.url, function(error, response) {
          if (error) {
            console.log("Error");
            return;
          } else {
            connection.query('update sites set cachedSite=\'' + response.buffer.toString() + '\' where id=' + row.id);
          }
        });
      }
    }
  });
};


// exports.downloadUrls = function(urls){
//   _.each(urls, function(url) {
//     exports.isUrlArchived(url, function(archived) {
//       if (!archived) {
        // httpRequest.get(url, function(error, response) {
        //   if (error) {
        //     console.log("Error");
        //     return;
        //   } else {
        //     var filename = exports.paths.archivedSites + '/' + url;
        //     fs.writeFile(filename, response.buffer.toString());
        //   }
        // });
//       }
//     });
//   });
// };
