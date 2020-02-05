// let artistName = document.getElementById("searchArtist").value;
let artistName="rihanna";
let artistIn =document.getElementById("artistInfo");
let artistImige=document.getElementById("artistImg");
let url1=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`;
var data = null;
var xhr = new XMLHttpRequest();
console.log(artistName);


// let search=searchBtn.addEventListener('click', function() { 
xhr.onreadystatechange = ()=>{
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            let response = JSON.parse(xhr.responseText);
            console.log(response);

            artistIn.innerHTML= response.artists[0].strBiographyEN;
            artistImige.src=response.artists[0].strArtistThumb;
    
        }
    }
 
  xhr.open("GET", url1);
  xhr.send(data);

// })