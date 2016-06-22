$(function(){
    
    // APP Requirements
    // Accept a user search term Get JSON from the YouTube API based on the user
    // search term *Display the thumbnail image of the returned videos
    
    // gets data from youtube
function getResults(searchTerm) {
    $.getJSON('https://www.googleapis.com/youtube/v3/search') , 
        {
            'part': 'snippet',
            'key': 'AIzaSyC6qJzZE4VTLYD2X8URY7qNv_Hu68yQYW8',
            'q': searchTerm
        }
};    
        

  // shows search results and thumbnail images
function showResults(results){
    var html = "";
    $.each(results, function(index,value){
        
        html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });
    
    $('#search-results ul').html(html);
}

  // use search term    
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    $.getJSON('https://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
      showResults(data.Search);
    });
  });
});

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});


});  