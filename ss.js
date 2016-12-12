var scraperjs = require('scraperjs');



scraperjs.StaticScraper.create('https://next.frontendmasters.com/courses/advanced-javascript/speaker-introduction')
    .scrape(function($) {
       console.log($('body').html())
    })
    .then(function(news) {
        console.log(news);
    })