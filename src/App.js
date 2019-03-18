import React, { Component } from 'react';
import Indicators from './Indicators';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './main.css'; 

// add FontAwesome Libraries
library.add(faAngleLeft, faAngleRight)

class App extends Component {
  // if we want to put this in production, we can make an API call and then push the array of images into the images state!
  state = {
    images : ["img/dikaseva-34881-unsplash.jpg", 
              "img/mark-basarab-122141-unsplash.jpg", 
              "img/milada-vigerova-35578-unsplash.jpg",
              "img/riccardo-chiarini-365677-unsplash.jpg",
              "img/thomas-morse-349005-unsplash.jpg"
            ],
    imageCount: 0,
    position: 0,
    timer: 8000
  }
  componentDidMount() {
    // upon rendering, we will count how many images we have, then add it to our state so we can keep track of the position.
    this.countImage();
    // We will also make the images automatically slide every 8 seconds. Timer is reset on slideshow changes.
    // FIXME: Timer is not resetting after user interaction.
    setInterval((event) => this.changeItem("next"), this.state.timer);
  }
    /**
   * Count how many image urls are in the array, then push the result into the "imageCount" state 
   */
  countImage = () => { 
    let result = Object.values(this.state.images).filter((array) => array.length > 0).length
    this.setState({imageCount: result})
  }
    /**
   * @param {string} pos Direction of the slideshow (prev or next)
   */
  changeItem = (pos) => {
    // previous image
    switch(pos) {
      case "prev":
        // if the position is equal to 0, set it to the image count minus 1 (for offset)
        if (this.state.position === 0) {
          this.setState({position: this.state.imageCount - 1, timer: 8000})
        } else {
          this.setState({position: this.state.position - 1, timer: 8000})
        }
        break;
      // next image
      case "next":
        // if the position is equal to the image count, then reset it
        if (this.state.position === this.state.imageCount - 1) {
          this.setState({position: 0, timer: 8000})
        } else {
         this.setState({position: this.state.position + 1, timer: 8000})
        }
        break;
        default:
      }
    }
    // we need to turn this into a function
    updatePosition = (position) => {
      this.setState({position: position, timer: 8000})
    }
  render() {
    const { images, position, imageCount } = this.state;
    return (
      <div className="App">
        <section className="container" aria-label="Image Carousel">
        <h1>This is an Image Carousel</h1>
          <div className="carousel">
            <button className="button-previous" onClick={(event) => this.changeItem("prev")} aria-label="Left"><FontAwesomeIcon icon="angle-left" /></button>
            <button className="button-next" onClick={(event) => this.changeItem("next")} aria-label="Right"><FontAwesomeIcon icon="angle-right" /></button>
            <ul class="indicators">
            {[...Array(imageCount)].map((_e, i) => 
              /* if (i === position) {
                return <li key={i}><b>{i}</b></li>
              } else {
                return <li key={i}>{i}</li>
              } */
              <Indicators index={i} updatePosition={this.updatePosition} currentPosition={position} />
            )}
            </ul>
            <div class="item">
              <img src={images[position]} alt={"Image number " + position} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
