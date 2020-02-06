let artistName;
let lyricsParagraph= document.getElementById("transLyrics");
let artistInfo =document.getElementById("artistInfo");
let artistImige=document.getElementById("artistImg");
let trnsBtn = document.getElementById("trnsBtn");
let search=document.getElementById("searchBtn")

let request = function (recall, url){
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = ()=>{
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
             let response = JSON.parse(xhr.responseText);
             if(recall) recall(response);
           
        }
      }
          xhr.open("GET", url);
          xhr.send();
 
}
       
let searchResponse = (response) =>{

  if (response.artists != null) {
    artistInfo.innerHTML= response.artists[0].strBiographyEN;
    artistImige.src=response.artists[0].strArtistThumb;
    trnsBtn.style.display = "block";
    artistImige.style.display="block";
                  
  } 
  else {
   artistInfo.innerHTML= "Sorry, We couldn't find what you're looking for! "
   trnsBtn.style.display = "none"; 
   artistImige.src=""
   artistN.value=" ";
   artistImige.style.display="none";
}

}

let translate = (response) => {
  transLyrics.innerText = response.text;
}


search.addEventListener('click', (event)=> { 
  event.preventDefault();
  let artistN =document.getElementById('searchArtist') ;
  let artistName=artistN.value.trim();
  lyricsParagraph.innerText=" ";
  if (artistName!=""){
    let url1=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`;
    request(searchResponse,url1);
    artistN.value=" ";
  }
  else {
    alert ("Enter Artist Name!");
  }

  
})

trnsBtn.addEventListener("click",()=>{
  let lyrics = artistInfo.innerText.replace(";",":");
  let transUrl="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200204T072713Z.2ce9652c3cfe1149.bba992d9ee381e66e45f3f03b186abd56134aa36&text="+lyrics+"&lang=en-ar";
  request(translate,transUrl)
});
        