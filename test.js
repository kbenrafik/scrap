var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    
    url = 'https://next.frontendmasters.com/courses/advanced-javascript/speaker-introduction';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

            // We'll use the unique header class as a starting point.
console.log('khalid');
setInterval(function(){console.log($('body').html());},2000);
            
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;