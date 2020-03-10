var topics = ["icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",];

$("#giphy-button").on("click", function() {

    var topics = $(this).attr("giphy-input");
       
    var queryURL = "https://api.giphy.com/v1/gifs/random?&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
            url: queryURL,
            method: "GET"
    }).then(function(response) {
    
        var imageUrl = response.data.image_original_url;
        var giphyImage = $("<img>");
           giphyImage.attr("src", imageUrl);
           giphyImage.attr("alt", "giphy image");
        $("#images").prepend(giphyImage);
        
        //LOOP APPENDING BUTTONS FOR EACH STRING IN THE ARRAY
 
        // function renderButtons() {
        //     $("#giphy-buttons-view").empty();
        //         for (var i = 0; i < movies.length; i++) {
        //         var a = $("<button>");
        //         a.addClass("giphy-btn");
        //         a.attr("giphy-data", movies[i]);
        //         a.text(movies[i]);
        //     $("#giphy-buttons-view").append(a);
        //     }
        // };
        //     ///CREATE BUTTONS FROM THE ARRAY

        // // This function handles events where a movie button is clicked
        // $("#add-movie").on("click", function(event) {
        //     event.preventDefault();
        //     var movie = $("#movie-input").val().trim();
        //     movies.push(movie);
        //     renderButtons();
        // });
    
        // $(document).on("click", ".movie-btn", displayMovieInfo);
        
        // renderButtons();

    });
});

// Instructions
    //DONE // Before you can make any part of your site work, you need to
           //create an array of strings, each one related to a topic that 
           //interests you. Save it to a variable called topics.

        // Your app should take the topics in this array and create buttons in your HTML.

        // Try using a loop that appends a button for each string in the array.

        // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

        // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

        // Under every gif, display its rating (PG, G, so on).

        // This data is provided by the GIPHY API.
        // Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.


// Deploy your assignment to Github Pages.


// Rejoice! You just made something really cool.




// Minimum Requirements
// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.


// Bonus Goals


// Ensure your app is fully mobile responsive.


// Allow users to request additional gifs to be added to the page.

// Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.



// List additional metadata (title, tags, etc) for each gif in a clean and readable format.


// Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio


// Allow users to add their favorite gifs to a favorites section.

// This should persist even when they select or add a new topic.
// If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).