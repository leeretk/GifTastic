var topics = ["icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",];

$("#giphy-button").on("click", function(event) {
        event.preventDefault();
        // This line will grab the text from the input box
        var giphy = $("#giphy-input").val().trim();
        topics.push(giphy);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
                url: queryURL,
                method: "GET"
                //after the data comes back... then do something
        }).then(function (response) {
                console.log(response)

                for (i = 0; i < 10; i++) {
                        //add counter so you can get 10 different images each time. 
                        //add a random number generating and add 10 // do something here
                        //so you can change the sequence of i.

                        //get image from giphy.com
                        var imageUrl = response.data[i].images.preview_gif.url;
                        var giphyImage = $("<img>");
                        //create giphy attribute
                        giphyImage.attr("src", imageUrl);
                        giphyImage.attr("alt", "giphy image");
                        //append images
                        $("#images").prepend(giphyImage);

                        //get rating from giphy.com
                        var rating = response.data[i].rating;
                        var pRating = $("<p>").text("Rating: " + rating);
                        giphyDiv.append(pRating);
                        $("#rating").prepend(pRating);

                        //get title from giphy.com
                        var title = response.data[i].title;
                        var pTitle = $("<p>").text("Rating: " + title);
                        giphyDiv.append(pTitle);
                        $("#title").prepend(pTitle);
                }
                renderButtons();
               // $(document).on("click", ".giphy-btn", displayGiphy);

        });

});


function renderButtons() {
        console.log("I am in the render function")
        $("#new-giphy-buttons").empty();
        for (var i = 0; i < topics.length; i++) {
                var a = $("<button>");
                a.addClass("topic");
                a.attr("data-name", topics[i]);
                a.text(topics[i]);
                $("#new-giphy-buttons").append(a);
                console.log("TOPICS: " + topics[i])
        }
};

renderButtons();

// //This function handles events where a movie button is clicked
// $("#add-giphy").on("click", function (event) {
//         event.preventDefault();
//         var topic = $(this).attr("data-name");
//         var topic = $("giphy-input").val().trim();
//         topics.push(topic);
//         console.log("topic" + topic);
// });




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
        // $("#add-giphy").on("click", function(event) {
        //     event.preventDefault();
        //     var topic = $("#giphy-input").val().trim();
        //     topics.push(topic);
        //     renderButtons();
        // });

        // $(document).on("click", ".giphy-btn", displayGiphy);

        // renderButtons();



// Instructions
        //DONE // Before you can make any part of your site work, you need to

        //DONE//create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

        //DONE // Your app should take the topics in this array and create buttons in your HTML.

        //DONE// Try using a loop that appends a button for each string in the array.

                // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

                // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

                // Under every gif, display its rating (PG, G, so on).


        //DONE// Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

// Deploy your assignment to Github Pages.


// Rejoice! You just made something really cool.

        // Minimum Requirements
        // Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.


// Bonus Goals
                // Ensure your app is fully mobile responsive.
                // Allow users to request additional gifs to be added to the page.
        //DONE// Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.
                // List additional metadata (title, tags, etc) for each gif in a clean and readable format.
                // Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio
                // Allow users to add their favorite gifs to a favorites section.
                // This should persist even when they select or add a new topic.
                // If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).
