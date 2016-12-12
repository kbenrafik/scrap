var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    var url = "https://frontendmasters.com/courses/react-native/#v=pjw7iv869m&p=0.0741";
    page.open(url, function() {
      page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
               $('.video-nav-section').each(function(index, section) {
                 			$(section).find('.video-nav-item').each(function(index, videoItem) {
                 				var titleVideo = $(videoItem).find('.title').text();
                 				console.log(titleVideo);
                 			});
                         });
        }, function(){
          ph.exit()
        });
      });
    });
  });
});