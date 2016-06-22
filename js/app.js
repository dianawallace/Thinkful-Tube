$(function(){
    
    // APP Requirements
    // Accept a user search term Get JSON from the YouTube API based on the user
    // search term *Display the thumbnail image of the returned videos
    
    // gets data from youtube
function getResults(searchTerm) {
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC6qJzZE4VTLYD2X8URY7qNv_Hu68yQYW8&q=' + searchTerm, function(data){
        console.log(data);
    })   

};    
        
  // shows search results and thumbnail images
function showResults(results){
    var html = "";
    $.each(results, function(index,videos){
        
    //    html += '<li><p>' + video.snippet.Title + '</p>< target='_blank' href='https:/www.youtube.com/watch?v=' + video.id.videoId + <img src='" + video.snippet.thumbnails.high.url + "'/>/a></li>';
        
        console.log(video.snippet.Title);
    });
    
    $('#search-results ul').html(html);
}

  // use search term   
//$(function(){
  $('#search-term').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val();
        getResults(searchTerm);
  });
//});


});  