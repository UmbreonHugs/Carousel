// lets start with the variables
let images = ["img/dikaseva-34881-unsplash.jpg", 
"img/mark-basarab-122141-unsplash.jpg", 
"img/milada-vigerova-35578-unsplash.jpg",
"img/riccardo-chiarini-365677-unsplash.jpg",
"img/thomas-morse-349005-unsplash.jpg"
]
let position = 0
let updatePosition = (i) => {
    // remove the active class, then add one
    $(".indicators li button").children('i').removeClass('fa-dot-circle')
    $('.carousel-item.active').removeClass('active').promise().then(function(){
        $(".carousel-item[data-index="+ i +"]").addClass('active')
        $(".indicators li button[data-index="+ i +"]").children('i').addClass('fa-dot-circle')
    })
}
$('.button-previous').on('click', function(){
    position = position - 1
    if (position < 0) {
        position = images.length - 1
    }
    updatePosition(position)
    console.log(position)
})
$('.button-next').on('click', function(){
    position = position + 1
    if (position >= images.length) {
        position = 0;
    }
    updatePosition(position)
    console.log(position)
})
// generate the images
let generateCarousel = () => {
    document.querySelector('.indicators').innerHTML = [...Array(images.length)].map((_e, index) => {
        let html = `<li><button onClick="updatePosition(${index})" id="indicatorButton" data-index="${index}"><i class="fas fa-circle"></i></button></li>`
        return html
    }).join('')
    document.querySelector('.item').innerHTML = images.map((image, index) => {
        let html
        if (position === index) {
            html = `<div class="carousel-item fade active" data-index="${index}"><img src="${image}" alt="${index}" /></div>`
            $(".indicators li button[data-index="+ index +"]").children('i').addClass('fa-dot-circle')
        } else {
            html = `<div class="carousel-item fade" data-index="${index}"><img src="${image}" alt="${index}"/></div>`
        }
        return html
    }).join('')
     setInterval(function(){
        position = position + 1
        if (position >= images.length) {
            position = 0;
        }
        updatePosition(position)
        console.log(position)
    }, 5000) 
}
generateCarousel()