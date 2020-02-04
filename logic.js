let songName = document.getElementById("searchSong").value ;




let xhr = new XMLHttpRequest();

xhr.onreadystatechange = ()=>{
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        let response = JSON.parse(xhr.responseText);
        
    }
}