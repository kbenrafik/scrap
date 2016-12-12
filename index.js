var Crawler = require("crawler");
var mkdir = require('mkdirp-bluebird');
var url = require('url');
var isLoggerActivated = false;

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page 
    callback : function (error, result, $) {
        // $ is Cheerio by default 
        //a lean implementation of core jQuery designed specifically for the server
		//createFolder('videos');

		var titleOfCourse = $('title').text();
		var folderVideos = "courses/" + titleOfCourse + '/videos';
		if(isLoggerActivated) {
			console.log(titleOfCourse);
		}

		createFolder(folderVideos);
	
        $('.video-nav-section').each(function(index, section) {
        	var sectionTitle = index + 1 + '. ' + $(section).find('.video-nav-section-title').text();
			if(isLoggerActivated) {
				console.log(sectionTitle);
			}
			createFolder(folderVideos + '/' + sectionTitle);
			$(section).find('.video-nav-item').each(function(index, videoItem) {
				var titleVideo = index + 1 + '. ' + $(videoItem).find('.title').text();
				if(isLoggerActivated) {
					console.log(titleVideo);
				}
				createFolder(folderVideos + '/' + sectionTitle + '/' + titleVideo);
			});
        });

		function createFolder(name){
			mkdir(name)
		  .then(function (made) {
			console.log("folder is created") //=> '/tmp/foo'
		  })		 
		  .catch(function (err) {
			console.error(err)
		  });
		}
    }
});
 
c.queue('https://frontendmasters.com/courses/react-native');