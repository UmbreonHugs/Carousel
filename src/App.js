import React, { Component } from 'react';
import './main.css';

class App extends Component {
  // if we want to put this in production, we can make an API call and then push the array of images into the images state!
  state = {
    images : ["img/dikaseva-34881-unsplash.jpg", 
              "img/mark-basarab-122141-unsplash.jpg", 
              "img/milada-vigerova-35578-unsplash.jpg",
              "img/riccardo-chiarini-365677-unsplash.jpg",
              "img/thomas-morse-349005-unsplash.jpg",
            ],
    imageCount: 0,
    position: 0,
  }
  componentDidMount() {
    // upon rendering, we will count how many images we have, then add it to our state so we can keep track of the position.
    this.countImage();
  }
    /**
   * Count how many image urls are in the array, then push the result into the "imageCount" state 
   */
  countImage = () => { 
    let result = Object.values(this.state.images).filter((array) => array.length > 0).length - 1
    this.setState({imageCount: result})
  }
    /**
   * @param {string} pos Direction of the slideshow (prev or next)
   */
  changeItem = (pos) => {
    // previous image
    switch(pos) {
      case "prev":
        if (this.state.position === 0) {
          this.setState({position: this.state.imageCount})
        } else {
        this.setState({position: this.state.position - 1})
        }
        break;
      // next image
      case "next":
        if (this.state.position === this.state.imageCount) {
          this.setState({position: 0})
        } else {
        this.setState({position: this.state.position + 1})
        }
        break;
        default:
      }
    }

  render() {
    const { images, position } = this.state;
    return (
      <div className="App">
        <section className="container" aria-label="Image Carousel">
        <h1>This is an Image Carousel</h1>
          <div className="carousel">
            <button className="button-backward" onClick={(event) => this.changeItem("prev")} aria-label="Left">Left</button>
            <button className="button-forward" onClick={(event) => this.changeItem("next")} aria-label="Right">Right</button>
            <ul class="indicators">
              <li>O</li>
              <li>O</li>
              <li>O</li>
              <li>O</li>
              <li>O</li>
            </ul>
            <div class="item">
              <img src={images[position]} alt="..." />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
