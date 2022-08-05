const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const web3Articles = [];
const cryptoArticles = [];
const nftArticles = [];
const metaverseArticles = [];
const vrArticles = [];


const baseGoogleNewsUrl = "https://news.google.com/search?q=";
const endGoogleNewsUrl = "&hl=en-US&gl=US&ceid=US%3Aen";



axios.get(baseGoogleNewsUrl + "web3" + endGoogleNewsUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $("div.NiLAwe.y6IFtc.R7GTQ.keNKEd.j7vNaf.nID9nc", html).each(function () {
            const h3Element = $(this).find("h3.ipQwMb.ekueJc.RD0gLb");
            const title = h3Element.text();
            const urlExtension = h3Element.find("a").attr("href");

            const imageSrc = $(this).find("img").attr("src");
            const timePosted = $(this).find("time").text();            

            web3Articles.push({
                title,
                url: "https://news.google.com/" + urlExtension,
                imageSrc,
                timePosted
            });
        });
    });

axios.get(baseGoogleNewsUrl + "crypto" + endGoogleNewsUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $("div.NiLAwe.y6IFtc.R7GTQ.keNKEd.j7vNaf.nID9nc", html).each(function () {
            const h3Element = $(this).find("h3.ipQwMb.ekueJc.RD0gLb");
            const title = h3Element.text();
            const urlExtension = h3Element.find("a").attr("href");

            const imageSrc = $(this).find("img").attr("src");
            const timePosted = $(this).find("time").text();            

            cryptoArticles.push({
                title,
                url: "https://news.google.com/" + urlExtension,
                imageSrc,
                timePosted
            });
        });
    });

axios.get(baseGoogleNewsUrl + "nfts" + endGoogleNewsUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $("div.NiLAwe.y6IFtc.R7GTQ.keNKEd.j7vNaf.nID9nc", html).each(function () {
            const h3Element = $(this).find("h3.ipQwMb.ekueJc.RD0gLb");
            const title = h3Element.text();
            const urlExtension = h3Element.find("a").attr("href");

            const imageSrc = $(this).find("img").attr("src");
            const timePosted = $(this).find("time").text();            

            nftArticles.push({
                title,
                url: "https://news.google.com/" + urlExtension,
                imageSrc,
                timePosted
            });
        });
    });

axios.get(baseGoogleNewsUrl + "metaverse" + endGoogleNewsUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $("div.NiLAwe.y6IFtc.R7GTQ.keNKEd.j7vNaf.nID9nc", html).each(function () {
            const h3Element = $(this).find("h3.ipQwMb.ekueJc.RD0gLb");
            const title = h3Element.text();
            const urlExtension = h3Element.find("a").attr("href");

            const imageSrc = $(this).find("img").attr("src");
            const timePosted = $(this).find("time").text();            

            metaverseArticles.push({
                title,
                url: "https://news.google.com/" + urlExtension,
                imageSrc,
                timePosted
            });
        });
    });

axios.get(baseGoogleNewsUrl + "vr" + endGoogleNewsUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $("div.NiLAwe.y6IFtc.R7GTQ.keNKEd.j7vNaf.nID9nc", html).each(function () {
            const h3Element = $(this).find("h3.ipQwMb.ekueJc.RD0gLb");
            const title = h3Element.text();
            const urlExtension = h3Element.find("a").attr("href");

            const imageSrc = $(this).find("img").attr("src");
            const timePosted = $(this).find("time").text();            

            vrArticles.push({
                title,
                url: "https://news.google.com/" + urlExtension,
                imageSrc,
                timePosted
            });
        });
    });



app.get("/", (req, res) => {
    res.json("Nexus news home.");
});

app.get("/web3", (req, res) => {
    res.json(web3Articles);
});

app.get("/crypto", (req, res) => {
    res.json(cryptoArticles);
});

app.get("/nfts", (req, res) => {
    res.json(nftArticles);
});

app.get("/metaverse", (req, res) => {
    res.json(metaverseArticles);
});


app.get("/vr", (req, res) => {
    res.json(vrArticles);
});

app.listen(8000, () => {
    console.log("Server listening on port 8000")
});