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
