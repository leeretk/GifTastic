
// var categories = [
//     "icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",
// ];

//movies = $(this).attr("movie-name");


///this connects to the button 
$("#find-content").on("click", function (event) {
    event.preventDefault();

    movie = $("movie-input").val();

    var queryOMDB = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryOMDB,
        method: "GET"
    }).then(function (response) {

        for (var i=0; i < response.data.length ; i++) {
            var posterImage = $("<img>").response.data[i].Poster;

            posterImage.attr("src", response.data[i].Poster.fixed_height.url)

            $("#omdb-title").text(JSON.stringify("Title: " + response.Title));
            $("#omdb-runtime").text(JSON.stringify("Runtime: " + response.Runtime));
            $("#omdb-poster").text(JSON.stringify("Poster: " + response.Poster));
            $("#omdb-rating").text(JSON.stringify("Rated: " + response.Rated));

        }

//         var giffDiv = $("<div>");
//         var giffRating = $("<p>").text(JSON.stringify("Rating: " + response.data[i].Rating));
//         posterImage.attr("src", response.data[i].Poster.fixed_height.url);
//         console.log(response.data[i].Poster);
//         console.log(response.data[i].Rating);
//         $("#giphy-view").text(JSON.stringify("Rated: " + response.Rated));


        console.log("Title: " + response.Title);
        console.log("Runtime: " + response.Runtime);
        console.log("Poster: " + response.Poster);
        console.log("Rated: " + response.Rated);

    });
    // queryMovies();
    // queryGiffs();
});

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
