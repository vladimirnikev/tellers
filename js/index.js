let videoPlayButton = document.querySelector('.btn_video__link');

function makeDarkBackground(opacityValue, y) {
    let videoShadow = document.querySelector('.video_shadow');
    let headerCoordinates = document.querySelector('header').getBoundingClientRect();

    if (headerCoordinates.y <= y) {
        videoShadow.style.opacity = '0';
        videoPlayButton.style.opacity = '1';
    } else {
        // Появляется бургер
        videoPlayButton.style.opacity = `0`;
        videoShadow.style.opacity = `${opacityValue}`;
    }
}

function createElement(str) {
    let element = document.createElement('div');

    element.innerHTML = str;
    return element.firstElementChild;
}

function openModalOrClose(value) {
    let modalVideoPlayerWrapper = document.querySelector('.modal_video__wrapper');
    let videoPlayer = document.querySelector('.main__video');

    modalVideoPlayerWrapper.style.display = `${value}`;
    videoPlayer.pause();
    videoPlayer.controls = false;

    if (value === 'block') {
        document.body.style.overflow = 'hidden';

    } else if (value === 'none') {
        document.body.style.overflow = '';
        videoPlayer.play();
    }
}

function scrollToBlock(block) {
    block.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

document.body.addEventListener('click', (e) => {
    let section = document.getElementById('hiddenSection');
    let footer = document.getElementById('hiddenFooter');
    let videoCloseButton = document.querySelector('.modal_video__btn_close');
    let modalOverlay = document.querySelector('.modal_video__overlay');
    let navLinkArray = document.querySelectorAll('.nav__link');

    // Modal Video manipulation
    if (e.target === videoPlayButton) {
        openModalOrClose('block');
    } else if (e.target === videoCloseButton) {
        openModalOrClose('none');
    } else if (e.target === modalOverlay) {
        openModalOrClose('none');
    }

    // Links manipulation
    else if (e.target === navLinkArray[0]) {
        scrollToBlock(section);
    } else if (e.target === navLinkArray[3]) {
        scrollToBlock(footer);
    }
})

document.body.addEventListener('keyup', (e) => {
    let key = e.keyCode;

    if (key == 27) {
        openModalOrClose('none');
    }
})

window.addEventListener('scroll', () => {
    makeDarkBackground(0.4, -250);
})