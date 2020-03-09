
///this connects to the button 


$("#find-movie").on("click", function (event) {
    event.preventDefault();

    var movie = $(this).attr("movie-input");

    var queryOMDB = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryOMDB,
        method: "GET"
    }).then(function (response) {
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
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#buttons-view").append(a);
        }
    }

    $("#add-movie").on("click", function (event) {
        event.preventDefault();
        var movie = $("#movie-input").val().trim();
        movies.push(movie);
        renderButtons();
    });

    $(document).on("click", ".movie-btn", find-movie);
    renderButtons();
});


//          $('#movieposters").append(posterDiv) var giffDiv = $("<div>");
//         var giffRating = $("<p>").text(JSON.stringify("Rating: " + response.data[i].Rating));

        // var posterDiv = $("<div>");
        // var posterImage = $("<img>");
        // posterImage.attr("src", response.data[i].Poster.fixed_height.url);
        // posterDiv.append(p);
        // posterDiv.append(posterImage);
//   v        // queryMovies();
        // queryGiffs();
// var categories = [
//     "icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",
// ];

//movies = $(this).attr("movie-name");

//posterImage.attr("src", response.data[i].Poster.fixed_height.url);
//         console.log(response.data[i].Poster);
//         console.log(response.data[i].Rating);
//         $("#giphy-view").text(JSON.stringify("Rated: " + response.Rated));


//giffs = $(this).attr("category-name");

// function queryGiffs() {

//     giff = $("#giff-input").val();

//     var queryGIPHY = "https://api.giphy.com/v1/gifs/search?q=" + giff + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

//     $.ajax({
//         url: queryGIPHY,
//         method: "GET"
//     }).then(function (response) {
//         for (var i=0; i<response.data.length;i++)
//         var giffDiv = $("<div>");
//         var giffRating = $("<p>").text(JSON.stringify("Rating: " + response.data[i].Rating));
//         posterImage.attr("src", response.data[i].Poster.fixed_height.url);
//         console.log(response.data[i].Poster);
//         console.log(response.data[i].Rating);
//         $("#giphy-view").text(JSON.stringify("Rated: " + response.Rated));

//     });

//$("#giphy-view").text.("Response: " + response.data[i].Poster);

//
        //renderButtons();
    //find-content
    //category-form
    //category-input
    //giphy-view
    //omdb-view

//poster is an image.....

//     function renderButtons() {     
    //         $("#buttons-view").empty();
    //         for (var i = 0; i < categories.length; i++) {
    //         var a = $("<button>");
    //         a.addClass("content");
    //         a.attr("content-name", categories[i]);
    //         a.text(categories[i]);
    //         $("#buttons-view").append(a);
    //         }
    //     }

    //   // This function handles events where one button is clicked

    //     
    //response.data

    //   // Function for displaying the movie info
    //   // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
    //     $(document).on("click", ".category", displaycontent);

    //     renderButtons();       

    // <!-- Rendered Buttons will get Dumped Here  -->
    // <!-- <div id="movie-buttons-view"></div>

    // <form id="movie-form">
        
    //     <label for="movie-input">Search</label>
        
    //     <input type="text" id="movie-input">
        
    //     <input id="add-movie" type="submit" value="Add Another Movie">
        
    //     <input id="find-movie" type="submit" value="Search">
        
    //     <div id="omdb-title">Title: </div>
    //     <div id="omdb-runtime">Runtime: </div>
    //     <div id="omdb-rating">Rating: </div>
    //     <div id="omdb-poster">Movie: </div>
    // </form> -->

    // <!-- Rendered Buttons will get Dumped Here  -->