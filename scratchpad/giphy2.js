
var hockeyTopics = ["icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",];

$("#getHockeyTopic-button").on("click", function displayHockeyInfo() {
        event.preventDefault();

        // This line will grab the text from the input box
        var getHockeyTopic = $("#getHockeyTopic-input").val().trim();

        hockeyTopics.push(getHockeyTopic);

        var queryURL = "https://api.getHockeyTopic.com/v1/gifs/search?q=" + getHockeyTopic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

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

                        //get image from getHockeyTopic.com
                        var imageUrl = response.data[i].images.preview_gif.url;
                        var getHockeyTopicImage = $("<img>");
                        //create getHockeyTopic attribute
                        getHockeyTopicImage.attr("src", imageUrl);
                        getHockeyTopicImage.attr("alt", "getHockeyTopic image");
                        //append images
                        $("#images").prepend(getHockeyTopicImage);
                        //turn off image animation 
                        //create toggle
                        //should we append to a DIV here so the image, rating and title show in the same container?

                        //get rating from getHockeyTopic.com
                        var rating = response.data[i].rating;
                        $("#rating").text(JSON.stringify("Rating: " + rating));
                        $("#rating").prepend(title);
                        console.log("Rating: " + title)

                        //get title from getHockeyTopic.com
                        var title = response.data[i].title;
                        $("#title").text(JSON.stringify("Title: " + title));
                        $("#title").prepend(title);
                        console.log("Title: " + title)
                };

                //$(document).on("click", ".hockeyTopic", displaygetHockeyTopic);
        });
        renderButtons();
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

//This function handle the buttons

$("#add-hockeyTopics").on("click", function (event) {
        event.preventDefault();
        var topic = $(this).attr("hockey-data");
        var topic = $("hockeyTopic-input").val().trim();
        hockeyTopics.push(topic);
        console.log("hockeyTopic" + topic);
        renderButtons();
});

renderButtons();

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


// Initial array of gifs
var gifs = ["ice hockey", "stick handling", "toedrag", "awesomehits"];

// displayGifInfo function re-renders the HTML to display the appropriate content

function displayGifInfo() {
  var searchTerm = $(this).attr("data-name");
  let limit = 5;

  let queryURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
  
        var gifDiv = $("<div id='gifID'>").addClass("mx-auto text-center");
      var gifImg = $("<img>").addClass("giffy");
      var gifP = $("<p>").text("Rated: " + results[i].rating);
      var headerP = $("<p>").text("Click to Animate");
      gifImg.attr("src", results[i].images.fixed_height_still.url).append(gifImg);
      gifImg.attr("data-still", results[i].images.fixed_height_still.url).append(gifImg);
      gifImg.attr("data-animate", results[i].images.fixed_height.url).append(gifImg);
      gifDiv.append(headerP);
      gifImg.attr("data-state", "still").append(gifImg);
      gifDiv.append(gifImg);
      gifDiv.append(gifP);

      $("#gif-view").prepend(gifDiv);
    }
  });
}

// Function for displaying gif data
function renderButtons() {
  // Deleting the gifs prior to adding new gifs
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of gifss
  for (var i = 0; i < gifs.length; i++) {
    // Then dynamicaly generating buttons for each gif in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of gif-btn to our button
    a.addClass("gif-btn btn btn-primary");
    // Adding a data-attribute
    a.attr("data-name", gifs[i]);
    // Providing the initial button text
    a.text(gifs[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a gif button is clicked
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var gif = $("#gif-input")
    .val()
    .trim();

  // Adding gif from the textbox to our array
  gifs.push(gif);

  // Calling renderButtons which handles the processing of our gif array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "gif-btn". 
//went this document/on route since the .click wouldn't bind to the new buttons
$(document).on("click", ".gif-btn", displayGifInfo);

//Animates the gif
$(document).on("click", ".giffy", function() {
  console.log("Gif Clicked");
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  console.log(state);
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

// Calling the renderButtons function to display the intial buttons
renderButtons();
