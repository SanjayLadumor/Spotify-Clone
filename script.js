// async function getsongs() {
//     try {
//         let a = await fetch("songs.json");
//         if (!a.ok) throw new Error("Could not find songs.json");
//         let songs = await a.json(); 
//         return songs;
//     } catch (error) {
//         console.error("Error fetching songs:", error);
//         return [];
//     }
// }

// let currentsong = new Audio();

// const playmusic = (track) => {
//     console.log("Attempting to play:", track);
//     currentsong.src = "/songs/" + encodeURIComponent(track);

//     document.querySelector(".songinfo").innerHTML = decodeURI(track);
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

//     currentsong.play().then(() => {
//         play.src = "pausebtn.svg";
//     }).catch(e => {
//         console.error("Playback failed:", e);
//         play.src = "playbtn.svg";
//     });
// }

// async function main() {
//     let songs = await getsongs();

//     let songUL = document.querySelector(".lib1").getElementsByTagName("ul")[0];
//     songUL.innerHTML = "";

//     for (const song of songs) {
//         let displayName = song.replace(".mp3", "").replaceAll("%20", " ");
        
//         songUL.innerHTML += `
//             <li>
//                 <div class="song1here">
//                     <img src="greenplayicon.svg" height="45px" width="45px" class="playhere">
//                     <img class="songposter" src="poster.jpg" height="150px" width="140px" style="padding: 10px; border-radius: 10px;">
//                     <div class="info">
//                         <div class="songname">${song}</div>
//                         <div class="artistname">Artist</div>
//                     </div>
//                 </div>
//             </li>`;
//     }

//     Array.from(document.querySelectorAll(".lib1 li")).forEach(e => {
//         e.addEventListener("click", () => {
//             let songName = e.querySelector(".songname").innerText.trim();
//             playmusic(songName);
//         });
//     });
// }

//     Array.from(document.querySelectorAll(".lib1 li")).forEach(e => {
//         e.addEventListener("click", () => {
//             let songName = e.querySelector(".songname").innerText.trim();
//             playmusic(songName);
//         });
//     });

// }

// main();

//     let singername = document.querySelectorAll(".artistname");
//     if (singername[0]) singername[0].innerText = "Alex Warren";
//     if (singername[1]) singername[1].innerText = "Harry Styles";
//     if (singername[2]) singername[2].innerText = "Djo";
//     if (singername[3]) singername[3].innerText = "JVKE";
//     if (singername[4]) singername[4].innerText = "Lana Del Rey";
//     if (singername[5]) singername[5].innerText = "Lana Del Rey";
//     if (singername[6]) singername[6].innerText = "Lord Huron";
//     if (singername[7]) singername[7].innerText = "Ed Sheeran";
//     if (singername[8]) singername[8].innerText = "Rihanna";
//     if (singername[9]) singername[9].innerText = "Dr. Dog";

//     let posters = document.querySelectorAll(".songposter");

//     if (posters[0]) posters[0].src = "ordiary.jpg";
//     if (posters[1]) posters[1].src = "asitwas.jpg";
//     if (posters[2]) posters[2].src = "end of beginning.jpg";
//     if (posters[3]) posters[3].src = "her.jpg";
//     if (posters[4]) posters[4].src = "poster.jpg";
//     if (posters[5]) posters[5].src = "youngandbeautiful.jpg";
//     if (posters[6]) posters[6].src = "nightwemet.jpg";
//     if (posters[7]) posters[7].src = "perfect.jpg";
//     if (posters[8]) posters[8].src = "liftmeup.jpg";
//     if (posters[9]) posters[9].src = "whereallthetimego.jpg";

//     // Song Click Listener
//     Array.from(document.querySelectorAll(".lib1 ol")).forEach(e => {
//         e.addEventListener("click", () => {
//             let songName = e.querySelector(".songname").innerText.trim();
//             if (!songName.toLowerCase().endsWith(".mp3")) songName += ".mp3";
//             playmusic(songName);
//         });
//     });

//     play.addEventListener("click", () => {
//         if (currentsong.paused) {
//             currentsong.play();
//             play.src = "pausebtn.svg";
//         } else {
//             currentsong.pause();
//             play.src = "playbtn.svg";
//         }
//     });

//     currentsong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
//         if (currentsong.duration) {
//             let progress = (currentsong.currentTime / currentsong.duration) * 100;
//             document.querySelector(".circle").style.left = progress + "%";
//         }
//     });

//     document.querySelector(".seekline").addEventListener("click", e => {
//         let rect = e.currentTarget.getBoundingClientRect();
//         let percent = ((e.clientX - rect.left) / rect.width) * 100;
//         if (percent < 0) percent = 0;
//         if (percent > 100) percent = 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentsong.currentTime = (currentsong.duration * percent) / 100;
//     });
// }

// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) return "00:00";
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// }

// document.querySelector("#previous").addEventListener("click", () => {
//     let songs = Array.from(document.querySelectorAll(".lib1 .songname"));
//     let currentSongName = document.querySelector(".songinfo").innerText.trim();
//     let index = songs.findIndex(e => e.innerText.trim() === currentSongName);

//     if (index > 0) {
//         let prevSong = songs[index - 1].innerText.trim();
//         if (!prevSong.endsWith(".mp3")) prevSong += ".mp3";
//         playmusic(prevSong);
//     }
//     else {
//         alert("This is the First Song")
//     }
// });

// document.querySelector("#next").addEventListener("click", () => {
//     let songs = Array.from(document.querySelectorAll(".lib1 .songname"));
//     let currentSongName = document.querySelector(".songinfo").innerText.trim();
//     let index = songs.findIndex(e => e.innerText.trim() === currentSongName);

//     if (index >= 0 && index < songs.length - 1) {
//         let nextSong = songs[index + 1].innerText.trim();
//         if (!nextSong.endsWith(".mp3")) nextSong += ".mp3";
//         playmusic(nextSong);
//     }
//     else {
//         alert("This was the Last Song...")
//     }
// });

// let leftbox = document.querySelector(".box1");
// let crossicon = document.querySelector(".openapp img");
// document.querySelectorAll(".hamburger").forEach((button) => {
//     button.addEventListener("click", () => {
//         leftbox.classList.toggle("active");
//         crossicon.src = leftbox.classList.contains("active") ? "crossicon.svg" : "hamburger.svg";
//     });

//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
//         currentsong.volume = e.target.value / 100;
//     })

// });

// main();

// const homeiconhover = document.querySelector("nav .homeicon img")

// homeiconhover.addEventListener("mouseenter",()=>{
//     homeiconhover.style.cursor = "pointer";
// })

// Function to get the list of songs from JSON

let currentsong = new Audio();
let songs = []; // Global song list

// Helper: Convert seconds to 00:00 format
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Function to fetch the songs from your JSON
async function getSongs() {
    try {
        let response = await fetch("songs.json");
        if (!response.ok) throw new Error("songs.json not found!");
        return await response.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}

// Function to play music
const playMusic = (track, pause = false) => {
    // Ensure the path is correct (relative to your index.html)
    currentsong.src = "songs/" + track; 
    
    if (!pause) {
        currentsong.play().catch(e => console.error("Playback blocked:", e));
        document.querySelector("#play").src = "pausebtn.svg";
    }

    document.querySelector(".songinfo").innerHTML = decodeURI(track).replace(".mp3", "");
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function main() {
    // 1. Get the songs
    songs = await getSongs();
    console.log("Songs loaded:", songs);

    // 2. Populate the library
    let songUL = document.querySelector(".lib1 ul");
    if (!songUL) {
        console.error("Error: Could not find <ul> inside .lib1. Check your HTML!");
        return;
    }
    
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML += `
            <li class="song-item">
                <div class="song1here">
                    <img src="greenplayicon.svg" height="45px" width="45px" class="playhere">
                    <img class="songposter" src="poster.jpg" height="150px" width="140px">
                    <div class="song-details">
                        <div class="songname">${song}</div>
                        <div class="artistname">Artist</div>
                    </div>
                </div>
            </li>`;
    }

    // 3. Add Click Listeners to each song
    document.querySelectorAll(".song-item").forEach(item => {
        item.addEventListener("click", () => {
            let songName = item.querySelector(".songname").innerText.trim();
            playMusic(songName);
        });
    });

    // 4. Play/Pause Button
    let playBtn = document.querySelector("#play");
    playBtn.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            playBtn.src = "pausebtn.svg";
        } else {
            currentsong.pause();
            playBtn.src = "playbtn.svg";
        }
    });

    // 5. Time Update & Seekbar
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
        if (currentsong.duration) {
            let progress = (currentsong.currentTime / currentsong.duration) * 100;
            document.querySelector(".circle").style.left = progress + "%";
        }
    });

    document.querySelector(".seekline").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration * percent) / 100;
    });

    // 6. Previous & Next Buttons
    document.querySelector("#previous").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0].replaceAll("%20", " "));
        if (index > 0) playMusic(songs[index - 1]);
    });

    document.querySelector("#next").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0].replaceAll("%20", " "));
        if (index < songs.length - 1) playMusic(songs[index + 1]);
    });
}

main();
