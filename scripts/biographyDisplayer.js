import musicians from '../biography.json' assert { type: 'json' };

const musiciansContainer = document.getElementById('musicians-container');
const biographyContainer = document.querySelector('.biography-container textarea');

musiciansContainer.addEventListener('mouseover', function (event) {
    const musicianImage = event.target.closest('.musician-image');
    if (musicianImage) {
        showBio(musicianImage.id);
    }
});

biographyContainer.addEventListener('dblclick', function () {
    biographyContainer.style.display = 'none';
});

function showBio(musicianImageId) {
    biographyContainer.textContent = getBioContent(musicianImageId);
    biographyContainer.style.display = 'block';
}


function getBioContent(musicianId) {
    const data = musicians.musicians;
    return data[musicianId]
}

