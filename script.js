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

// const homeiconhover = document.querySelector("nav .homeicon img")

// homeiconhover.addEventListener("mouseenter",()=>{
//     homeiconhover.style.cursor = "pointer";
// })

// // Function to get the list of songs from JSON

// let currentsong = new Audio();
// let songs = []; // Global list to be used by Next/Previous buttons

// // 1. Helper: Time Formatter
// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) return "00:00";
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// }

// // 2. Fetch songs from your JSON file
// async function getsongs() {
//     try {
//         let a = await fetch("songs.json");
//         if (!a.ok) throw new Error("songs.json not found");
//         return await a.json(); 
//     } catch (error) {
//         console.error("Error loading songs:", error);
//         return [];
//     }
// }

// // 3. Play music logic
// const playmusic = (track) => {
//     console.log("Attempting to play:", track);
//     // Path should be relative to your folder structure
//     currentsong.src = "songs/" + track; 

//     document.querySelector(".songinfo").innerHTML = decodeURI(track).replace(".mp3", "");
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

//     currentsong.play().then(() => {
//         document.querySelector("#play").src = "pausebtn.svg";
//     }).catch(e => {
//         console.error("Playback failed:", e);
//         document.querySelector("#play").src = "playbtn.svg";
//     });
// }

// // 4. Main App Logic
// async function main() {
//     songs = await getsongs();

//     // Select the <ul> where songs will be listed
//     let songUL = document.querySelector(".lib1 ul");
//     if (!songUL) {
//         console.error("Could not find <ul> inside .lib1");
//         return;
//     }
    
//     songUL.innerHTML = "";

//     // Loop through the array from your JSON
//     for (const song of songs) {
//         songUL.innerHTML += `
//             <li class="song-item">
//                 <div class="song1here">
//                     <img src="greenplayicon.svg" height="45px" width="45px" class="playhere">
//                     <img class="songposter" src="poster.jpg" height="150px" width="140px" style="padding: 10px; border-radius: 10px;">
//                     <div class="song-details">
//                         <div class="songname">${song}</div>
//                         <div class="artistname">Artist</div>
//                     </div>
//                 </div>
//             </li>`;
//     }

// let singername = document.querySelectorAll(".artistname");
// if (singername[0]) singername[0].innerText = "Alex Warren";
// if (singername[1]) singername[1].innerText = "Harry Styles";
// if (singername[2]) singername[2].innerText = "Djo";
// if (singername[3]) singername[3].innerText = "JVKE";
// if (singername[4]) singername[4].innerText = "Lana Del Rey";
// if (singername[5]) singername[5].innerText = "Lana Del Rey";
// if (singername[6]) singername[6].innerText = "Lord Huron";
// if (singername[7]) singername[7].innerText = "Ed Sheeran";
// if (singername[8]) singername[8].innerText = "Rihanna";
// if (singername[9]) singername[9].innerText = "Dr. Dog";

// let posters = document.querySelectorAll(".songposter");

// if (posters[0]) posters[0].src = "ordiary.jpg";
// if (posters[1]) posters[1].src = "asitwas.jpg";
// if (posters[2]) posters[2].src = "end of beginning.jpg";
// if (posters[3]) posters[3].src = "her.jpg";
// if (posters[4]) posters[4].src = "poster.jpg";
// if (posters[5]) posters[5].src = "youngandbeautiful.jpg";
// if (posters[6]) posters[6].src = "nightwemet.jpg";
// if (posters[7]) posters[7].src = "perfect.jpg";
// if (posters[8]) posters[8].src = "liftmeup.jpg";
// if (posters[9]) posters[9].src = "whereallthetimego.jpg";

//     // Assign Click Listeners
//     Array.from(document.querySelectorAll(".song-item")).forEach(e => {
//         e.addEventListener("click", () => {
//             let songName = e.querySelector(".songname").innerText.trim();
//             playmusic(songName);
//         });
//     });

