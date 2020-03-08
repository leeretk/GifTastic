
var categories = [
    "icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",
];

var categoriesLength = categories.length;

function queryApis() {

    category = $("#category-input").val().trim();
    categories = $(this).attr("category-name");

    var queryOMDB = "https://www.omdbapi.com/?t=" + category + "&apikey=trilogy";

    var queryGIPHY = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    $.ajax({
        url: queryOMDB,
        // data: {
        //     title, 
        //     poster,
        //     rating,
        //     },
        method: "GET"
    }).then(function (response) {
        console.log("Title: " + response.title);
        console.log("Runtime: " + response.Runtime);
        console.log("Poster: " + response.poster);
        console.log("Rating: " + response.rating);
        $("#omdb-view").text(JSON.stringify(response));
    });

    $.ajax({
        url: queryGIPHY,
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
        $("#giphy-view").text(JSON.stringify(response))
    });
};

$("#find-content").on("click", function (event) {
            event.preventDefault();
            
            queryApis();
            console.log(categories);
});
 
 
 
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

