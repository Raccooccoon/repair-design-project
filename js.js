
let video = document.querySelector('.video_player');
let playButton = document.querySelector('.play_button');

playButton.onclick = play;

function play() {
    video.play();
    playButton.style.visibility='hidden';
}
