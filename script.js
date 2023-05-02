const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("prev");
const forward = document.getElementById("fwd");

let progress = document.getElementById('progress');

const songs = [{
    name: "uk_1",
    title: "Preet ku rog",
    artist: "Ashish chamoli || Akansha Nautiyal",
},
{
    name: "uk_2",
    title: "Gulabi suit Tero",
    artist: "himanshu rawat",
},
{
    name: "uk_3",
    title: "hafte m itwara ka din",
    artist: "inder arya || meena rana" ,
}

]

let flag = false;

//for play function

    const playMusic = () => {
    flag = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
};

//for pause function
    const pauseMusic = () => {
    flag = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');

};

play.addEventListener('click', () => {
    flag ? pauseMusic() : playMusic();
});

// Chaning the music data
const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" +songs.name + ".jpg";
};

songIndex = 0;
// loadSong(songs);

//to play next song
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    
    loadSong(songs[songIndex]);
    playMusic();
}

//to play previous song
const previousSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;

    loadSong(songs[songIndex]);
    playMusic();
}

// progress js

music.addEventListener('timeupdate',(event)=>{
    // console.log(event);
    const { currentTime , duration } = event.target;
    // console.log(currentTime);
    // console.log(duration); 

    let progress_time = (currentTime/duration) % 100;

    progress.style.width = `${progress_time}%`;

});

forward.addEventListener('click',nextSong);
previous.addEventListener('click',previousSong);
