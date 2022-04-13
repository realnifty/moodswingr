// globla vairables
var mood = document.querySelector(`.mood`);
var playlist = document.querySelector(`#playlist-name`);
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

var getPlaylist = function (playlistId) {
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': '86673a3a0fmshb2bb63a74b94633p101ce8jsn70748f432c0e'
        }
    };


    
fetch(`https://spotify23.p.rapidapi.com/playlist/?id=${playlistId}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

var getPlaylistTracks = function() {
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': '86673a3a0fmshb2bb63a74b94633p101ce8jsn70748f432c0e'
        }
    };
    
    fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=1v1xk7kQiZUfKrGVRqcNoa&offset=0&limit=10', options)
        .then(function (response){
            response.json()
            .then(function (response){
                console.log(response)
                for (let i = 0; i < response.items.length; i++){
                    console.log(response.items[i].track.name);
                }
            })
        })
        
        .catch(err => console.error(err));
}

// add functionality to mood dropdown
var selectMood = function(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target.value);
    console.log(`this is my mood`);
    var moodNow = (event.target.value);

    var sadId = `6nxPNnmSE0d5WlplUsa5L3`;
    var happyId = `0RH319xCjeU8VyTSqCF6M4`;
    var anxiousId = `4GVUmPNSyt9tPdUQXuSiQs`;
    var lovingId = `37i9dQZF1DX7rOY2tZUw1k`;
    var angryId = `37i9dQZF1DWTvNyxOwkztu`;

    if (moodNow === `sad`){
        getPlaylist(sadId);
        console.log(`im sad right now`);
    } else if (moodNow === `angry`) {
        getPlaylist(angryId);
        console.log(`im angry right now`);
    } else if (moodNow === `happy`) {
        getPlaylist(happyId);
        console.log(`im happy right now`);
    } else if (moodNow === `anxious`) {
        getPlaylist(anxiousId);
        console.log(`im anxious right now`);
    } else if (moodNow === `loving`) {
        getPlaylist(lovingId);
        console.log(`im loving right now`);
    }
    
};

mood.addEventListener('change',selectMood)
getPlaylistTracks();
