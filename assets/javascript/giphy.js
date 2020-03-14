

var topics = ["icehockey", "toedrag", "stickhandling", "puckhandling", "amazingplays", "gretksy",];


$("#giphy-button").on("click", function () {
    event.preventDefault();

    // This line will grab the text from the input box
    var giphy = $("#giphy-input").val().trim();

    topics.push(giphy);

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        console.log(queryURL);

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
        //after the data comes back... then do something
    }).then(function (response) {
        console.log(response)

        for (i=0; i<10; i++) {
            var imageUrl = response.data[i].images.preview_gif.url;
            var giphyImage = $("<img>");
            giphyImage.attr("src", imageUrl);
            giphyImage.attr("alt", "giphy image");
            $("#images").prepend(giphyImage);
            console.log("SOURCE: " + response.data[i].source)
            console.log("IMAGE URL: " + imageUrl)
            }
       

       renderButtons();        
    });
 
});

function renderButtons() {
console.log("I am in the render function")
    $("#new-giphy-buttons").empty();

    for (var i = 0; i < topics.length; i++) {

      var a = $("<button>");
      a.addClass("topic");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#new-giphy-buttons").append(a);
      }
  }
// Calling the renderButtons function at least once to display the initial list of movies
  renderButtons();

  

//$(".topic").on("click", 


// )

// Instructions
    //DONE // Before you can make any part of your site work, you need to
           //create an array of strings, each one related to a topic that 
           //interests you. Save it to a variable called topics.

        // Your app should take the topics in this array and create buttons in your HTML.

        // Try using a loop that appends a button for each string in the array.

        // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

        // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

        // Under every gif, display its rating (PG, G, so on).

        // This data is provided by the GIPHY API.
        // Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.


// Deploy your assignment to Github Pages.


// Rejoice! You just made something really cool.




// Minimum Requirements
// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.


// Bonus Goals


// Ensure your app is fully mobile responsive.


// Allow users to request additional gifs to be added to the page.

// Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.



// List additional metadata (title, tags, etc) for each gif in a clean and readable format.


// Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio


// Allow users to add their favorite gifs to a favorites section.

// This should persist even when they select or add a new topic.
// If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).



        //    var giphyCount = $("#giphy-count").val();
        //    var giphyCount = i + 1;

        // for (var i = 0; i < numArticles; i++) {

        //     // Get specific article info for current index
        //     var giphy = NYTData.response.docs[i];

        //     // Create the  list group to contain the articles and add the article content for each
        //     var $articleList = $("<ul>");
        //     $articleList.addClass("list-group");

        //     // Add the newly created element to the DOM
        //     $("#image-section").append($ImageList);
        //         }
        //      //images button       



        //add jq for "giphy-count"

        //add jq for "clear-all"





// const gifForm = document.querySelector("#gif-form");
// gifForm.addEventListener("submit", fetchGiphs);

// function fetchGiphs(e) {
//     e.preventDefault();
//     const searchTerm = document.querySelector(".search").value;
//     fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=100&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`)
//     .then((response) => {return response.json(); })
//     .then((resp => {
//         // Here we get the data array from the response object
//         let dataArray = resp.data
//         // We pass the array to showGiphs function
//         showGiphs(dataArray);
//     }))
//     .catch(err => console.log(err)); // We use catch method for Error handling
// }

// function showGiphs(dataArray) {
//   const results = document.querySelector(".results");
//   let output = '<div class="container">';
//   dataArray.forEach((imgData) => {
//     output += `
//   <img src="${imgData.images.fixed_width.url}"/>
// `;
//   });
//   document.querySelector('.results').innerHTML = output;
// }


//     <form id="gif-form">
//     <input type="text" class="search">
//     <input type="submit" value="find">
// </form>
// <div class="results"></div>

// // /**
// //  * takes API data (JSON/object) and turns it into elements on the page
// //  * @param {object} NYTData - object containing NYT API data
// //  */
// //     function updatePage(NYTData) {
// //     // Get from the form the number of results to display
//     // API doesn't have a "limit" parameter, so we have to do this ourselves
//     var numArticles = $("#article-count").val();

//     // Log the NYTData to console, where it will show up as an object
//     console.log(NYTData);
//     console.log("------------------------------------");

//     // Loop through and build elements for the defined number of articles
//     for (var i = 0; i < numArticles; i++) {
//       // Get specific article info for current index
//       var article = NYTData.response.docs[i];

//       // Increase the articleCount (track article # - starting at 1)
//       var articleCount = i + 1;

//       // Create the  list group to contain the articles and add the article content for each
//       var $articleList = $("<ul>");
//       $articleList.addClass("list-group");

//       // Add the newly created element to the DOM
//       $("#article-section").append($articleList);

//       // If the article has a headline, log and append to $articleList
//       var headline = article.headline;
//       var $articleListItem = $("<li class='list-group-item articleHeadline'>");

//       if (headline && headline.main) {
//         console.log(headline.main);
//         $articleListItem.append(
//           "<span class='label label-primary'>" +
//             articleCount +
//             "</span>" +
//             "<strong> " +
//             headline.main +
//             "</strong>"
//         );
//       }

//       // If the article has a byline, log and append to $articleList
//       var byline = article.byline;

//       if (byline && byline.original) {
//         console.log(byline.original);
//         $articleListItem.append("<h5>" + byline.original + "</h5>");
//       }

//       // Log section, and append to document if exists
//       var section = article.section_name;
//       console.log(article.section_name);
//       if (section) {
//         $articleListItem.append("<h5>Section: " + section + "</h5>");
//       }

//       // Log published date, and append to document if exists
//       var pubDate = article.pub_date;
//       console.log(article.pub_date);
//       if (pubDate) {
//         $articleListItem.append("<h5>" + article.pub_date + "</h5>");
//       }

//       // Append and log url
//       $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
//       console.log(article.web_url);

//       // Append the article
//       $articleList.append($articleListItem);
//     }
//   }

//   // Function to empty out the articles
//   function clear() {
//     $("#article-section").empty();
//   }

//   // CLICK HANDLERS
//   // ==========================================================

//   // .on("click") function associated with the Search Button
//   $("#run-search").on("click", function(event) {
//     // This line allows us to take advantage of the HTML "submit" property
//     // This way we can hit enter on the keyboard and it registers the search
//     // (in addition to clicks). Prevents the page from reloading on form submit.
//     event.preventDefault();

//     // Empty the region associated with the articles
//     clear();

//     // Build the query URL for the ajax request to the NYT API
//     var queryURL = buildQueryURL();

//     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
//     // The data then gets passed as an argument to the updatePage function
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(updatePage);
//   });

//   //  .on("click") function associated with the clear button
//   $("#clear-all").on("click", clear);





// Replaces the content in the "recent-member" div with the new info


        //LOOP APPENDING BUTTONS FOR EACH STRING IN THE ARRAY

        // function renderButtons() {
        //     $("#giphy-buttons-view").empty();
        //         for (var i = 0; i < movies.length; i++) {
        //         var a = $("<button>");
        //         a.addClass("giphy-btn");
        //         a.attr("giphy-data", movies[i]);
        //         a.text(movies[i]);
        //     $("#giphy-buttons-view").append(a);
        //     }
        // };
        //     ///CREATE BUTTONS FROM THE ARRAY

        // // This function handles events where a movie button is clicked
        // $("#add-movie").on("click", function(event) {
        //     event.preventDefault();
        //     var movie = $("#movie-input").val().trim();
        //     movies.push(movie);
        //     renderButtons();
        // });

        // $(document).on("click", ".movie-btn", displayMovieInfo);

        // renderButtons();

