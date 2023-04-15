const mongoose = require("mongoose");
const urlSchema = mongoose.Schema({
    mainURL: { type: String, require: true },
    shortURL: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
});

const urlModel = mongoose.model("urlModel", urlSchema);
module.exports = urlModel;