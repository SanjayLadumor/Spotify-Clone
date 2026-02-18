async function getsongs() {

    let a = await fetch("/songs/")
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs

}

let currentsong = new Audio();

// This is old From Code With Harry

const playmusic = (track) => {
    console.log("Attempting to play:", track);
    currentsong.src = "/songs/" + encodeURIComponent(track);

    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

    currentsong.play().then(() => {
        play.src = "pausebtn.svg";
    }).catch(e => {
        console.error("Playback failed:", e);
        play.src = "playbtn.svg";
    });
}

// const playmusic = (track)=>{
//     // let audio = new Audio("/songs/" + track)
//     console.log("trying to play:",track)
//     currentsong.src = "/songs/" + track
//     currentsong.play()
// }

// async function main() {

//     //Get the list of all songs

//     let songs = await getsongs()
//     console.log(songs)

//     //Show all the songs in playlist

//     let songdiv = document.querySelector(".lib1").getElementsByTagName("ul")[0]
//     for (const song of songs) {
//         songdiv.innerHTML = songdiv.innerHTML + `<ol>

//         <div class="song1here">
//                             <img src="greenplayicon.svg" height="45px" width="45px" class="playhere">
//                             <img src="poster.jpg" height="150px" width="140px" style="padding: 10px;border-radius: 10px;">
//                             <div class="songname">
//                                 ${song.replaceAll("%20", " ")} 
//                             </div>
//                             <div class="artistname">
//                                 Sanjay
//                             </div>
//                         </div>

//         <ol>`;
//     }

//     // Attach an Event listener to each song
//     Array.from(document.querySelector(".lib1").getElementsByTagName("ol")).forEach(e => {
//         e.addEventListener("click", element => {
//             console.log(e.querySelector(".songname").innerHTML);
//             playmusic(e.querySelector(".songname").innerHTML.trim());
//             playmusic()
//     })

//     })

// }

// This is new AI Generated 

// 1. Corrected playmusic function

// const PlayMusic = (track)=>{
//     let audio = new Audio("/songs/" + track)
//     track.play()
// }

// const playmusic = (track) => {
//     console.log("trying to play:", track);
//     // Ensure the path is correct and encoded for URLs
//     currentsong.src = "/songs/" + encodeURIComponent(track);

//     currentsong.play().catch(e => {
//         console.error("Playback failed:", e);
//     });
// }

// async function main() {
//     // Get the list of all songs
//     let songs = await getsongs();
//     console.log(songs);

//     // Show all the songs in playlist
//     let songdiv = document.querySelector(".lib1").getElementsByTagName("ul")[0];
//     songdiv.innerHTML = ""; // Clear existing content first

//     for (const song of songs) {
//         // Clean up the name for display
//         let displayName = song.replaceAll("%20", " ");

//         songdiv.innerHTML += `<ol>
//             <div class="song1here">
//                 <img src="greenplayicon.svg" height="45px" width="45px" class="playhere">
//                 <img src="poster.jpg" height="150px" width="140px" style="padding: 10px;border-radius: 10px;">
//                 <div class="songname">${displayName}</div>
//                 <div class="artistname">Sanjay</div>
//             </div>
//         </ol>`;
//     }

//     // 2. Corrected Event Listener
//     Array.from(document.querySelectorAll(".lib1 ol")).forEach(e => {
//         e.addEventListener("click", () => {
//             let songName = e.querySelector(".songname").innerHTML.trim();
//             console.log("Selected song:", songName);
//             playmusic(songName); // Call it ONLY ONCE with the name
//         });
//     });

//     // Attach an Event Listerner to each song
//     Array.from(document.querySelector(".lib1").getElementsByTagName("ol")).forEach(e => {
//         e.addEventListener("click",element=>{

//             console.log(e.querySelector(".songname").innerHTML)
//             PlayMusic(e.querySelector(".songname").innerHTML.trim())
//         })

//     })

// }



// // var audio = new Audio(songs[0]);
// // audio.play();

// // audio.addEventListener("loadeddata",()=>{
// //     let duration = audio.duration;
// //     console.log(duration);

// // })

// main()


// Keep only this version of playmusic



// const playmusic = (track) => {
//     console.log("Attempting to play:", track);

//     // Use the global currentsong object to avoid multiple songs playing at once
//     // We use decodeURIComponent first to ensure we don't double-encode the string
//     currentsong.src = "/songs/" + track; 

//     currentsong.play().catch(e => {
//         console.error("Playback failed. Check if the file exists in /songs/ folder:", e);
//         play.src = "playbtn.svg"
//         document.querySelector(".songinfo").innerHTML = track
//         document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
//     });
// }

// const playmusic = (track) => {
//     console.log("Attempting to play:", track);

//     currentsong.src = "/songs/" + track;

//     // Set song info and reset time display
//     document.querySelector(".songinfo").innerHTML = decodeURI(track);
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

//     currentsong.play().then(() => {
//         play.src = "pausebtn.svg"; // Change icon to pause when playing
//     }).catch(e => {
//         console.error("Playback failed:", e);
//         play.src = "playbtn.svg";
//     });
// }

