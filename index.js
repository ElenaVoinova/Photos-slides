const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ['11.jpeg', '22.jpeg', '33.jpeg', '44.jpeg', '55.jpeg'];
console.log(photos[0]);
let i=0;

next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
        i=0;
    }
    document.querySelector('#photoNYC').src=photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1; 
    }
    document.querySelector('#photoNYC').src=photos[i];
})