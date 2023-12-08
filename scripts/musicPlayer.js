const audioPlayer = document.getElementById('audioPlayer');

function playSong(elementId) {
    audioPlayer.src = `assets/music/${elementId}.mp3`;
    audioPlayer.play();
}

document.getElementById('musicians-container').addEventListener('click', function (event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'P') {
        clickedElement.closest('.musician-image').id;
        playSong(clickedElement.id);
    }
});
