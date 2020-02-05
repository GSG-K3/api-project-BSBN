

let trnsBtn = document.getElementById("trnsBtn");





let request = function (recall, url){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = ()=>{
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
             let response = JSON.parse(xhr.responseText);
             console.log(response);
            // transLyrics.innerText = response.text;
            if(recall) recall(response);
            

    
        }
    }
 
  xhr.open("GET", url);
  xhr.send();
}

let translate = (response) => {
    transLyrics.innerText = response.text;
}



//request(translate,transUrl);


let artistName;
let artistIn =document.getElementById("artistInfo");
let artistImige=document.getElementById("artistImg");
var xhr = new XMLHttpRequest();
let search=document.getElementById("searchBtn")

// window.onload=function(){
  //   console.log('....')
  // }
  search.addEventListener('click', (ev)=> { 
    ev.preventDefault();
    let artistN = document.getElementById('searchArtist');
    let artistName=artistN.value.trim();
    if (artistName!=""){
       
    let url1=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`;
    
    xhr.onreadystatechange = ()=>{
      
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        let response = JSON.parse(xhr.responseText);
        artistIn.innerHTML= response.artists[0].strBiographyEN;
        artistImige.src=response.artists[0].strArtistThumb;
        
      }
    }
    
    xhr.open("GET", url1);
    xhr.send();
    }
    else {
      alert ("Enter Artist Name!");
     }
})

trnsBtn.addEventListener("click",()=>{
    let lyrics = document.getElementById("artistInfo").innerText;
    let trnsLyrics= document.getElementById("transLyrics");
    let transUrl="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200204T072713Z.2ce9652c3cfe1149.bba992d9ee381e66e45f3f03b186abd56134aa36&text="+lyrics+"&lang=en-ar";
    request(translate,transUrl)
});