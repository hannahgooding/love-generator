const handlers = require("./handlers");

function router(req, res) {
  const url = req.url;
  if (url === "/") {
    handlers.homeHandler(req, res);
  } else if (url.includes("public")) {
    handlers.publicHandler(req, res);
  } else {
    handlers.missingHandler(req, res);
  }
};

module.exports = router;