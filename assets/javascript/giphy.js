
var hockeyTopics = ["icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",];

$("#getHockeyTopic-button").on("click", function () {
        event.preventDefault();

        // This line will grab the text from the input box
        var getHockeyTopic = $("#getHockeyTopic-input").val().trim();

        hockeyTopics.push(getHockeyTopic);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hockeyTopics + "_hockey_bloopers" + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


       // Perfoming an AJAX GET request to our queryURL
        $.ajax({
                url: queryURL,
                method: "GET"
                //after the data comes back... then do something
        }).then(function (response) {
                console.log("ajax was called")
                console.log(response)

                for (i = 0; i < 10; i++) {
                        //set image variables
                        var imageUrl = response.data[i].images.downsized_medium.url;
                        var getHockeyTopicImage = $("<img>");
                        console.log("Title: " + getHockeyTopicImage)
                        //create getHockeyTopic attribute
                        getHockeyTopicImage.attr("src", imageUrl);
                        getHockeyTopicImage.attr("alt", "getHockeyTopicimage");
                        //append images
                        console.log("image source applied")

                        // $("#image-title-rating").prepend(" Title: " + title + getHockeyTopicImage + " Rating: " + rating );

                        $("#images").prepend(getHockeyTopicImage);


                        //$("images").hide().animate();
                        console.log("image was downloaded")
                        //turn off image animation
                        //create toggle
                        //should we append to a DIV here so the image, rating and title show in the same container?

                        //get rating from giphy.com
                        var rating = response.data[i].rating;
                        $("#rating").text(JSON.stringify("Rating: " + rating));
                        $("#rating").prepend(rating);
                        console.log("Rating: " + rating)

                        //get title from giphy.com
                        var title = response.data[i].title;
                        $("#title").text(JSON.stringify("Title: " + title));
                        $("#title").prepend(title);
                        console.log("Title: " + title)
                };
                renderButtons();
        });
});

function renderButtons() {
        $("#new-getHockeyTopic-buttons").empty();

       for (var i = 0; i < hockeyTopics.length; i++) {
              var a = $("<button>");
              a.addClass("hockeyTopic");
               a.attr("hockey-data", hockeyTopics[i]);
              a.text(hockeyTopics[i]);
               $("#new-getHockeyTopic-buttons").append(a);
             console.log("HockeyTopics: " + hockeyTopics[i])
        }
};
renderButtons();








// $("#data-still").on("click", function() {var state = $(getHockeyTopicImage).attr("data-state");

// if (state === "still") {
//         $(getHockeyTopicImage).attr("src", $(this).attr("data-animate"));
//         $(getHockeyTopicImage).attr("data-state", "animate");
// } else {
//         $(getHockeyTopicImage).attr("src", $(this).attr("data-still"));
//         $(getHockeyTopicImage).attr("data-state", "still");
//         }


// //This function handle the buttons

// $("#add-hockeyTopics").on("click", function (event) {
//         event.preventDefault();
//         var topic = $(this).attr("hockey-data");
//         var topic = $("hockeyTopic-input").val().trim();
//         hockeyTopics.push(topic);
//         console.log("hockeyTopic" + topic);
//         renderButtons();
// });

// $(document).on("click",
//         $("#add-hockeyTopics"),
//         $("#getHockeyTopic-button")
// );






// Instructions
        //DONE // Before you can make any part of your site work, you need to

        //DONE//create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

        //DONE // Your app should take the topics in this array and create buttons in your HTML.

        //DONE// Try using a loop that appends a button for each string in the array.

                // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the getHockeyTopic API and place them on the page.

                // When the user clicks one of the still getHockeyTopic images, the gif should animate. If the user clicks the gif again, it should stop playing.

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
