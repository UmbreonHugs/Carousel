// lets start with the variables
let images = ["img/dikaseva-34881-unsplash.jpg", 
"img/mark-basarab-122141-unsplash.jpg", 
"img/milada-vigerova-35578-unsplash.jpg",
"img/riccardo-chiarini-365677-unsplash.jpg",
"img/thomas-morse-349005-unsplash.jpg"
]
let position = 0;
let selectImage = (i) => {
    // remove the active class, then add one
    $('.item img.active').fadeOut(100).removeClass('active').promise().then(function(){
        $('.item img[data-index='+ i +']').fadeIn().addClass('active')
    })
}
$('.button-previous').on('click', function(){
    if (position === 0) {
        position = images.length - 1;
    } else {
        position = position - 1
    }
    selectImage(position)
})
$('.button-next').on('click', function(){
    if (position === images.length - 1) {
        position = 0;
    } else {
        position = position + 1
    }
    selectImage(position)
})
// generate the images
let generateImage = () => {
    document.querySelector('.item').innerHTML = images.map((image, index) => {
        let html;
        if (position === index) {
            html = `<img src="${image}" alt="${index}" class="active" data-index="${index}" />`
        } else {
            html = `<img src="${image}" alt="${index}" data-index="${index}" />`
        }
        return html
    }).join('');
}
generateImage();