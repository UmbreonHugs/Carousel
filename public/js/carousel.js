// lets start with the variables
let images = ["img/dikaseva-34881-unsplash.jpg", 
"img/mark-basarab-122141-unsplash.jpg", 
"img/milada-vigerova-35578-unsplash.jpg",
"img/riccardo-chiarini-365677-unsplash.jpg",
"img/thomas-morse-349005-unsplash.jpg"
]

// lets try to generate the images dynamically
let generateImage = () => {
    document.querySelector('.item').innerHTML = images.map((image, index) => {
        let html = `<img src="${image}" alt="${index}" />`
        return html
    }).join('');
}
generateImage();