import type { GiphyRamdonResponse } from "../data/giphy.response";

const API_KEY = '1Yll9ZcMteMpStLrriDCNJnU2cpztgBA&tag=&rating=g'


const myrequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


myrequest.then((response)=>{
      response.json().then(({data}: GiphyRamdonResponse)=> {
        const imgUrl = data.images.original.url;
        
        const imgElement = document.createElement('img');
        imgElement.src= imgUrl;

        document.body.append(imgElement)
      })
}).catch(err=>{
    console.error(err)
}).finally()