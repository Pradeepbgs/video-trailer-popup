const BtnEl = document.getElementById('btn');

const videoContainerEl = document.querySelector('.video-container');

const closeIconEl = document.querySelector('.close-icon');

const videoEl = document.querySelector('video');

BtnEl.addEventListener('click',()=>{
    videoContainerEl.classList.remove('active');
})

closeIconEl.addEventListener('click',()=>{
    videoContainerEl.classList.add('active')
    videoEl.pause();
    videoEl.currentTime =0;
})