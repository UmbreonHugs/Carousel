## Image Carousel
I created a simple image carousel with Javascript, and React. You can add or remove as much images as you like by updating the array within the code. It is accessible and responsive on all devices.

The first step when making the Carousel is to generate a simple image list with just plain HTML. I have to understand the structure of the document before manipulating it with Javascript and React. During this process, I build a plain layout and created the buttons and indicators. Images by default are hidden, while the images with the "active" tag are displayed.

Once the barebones HTML layout is done, I used javascript (and react) to manipulate the images. I started with just building a function that would allow me to update an image by putting the index in the parameters. If I can achieve something like that, then I can easily implement the functionality of the buttons and indicators, as well as the interval timer. By clicking on the buttons and indicators, the Javascript and React adds and removes classes based on the index of the images, which is defined when the images are loop in the array. Then I coded the interval (or timer in React) that will reset every time a user does an action.

Once I finished the functional part, I touched up the layout by adding FontAwesome Icons and Fading animations, as well as making it accessible and responsive.

## Preview
https://umbreonhugs.github.io/carousel-live/

## Photo Credits
- Photo 1: Milada Vigerova (https://unsplash.com/@mili_vigerova)
- Photo 2: Riccardo Chiarini (https://unsplash.com/@riccardoch)
- Photo 3: Dikaseva (https://unsplash.com/@dikaseva)
- Photo 4: Mark Basarab (https://unsplash.com/@ignitedit)
- Photo 5: Thomas Morse (https://unsplash.com/@timorse)
