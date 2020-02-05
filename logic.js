let inputserch = document.getElementById("searchSong").value;
let lyrics = document.getElementById("lyrics").innerText;
let trnsLyrics= document.getElementById("transLyrics");
let trnsBtn = document.getElementById("trnsBtn");

let transUrl="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200204T072713Z.2ce9652c3cfe1149.bba992d9ee381e66e45f3f03b186abd56134aa36&text="+lyrics+"&lang=en-ar";



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

trnsBtn.addEventListener("click",()=>{
    request(translate,transUrl)
});

//request(translate,transUrl);


