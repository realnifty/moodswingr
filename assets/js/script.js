// globla vairables
var mood = document.querySelector(`.mood`)
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


// add functionality to mood dropdown
var selectMood = function(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target.value)
    console.log(`this is my mood`)
    var moodNow = (event.target.value);

    if (moodNow === `sad`){
        console.log(`im sad right now`)
    } else if (moodNow === `angry`) {
        console.log(`im angry right now`)
    } else if (moodNow === `bored`) {
        console.log(`im bored right now`)
    } else if (moodNow === `happy`) {
        console.log(`im happy right now`)
    } else if (moodNow === `anxious`) {
        console.log(`im anxious right now`)
    } else if (moodNow === `pensive`) {
        console.log(`im pensive right now`)
    } else if (moodNow === `loving`) {
        console.log(`im loving right now`)
    }
    
};

mood.addEventListener('change',selectMood)