// --- KEEP YOUR getsongs() AND playmusic() AT THE TOP AS THEY ARE ---

async function main() {
    let songs = await getsongs();

    let songdiv = document.querySelector(".lib1").getElementsByTagName("ul")[0];
    songdiv.innerHTML = "";

    for (const song of songs) {
        let displayName = song.replaceAll("%20", " ");
        songdiv.innerHTML += `
            <ol>
                <div class="song1here">
                    <img src="greenplayicon.svg" height="45px" width="45px" class="playhere">
                    <img class="songposter" src="poster.jpg" height="150px" width="140px" style="padding: 10px;border-radius: 10px;">
                    <div class="songname">${displayName}</div>
                    <div class="artistname"></div>
                </div>
            </ol>`;
    }

    let singername = document.querySelectorAll(".artistname");
    if (singername[0]) singername[0].innerText = "Alex Warren";
    if (singername[1]) singername[1].innerText = "Harry Styles";
    if (singername[2]) singername[2].innerText = "Djo";
    if (singername[3]) singername[3].innerText = "JVKE";
    if (singername[4]) singername[4].innerText = "Lana Del Rey";
    if (singername[5]) singername[5].innerText = "Lana Del Rey";
    if (singername[6]) singername[6].innerText = "Lord Huron";
    if (singername[7]) singername[7].innerText = "Ed Sheeran";
    if (singername[8]) singername[8].innerText = "Rihanna";
    if (singername[9]) singername[9].innerText = "Dr. Dog";

    let posters = document.querySelectorAll(".songposter");

    if (posters[0]) posters[0].src = "ordiary.jpg";
    if (posters[1]) posters[1].src = "asitwas.jpg";
    if (posters[2]) posters[2].src = "end of beginning.jpg";
    if (posters[3]) posters[3].src = "her.jpg";
    if (posters[4]) posters[4].src = "poster.jpg";
    if (posters[5]) posters[5].src = "youngandbeautiful.jpg";
    if (posters[6]) posters[6].src = "nightwemet.jpg";
    if (posters[7]) posters[7].src = "perfect.jpg";
    if (posters[8]) posters[8].src = "liftmeup.jpg";
    if (posters[9]) posters[9].src = "whereallthetimego.jpg";

    // Song Click Listener
    Array.from(document.querySelectorAll(".lib1 ol")).forEach(e => {
        e.addEventListener("click", () => {
            let songName = e.querySelector(".songname").innerText.trim();
            if (!songName.toLowerCase().endsWith(".mp3")) songName += ".mp3";
            playmusic(songName);
        });
    });

    // Play/Pause Listener
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "pausebtn.svg";
        } else {
            currentsong.pause();
            play.src = "playbtn.svg";
        }
    });

    // Time Update
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
        if (currentsong.duration) {
            let progress = (currentsong.currentTime / currentsong.duration) * 100;
            document.querySelector(".circle").style.left = progress + "%";
        }
    });

    // Seekbar Listener
    document.querySelector(".seekline").addEventListener("click", e => {
        let rect = e.currentTarget.getBoundingClientRect();
        let percent = ((e.clientX - rect.left) / rect.width) * 100;
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration * percent) / 100;
    });
}

// --- GLOBAL HELPERS & BUTTONS (OUTSIDE MAIN) ---

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Previous Button
document.querySelector("#previous").addEventListener("click", () => {
    let songs = Array.from(document.querySelectorAll(".lib1 .songname"));
    let currentSongName = document.querySelector(".songinfo").innerText.trim();
    let index = songs.findIndex(e => e.innerText.trim() === currentSongName);

    if (index > 0) {
        let prevSong = songs[index - 1].innerText.trim();
        if (!prevSong.endsWith(".mp3")) prevSong += ".mp3";
        playmusic(prevSong);
    }
    else {
        alert("This is the First Song")
    }
});

// Next Button
document.querySelector("#next").addEventListener("click", () => {
    let songs = Array.from(document.querySelectorAll(".lib1 .songname"));
    let currentSongName = document.querySelector(".songinfo").innerText.trim();
    let index = songs.findIndex(e => e.innerText.trim() === currentSongName);

    if (index >= 0 && index < songs.length - 1) {
        let nextSong = songs[index + 1].innerText.trim();
        if (!nextSong.endsWith(".mp3")) nextSong += ".mp3";
        playmusic(nextSong);
    }
    else {
        alert("This was the Last Song...")
    }
});

// Mobile Hamburger Logic
let leftbox = document.querySelector(".box1");
let crossicon = document.querySelector(".openapp img");
document.querySelectorAll(".hamburger").forEach((button) => {
    button.addEventListener("click", () => {
        leftbox.classList.toggle("active");
        crossicon.src = leftbox.classList.contains("active") ? "crossicon.svg" : "hamburger.svg";
    });

    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentsong.volume = e.target.value / 100;
    })

});

// Start the app
main();

const homeiconhover = document.querySelector("nav .homeicon img")

homeiconhover.addEventListener("mouseenter",()=>{
    homeiconhover.style.cursor = "pointer";
})
