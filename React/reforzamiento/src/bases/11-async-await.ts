import type { GiphyRamdonResponse } from "../data/giphy.response";

const API_KEY = '1Yll9ZcMteMpStLrriDCNJnU2cpztgBA&tag=&rating=g'




const showgif= (url: string)=>{
   const urlimage= document.createElement('img');
   urlimage.src= url 
    document.body.append(urlimage)
}




const getRamdomGifUrl = async()=>{

const myrequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const {data}: GiphyRamdonResponse = await myrequest.json();

showgif(data.images.original.url)

return data.images.original.url


}


getRamdomGifUrl().then((response)=> console.log(response))