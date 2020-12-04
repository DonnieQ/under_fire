require('dotenv').config()
 const axios = require("axios")
 

 const GIPHY_API_BASE_URL = "http://api.giphy.com/v1/gifs";
 const SEARCH_KEYWORD = "kanye"

 axios.get(`${GIPHY_API_BASE_URL}/search?api_key=${process.env.GIPHY_API_KEY}=${SEARCH_KEYWORD}&limit=12`).then((res) => {
    const gifs = res.data.data;

    gifs.map((gif)=> {
        const url = gif.images.downsized.url;
        console.log(gif.images.downsized.url);
         
     })
 })