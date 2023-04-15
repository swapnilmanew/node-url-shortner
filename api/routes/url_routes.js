const express = require('express');
const UrlController = require('../controllers/url_controller');
const router = express.Router();

router.post("/api/make-url-short", UrlController.shortUrl);
router.get("/redirect/:shortURL", UrlController.urlRedirection);

module.exports = router;