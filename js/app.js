$(function() {

    // Requirements
    // Accept a user search term Get JSON from the YouTube API based on the user
    // search term *Display the thumbnail image of the returned videos

    // gets data from youtube
    function getResults(searchTerm) {
        $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC6qJzZE4VTLYD2X8URY7qNv_Hu68yQYW8&q=' + searchTerm, function(data) {
            console.log(data);
            showResults(data); 
        });
    }
    // shows search results and thumbnail images
    function showResults(data) {
                console.log(data);
                
                $.each(data.items, function(index, video) {
                    console.log(video);
                    var videoId = video.id.videoId;
                    var thumbnails = video.snippet.thumbnails.medium.url;
                    $('ul').append('<li>' + '<p>' + video.snippet.title + '</p>' +
                    '<a target="_blank" href="https://www.youtube.com/watch?v=' + videoId + '"><img src= "' + thumbnails +'"/></a></li>');
                });
            }

    // use search term   
    //$(function(){
    $('#search-term').submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getResults(searchTerm);
    });
    //   console.log(showResults);
    //});


}); //end of jQuery