//     // Play/Pause Button
//     let playBtn = document.querySelector("#play");
//     playBtn.addEventListener("click", () => {
//         if (currentsong.paused) {
//             currentsong.play();
//             playBtn.src = "pausebtn.svg";
//         } else {
//             currentsong.pause();
//             playBtn.src = "playbtn.svg";
//         }
//     });

//     // Time Update & Seekbar
//     currentsong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
//         if (currentsong.duration) {
//             let progress = (currentsong.currentTime / currentsong.duration) * 100;
//             document.querySelector(".circle").style.left = progress + "%";
//         }
//     });

//     document.querySelector(".seekline").addEventListener("click", e => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentsong.currentTime = (currentsong.duration * percent) / 100;
//     });
// }

// // 5. Hamburger Logic (Outside main)
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

// // Start the app
// main();

let currentsong = new Audio();
let songs = []; // Global list

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

async function getsongs() {
    try {
        let a = await fetch("songs.json");
        if (!a.ok) throw new Error("songs.json not found");
        return await a.json();
    } catch (error) {
        console.error("Error loading songs:", error);
        return [];
    }
}

const playmusic = (track) => {
    currentsong.src = "songs/" + track; 
    document.querySelector(".songinfo").innerHTML = decodeURI(track).replace(".mp3", "");
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

    currentsong.play().then(() => {
        document.querySelector("#play").src = "pausebtn.svg";
    }).catch(e => {
        console.error("Playback failed:", e);
        document.querySelector("#play").src = "playbtn.svg";
    });
}

async function main() {
    // 1. Load songs
    songs = await getsongs();

    // 2. Build the UI
    let songUL = document.querySelector(".lib1 ul");
    if (songUL) {
        songUL.innerHTML = "";
        for (const song of songs) {
            songUL.innerHTML += `
                <li class="song-item">
                    <div class="song1here">
                        <img src="greenplayicon.svg" height="45px" width="45px" class="playhere">
                        <img class="songposter" src="poster.jpg" height="150px" width="140px" style="padding: 10px; border-radius: 10px;">
                        <div class="song-details">
                            <div class="songname">${song}</div>
                            <div class="artistname">Artist</div>
                        </div>
                    </div>
                </li>`;
        }
    }

    // 3. Set Artist & Posters (Your manual logic)
    let singername = document.querySelectorAll(".artistname");
    let artists = ["Alex Warren", "Harry Styles", "Djo", "JVKE", "Lana Del Rey", "Lana Del Rey", "Lord Huron", "Ed Sheeran", "Rihanna", "Dr. Dog"];
    singername.forEach((div, i) => { if(artists[i]) div.innerText = artists[i]; });
    
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

    // 4. Listeners (Moved INSIDE main so 'songs' is ready)
    
    // Song Click
    document.querySelectorAll(".song-item").forEach(e => {
        e.addEventListener("click", () => {
            playmusic(e.querySelector(".songname").innerText.trim());
        });
    });

    // Play/Pause
    document.querySelector("#play").addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            document.querySelector("#play").src = "pausebtn.svg";
        } else {
            currentsong.pause();
            document.querySelector("#play").src = "playbtn.svg";
        }
    });

    // Previous Button
    document.querySelector("#previous").addEventListener("click", () => {
        // Find current song in our JSON array
        let currentTrack = currentsong.src.split("/").pop().replaceAll("%20", " ");
        let index = songs.indexOf(currentTrack);

        if (index > 0) {
            playmusic(songs[index - 1]);
        } else {
            alert("This is the First Song");
        }
    });

    // Next Button
    document.querySelector("#next").addEventListener("click", () => {
        let currentTrack = currentsong.src.split("/").pop().replaceAll("%20", " ");
        let index = songs.indexOf(currentTrack);

        if (index >= 0 && index < songs.length - 1) {
            playmusic(songs[index + 1]);
        } else {
            alert("This was the Last Song...");
        }
    });

    // Time & Seekbar
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
}

// 5. Global Mobile/UI Logic
document.querySelectorAll(".hamburger").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".box1").classList.toggle("active");
    });
});

// Run
main();
