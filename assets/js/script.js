// global variables
var mood = document.querySelector(`.mood`);
var playlist = document.querySelector(`#playlist-name`);
var defaultPlaylist = document.querySelector(`.playlist`);
// modal functionality
window.addEventListener(`DOMContentLoaded`, () => {
    let aboutBtn = document.querySelector(`#modal-btn`);
    let modalExit = document.querySelector(`#modal-close`);
    let overlay = document.querySelector(`#overlay`);

    aboutBtn.addEventListener(`click`, () => {
        overlay.classList.remove(`hidden`);
    });
    modalExit.addEventListener(`click`, () => {
        overlay.classList.add(`hidden`);
    });
});

var getPlaylistTracks = function(trackId) {
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': 'f7955a52bcmsh7aeefb259dd6fc4p100f96jsnbff71a98476a'
        }
    };
    
    fetch(`https://spotify23.p.rapidapi.com/playlist_tracks/?id=${trackId}&offset=0`, options)
        .then(function (response){
            response.json()
            .then(function (response){
                console.log(response)

                let ulList = document.querySelector(`#song-list`);
                let playlistHeader = document.querySelector(`#playlist-header`);



                // loop that creates a list of track names that user can click on access a youtube search of the song 
                if(document.querySelectorAll('.removeMe').length) {
                    document.querySelectorAll(`.removeMe`).forEach((li) => {li.remove()})
                    };
                    
                for (let i = 0; i < response.items.length; i++){
                    
                    let li = document.createElement(`li`);
                    li.classList.add(`removeMe`, `hover:underline`, `p-2`);
                    let anchor= document.createElement(`a`);
                    playlistHeader.innerText = "We recommend these songs!";
                    anchor.text =response.items[i].track.artists[0].name + " - " + response.items[i].track.name;
                    anchor.style.textDecoration = 'none';
                    anchor.href = 'https://www.youtube.com/results?search_query=' + response.items[i].track.name;
                    anchor.setAttribute('target', '_blank');
                    li.appendChild(anchor);
                    ulList.appendChild(li);
                    
                }
               
            })
        })
        .catch(err => console.error(err));
}

// Unsplash Fetch API 
// with this, we change the hero image to an image of coffee. the next step is use a query to select a landscape photo from a collection. 

function loadImg() {
    const url = "https://api.unsplash.com/search/photos/random/collections/1xUCIA1Qwc8?client_id=Ysr7HfLSxmWg5Hnp4gTrMG1aTC8n7lL0tUWohY4dUvM";
    let imageDiv = document.querySelector('.image');
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                imageDiv.src = data.results[0].urls.regular
                console.log(data.results[0].urls.regular)

                // if (data.results[i].id == `6VhPY27jdps`) {
                //     let imageElement = document.createElement('img');
                //     imageElement.src = data.results[i].urls.thumb;
                //     imageDiv.append(imageElement);
                
            }
        });
    }

    mood.addEventListener('change', loadImg);

// add functionality to mood dropdown
var selectMood = function(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target.value);
    console.log(`this is my mood`);
    var moodNow = (event.target.value);


    // //these ids are for the images called when user selects mood
    // var sadImageId = `LUYD2b7MNrg`
    // var happyImageId = `fIEywSUhwFU`
    // var anxiousImageId = `67VUBLD94gY`
    // var lovingImageId = `4E5hIgTbP-c`
    // var angryImageId = `UbOfi152Z6k`

    var sadId = `6nxPNnmSE0d5WlplUsa5L3`;
    var happyId = `0RH319xCjeU8VyTSqCF6M4`;
    var anxiousId = `4GVUmPNSyt9tPdUQXuSiQs`;
    var lovingId = `37i9dQZF1DX7rOY2tZUw1k`;
    var angryId = `37i9dQZF1DWTvNyxOwkztu`;

    if (moodNow === `sad`){
        getPlaylistTracks(sadId);
        console.log(`im sad right now`);
    } else if (moodNow === `angry`) {
        getPlaylistTracks(angryId);
        console.log(`im angry right now`);
    } else if (moodNow === `happy`) {
        getPlaylistTracks(happyId);
        console.log(`im happy right now`);
    } else if (moodNow === `anxious`) {
        getPlaylistTracks(anxiousId);
        console.log(`im anxious right now`);
    } else if (moodNow === `loving`) {
        getPlaylistTracks(lovingId);
        console.log(`im loving right now`);
    }
    
};

mood.addEventListener('change',selectMood)
