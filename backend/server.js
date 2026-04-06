const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shortid = require('shortid');

const app = express();
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/urlshortener')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const Url = mongoose.model('Url', {
    originalUrl: String,
    shortCode: String,
    clicks: { type: Number, default: 0 }
});

// Create Short URL
app.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;

    const shortCode = shortid.generate();

    const url = new Url({ originalUrl, shortCode });
    await url.save();

    res.json({
        shortUrl: `http://localhost:3000/${shortCode}`
    });
});

// Redirect
app.get('/:code', async (req, res) => {
    const url = await Url.findOne({ shortCode: req.params.code });

    if (!url) return res.send("Not found");

    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);
});

app.listen(3000, () => console.log("Server running on port 3000"));
