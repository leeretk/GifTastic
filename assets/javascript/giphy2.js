
//var topics = ["icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",];

$("button").on("click", function() {

    var topic = $(this).attr("data-topic");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {

          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

            var gifDiv = $("<div>");

            var rating = results[i].rating;
            console.log("Rating: " + rating)

            var addRating = $("<p>").text("Rating: " + rating);

            $("#ratings-appear-here").prepend(addRating);

            var topicImage = $("<img>");

            topicImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(addRating);
            gifDiv.append(topicImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
      });
  });
    