const fs = require("fs");
const path = require("path");

function homeHandler(req, res) {
  const filePath = path.join(__dirname, "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.error(error);
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Not found</h1>");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
};

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  png: "image/png",
  ico: "image/x-icon",
};

function publicHandler(req, res) {
  const url = req.url;
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension];

  const filePath = path.join(__dirname, url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.error(error);
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Not found</h1>");
    } else {
      res.writeHead(200, { "content-type": type });
      res.end(file);
    }
  });
}

function missingHandler(req, res) {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("<h1>Not found</h1>");
};

module.exports = { homeHandler, publicHandler, missingHandler };