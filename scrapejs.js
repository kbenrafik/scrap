var sp = require('scrapejs').init({
    cc: 2, // up to 2 concurrent requests
    delay: 50 * 1000 // delay 5 seconds before each request
});
var cheerio = require('cheerio');

sp.load('https://frontendmasters.com/courses/react-native/')
.then(function($){


    var jQuery = cheerio.load($.html());
         $('.video-nav-section').each(function(index, section) {
        			$(section).find('.video-nav-item').each(function(index, videoItem) {
        				var titleVideo = $(videoItem).find('.title').text();
        				console.log(titleVideo);
        			});
                });

    console.log(jQuery('.video-element').html());
})
.fail(function(err){
    console.log(err);
})