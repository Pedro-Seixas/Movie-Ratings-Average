const express = require('express');
const app = express();
const axios = require('axios');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

app.get("/ratings", (req, res) =>{
    console.log(req.query);
    if(req.query.title == "test")
    {
        res.json({"ratings": ["5", "4", "1"]});
    }
});

//-------------------------------
//         IMDB API
//-------------------------------

//To find movie by name and give details like rating and popularity
// const url = 'https://api.themoviedb.org/3/search/movie?query=In%20Bruges&include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: [Your API KEY]
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json.results[0]))
//   .catch(err => console.error('error:' + err));

//-------------------------------
//     Rotten Tomatoes API
//-------------------------------

// url = "https://www.rottentomatoes.com/m/barbie";

// axios.get(url).then(urlResponse =>{
//     const $ = cheerio.load(urlResponse.data);
//     const rating = $("div.thumbnail-scoreboard-wrap>score-board").attr("audiencescore");
//     console.log(rating);

// });

//------------------------------
//        MetaCritic API
//------------------------------

// url = "https://www.metacritic.com/movie/nobody";

// axios.get(url).then(urlResponse =>{
//     const $ = cheerio.load(urlResponse.data);
//     const rating = $("span.metascore_w.user").html();
//     console.log(rating);

// });


//------------------------------
//        JustWatch API
//------------------------------

// url = "https://www.justwatch.com/us/movie/oppenheimer";

// axios.get(url).then(urlResponse =>{
//     const $ = cheerio.load(urlResponse.data)
//     //Find the first rating
//     $("span.jw-scoring-listing__rating--no-link").each(function(i, element){
//         if(i == 0)
//         {
//             console.log($(this).text());
//         }
//     });
// });


app.listen(5000);
