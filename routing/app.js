var url = require('url');
var fs = require('fs');

function renderHtml(path, res) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Some Text');
        } else {
            res.write(data);
        }
        res.end();
    });
}


// define function to be called in server.js
module.exports = {
    handleRequest: function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});

        //define routes
        var path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHtml('./index.html', res);
                break;
            case '/login':
                renderHtml('./login.html', res);
                break;
            default: 
                res.writeHead(404);
                res.write('Route Not Defined');
                res.end();
        }

    }
};