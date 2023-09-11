const accesKey= "aBgvhpWVjukZMih_ZpZDBgBFfg2KVOcL1nqYNb3x4gw";
let searchForm=document.querySelector(".search-form");
let searchBox=document.querySelector(".search-box");
let searchResult=document.querySelector(".serach-result");
let showbtn=document.querySelector(".show-btn");
let searchbtn=document.querySelector("#searchbtn");


let keyword=""
let page=1;


let clicked=async function searchImage(){
    keyword=searchBox.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}`
    let response = await fetch(url);
    let data=await response.json();
   if(page === 1)
   {
    searchResult.innerHTML ="";
   }

    let results = data.results;
    results.map(function(result){
     let image=document.createElement("img");
     image.src = result.urls.small;
     let imageLink = document.createElement("a")
     imageLink.href = result.links.htmls;
     imageLink.appendChild(image)
     searchResult.appendChild(imageLink)
     showbtn.style.display="block"
   
     
    })
}
searchbtn.addEventListener('click',clicked);

searchForm.addEventListener("submit",function(e){
    e.preventDefault();
    page = 1;
    searchImage();
})

showbtn.addEventListener("click",function(e){
    e.preventDefault();
    page=page+1
    searchImage()

})



