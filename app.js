const map = L.map('map')

//Get the tile layer from OpenStreetMaps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.setView([48.8584, 2.2945], 16);

// Set the map view to the user's location
// Uncomment below to set map according to user location
map.locate({setView: true, maxZoom: 16});

// // Show a market at the position of the Eiffel Tower
 let eiffelMarker = L.marker([48.8584, 2.2945]).addTo(map);

// // Bind popup to the marker with a popup
 eiffelMarker.bindPopup("Eiffel Tower").openPopup();



const route = () => {
    location.href  = "movieDetails.html"
}



const buttonClicked1 = (event) => {
    console.log(event) 
    if(event.target.className === "btn")
    {
        localStorage.clear()
        location.href  = "purchaseTicket.html"
        const time = event.target.innerText
        const date = event.target.getAttribute("data-date")


        const movieDetailsObj = {
            objDate:date,
            objTime:time
        }

        if(localStorage.hasOwnProperty("MOVIE_DETAILS")===false)
        {
            let movieDetails = movieDetailsObj;
            localStorage.setItem("MOVIE_DETAILS", JSON.stringify(movieDetails))
        }
    
    }
}

document.querySelector("table").addEventListener("click", buttonClicked1)
document.querySelector("#currently-playing").addEventListener("click" , route);



