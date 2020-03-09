
      
function displayMovieInfo() {

    var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

    var movie = $(this).attr("movie-data");

    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

            var movieDiv = $("<div class='movie'>");

            //Capture Movie Rating
            var rating = response.Rated;
            var pRating = $("<p>").text("Rating: " + rating);
            movieDiv.append(pRating);
    
            //Capture Movie Title
            var title = response.Title;
            var pTitle = $("<p>").text("Rating: " + title);
            movieDiv.append(pTitle);
    
            //Capture Movie Runtime
            var runtime = response.runtime;
            var pRuntime = $("<p>").text("Rating: " + runtime);
            movieDiv.append(pRuntim);
    
            //Capture Movie Image 
            var imgURL = response.Poster;
            var image = $("<img>").attr("src", imgURL);
            movieDiv.append(image);
    
            // Putting the entire movie above the previous movies
            $("#movies-view").prepend(movieDiv);
            $("#omdb-title").text(JSON.stringify("Title: " + response.Title));
            $("#omdb-runtime").text(JSON.stringify("Runtime: " + response.Runtime));
            $("#omdb-poster").text(JSON.stringify("Poster: " + response.Poster));
            $("#omdb-rating").text(JSON.stringify("Rated: " + response.Rated));
            console.log("Title: " + response.Title);
            console.log("Runtime: " + response.Runtime);
            console.log("Poster: " + response.Poster);
            console.log("Rated: " + response.Rated);
        });
    
        function renderButtons() {
        $("#buttons-view").empty();
            for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie-btn");
            a.attr("movie-data", movies[i]);
            a.text(movies[i]);
        $("#buttons-view").append(a);
        }
    };

    // This function handles events where a movie button is clicked
    $("#add-movie").on("click", function(event) {
        event.preventDefault();
        var movie = $("#movie-input").val().trim();
        movies.push(movie);
        renderButtons();
    });

    $(document).on("click", ".movie-btn", displayMovieInfo);
    
    renderButtons();
};