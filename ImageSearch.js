 const accesskey="EOXGIsZqW8WVfAw3ioz7pXN47eWQOCDYx_t6-r99hf8";

const searchform =document.getElementById("search-form");
const inputbox=document.getElementById("input-box");
const displayimage=document.getElementById("image-display");
const showmore=document.getElementById("more-btn");

let keyword="";
let page=1;

async function searchimages(){

    keyword=inputbox.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword} &client_id=${accesskey}&per_page=12` ;

    const responce= await fetch(url);
    const data=await responce.json();

   if(page===1){
displayimage.innerHTML="";
   }


    const results=data.results;

   results.map((result) =>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank"

    imageLink.appendChild(image);
    displayimage.appendChild(imageLink);
   })

   showmore.style.display=block;
}

searchform.addEventListener("submit",(e)=> {
    e.preventDefault();
    page=1;
    searchimages();
})