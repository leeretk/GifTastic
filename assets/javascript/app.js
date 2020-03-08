
var categories = [
    "icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",
];

//giffs = $(this).attr("category-name");

function queryGiffs() {
    
    giff = $("#giff-input").val().trim();

    var queryGIPHY = "https://api.giphy.com/v1/gifs/search?q=" + giff + "@api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

    $.ajax({
        url: queryGIPHY,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response);
        $("#giphy-view").text(JSON.stringify(response))
    });
};


//movies = $(this).attr("movie-name");

function queryMovies() {

    movie = $("movie-input").val().trim();

    var queryOMDB = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy&limit=5";

    $.ajax({
        url: queryOMDB,
        method: "GET"
    }).then(function (response) {
        console.log("Title: " + response.Title);
        console.log("Runtime: " + response.Runtime);
        console.log("Poster: " + response.Poster);
        console.log("Rated: " + response.Rated);
        $("#omdb-title").text(JSON.stringify("Title: " + response.Title));
        $("#omdb-runtime").text(JSON.stringify("Runtime: " + response.Runtime));
        $("#omdb-poster").text(JSON.stringify("Poster: " + response.Poster));
        $("#omdb-rating").text(JSON.stringify("Rated: " + response.Rated));
    });

    ///this connects to the button 
    $("#find-content").on("click", function (event) {
        event.preventDefault();
        queryMovies();
        queryGiffs();
    });
};

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
