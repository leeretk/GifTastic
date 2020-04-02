# GifTastic
https://leeretk.github.io/GifTastic/


![](https://github.com/leeretk/Employer-Ready-Profile/blob/master/assets/images/isnt_that_giftastic_img.jpg)

# What is it? 

Isn't this Giftastic is an app that lets you search Giphy images.  This game has a hockey theme and will allow you search on other topics as as well.


# What problem were we trying to Solve?
1) Create Ajax call to giphy site.
2) Bring back data into app.
3) Format app to arrange images with rating and title beneath each picture. 
    

## Data Connection: 
[ ] "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

## Attributes:
[ ] Image
[ ] Image Title
[ ] Image Rating

## Color Scheme: Avalanche Theme
[ ] #6f263d Avalanche Red
[ ] #236192 Avalanche Blue
[ ] #Black
[ ] #White

## Scripts
[ ]  rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" 
[ ] src="assets/javascript/app.js"

## Objectives: 
1) create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
2) Your app should take the topics in this array and create buttons in your HTML.
3) Try using a loop that appends a button for each string in the array.
4) When the user clicks on a button, the page should grab 10 static, non-animated gif images from the getHockeyTopic API and place them on the page.  (note: This occurs with the search button but not the buttons from the array)
5) When the user clicks one of the still getHockeyTopic images, the gif should animate. If the user clicks the gif again, it should stop playing.
6) Under every gif, display its rating (PG, G, so on).  The Title and rating show in the console but they do not appear for every image in the output.  I had this working once but can't figure out what I did to break it.

//BONUS GOALS//
1) Each Request should add 10 gis to the page, NOT overwrite the existing gifs.
2) I attempted to integrate the search with the movie API. I was able to get the movie API to work for me but was unsuccessful in getting the ajax query to call them at the same time.
3) The queries do persist until you reload the page