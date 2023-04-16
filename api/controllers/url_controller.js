const shortid = require("shortid");
const urlModel = require("../models/url_model");


class UrlController {
    // making the url short
    static shortUrl = async (req, res) => {
        const shortURL = shortid.generate();
        const { originalURL } = req.body;
        return res.json({ request: req.body });
        try {
            const model = new urlModel({
                mainURL: originalURL,
                shortURL: shortURL,
            });
            const response = await model.save();
            res.json({ "shortURL": `${req.hostname}/redirect/${response.shortURL}`, "success": true });
        } catch (error) {
            res.json({ "error": error, "success": false })
        }
    }
    // redirecting to the main url
    static urlRedirection = async (req, res) => {
        const { shortURL } = req.params;
        try {
            const response = await urlModel.findOne({ "shortURL": shortURL });
            return res.json({ response });
            if (!response) {
                res.json({ "msg": "URL is not found !" })
            }
            res.redirect(response.mainURL);
        }
        catch (error) {
            res.json({ "msg": "URL is not found !" })
        }
    }
}

module.exports = UrlController;
