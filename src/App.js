import React, { Component } from 'react';
import Indicators from './Indicators';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './main.css'; 

// add FontAwesome Libraries
library.add(faAngleLeft, faAngleRight)
const images = ["img/dikaseva-34881-unsplash.jpg", 
"img/mark-basarab-122141-unsplash.jpg", 
"img/milada-vigerova-35578-unsplash.jpg",
"img/riccardo-chiarini-365677-unsplash.jpg",
"img/thomas-morse-349005-unsplash.jpg"
]

class App extends Component {
  state = {
    imageCount: 0,
    position: 0,
    timer: 0
  }
  
  componentDidMount() {
    // upon rendering, we will count how many images we have, then add it to our state so we can keep track of the position.
    this.countImage();
    // We will also make the images automatically slide every 6 seconds. Timer is reset on slideshow changes.
    this.interval = setInterval(() => {
      this.setState({timer: this.state.timer + 1})
      if (this.state.timer === 6) {
        this.changeItem("next")
      }
    }, 1000);
  }
    /**
   * Count how many image urls are in the array, then push the result into the "imageCount" state 
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  countImage = () => { 
    let result = Object.values(images).filter((array) => array.length > 0).length
    this.setState({imageCount: result})
  }
    /**
   * @param {string} pos Direction of the slideshow (prev or next)
   */
  changeItem = (direction) => {
    // previous image
    switch(direction) {
      case "prev":
        // if the position is equal to 0, set it to the image count minus 1 (for offset)
        if (this.state.position === 0) {
          this.setState({position: this.state.imageCount - 1, timer: 0})
        } else {
          this.setState({position: this.state.position - 1, timer: 0})
        }
        break;
      // next image
      case "next":
        // if the position is equal to the image count, then reset it
        if (this.state.position === this.state.imageCount - 1) {
          this.setState({position: 0, timer: 0})
        } else {
         this.setState({position: this.state.position + 1, timer: 0})
        }
        break;
        default:
      }
    }
    // we need to turn this into a function
    updatePosition = (position) => {
      this.setState({position: position, timer: 0})
    }
    
  render() {
    const { position, imageCount } = this.state;
    return (
      <div className="App">
        <section className="container" aria-label="Image Carousel">
        <h1>This is an Image Carousel</h1>
          <div className="carousel">
              <button className="button-previous" onClick={(event) => this.changeItem("prev")} aria-label="Left"><FontAwesomeIcon icon="angle-left" /></button>
              <button className="button-next" onClick={(event) => this.changeItem("next")} aria-label="Right"><FontAwesomeIcon icon="angle-right" /></button>
            <ul class="indicators">
            {[...Array(imageCount)].map((_e, i) => 
              <Indicators index={i} updatePosition={this.updatePosition} currentPosition={position} />
            )}
            </ul>
            <div class="item">
              {images.map((images, index) => (
                <div class={position === index ? "carousel-item fade active" : "carousel-item fade"}><img src={images} alt="..."/></div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
