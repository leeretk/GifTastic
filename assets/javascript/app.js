
var categories = [
    "icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",
];

function queryApis() {

    category = $("#category-input").val();

    var queryOMDB = "https://www.omdbapi.com/?t=" + category + "&apikey=trilogy";

    var queryGIPHY = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    $.ajax({
        url: queryOMDB,
        // data: {

        // },
        method: "GET"
    }).then(function (response) {
        console.log(response.Runtime);
        console.log(response.poster);
        console.log(response.rated);
        $("#omdb-view").text(JSON.stringify(response.data));
    });

    $.ajax({
        url: queryGIPHY,
        method: "GET"
    }).then(function (response) {
        console.log(response.rating);
        console.log(response.slug);
        $("#giphy-view").text(JSON.stringify(response.poster))
    });
};


$("#find-content").on("click", function (event) {
            event.preventDefault();
            categories = $(this).attr("category-name");
            queryApis();
        });



});

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

    //     $("#add-category").on("click", function(event) {
    //         event.preventDefault();
    //         var newContent = $("#category-input").val().trim();
    //         content.push(newContent);
    //         console.log(categories);
    //         renderButtons();
    //     });
    //response.data

    //   // Function for displaying the movie info
    //   // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
    //     $(document).on("click", ".category", displaycontent);

    //     renderButtons();       

