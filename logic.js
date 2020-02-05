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
  console.log(artistName);
    
    xhr.onreadystatechange = ()=>{
      
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        console.log(xhr.readyState)
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        
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