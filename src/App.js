import React, { Component } from 'react'
import Indicators from './Indicators'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './main.css'; 

// add FontAwesome Libraries
library.add(faAngleLeft, faAngleRight)
// load up the image urls
const images = ["img/dikaseva-34881-unsplash.jpg", 
"img/mark-basarab-122141-unsplash.jpg", 
"img/milada-vigerova-35578-unsplash.jpg",
"img/riccardo-chiarini-365677-unsplash.jpg",
"img/thomas-morse-349005-unsplash.jpg"
]

class App extends Component {
  state = {
    position: 0,
    timer: 0
  }
  componentDidMount() {
    // We will also make the images automatically slide every 6 seconds. Timer is reset on slideshow changes.
    this.interval = setInterval(() => {
      this.setState({timer: this.state.timer + 1})
      if (this.state.timer === 6) {
        this.changeItem("next")
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
/**
 * changeItem updates the index of the current slide by going backward or forward
 * @param direction Direction of the slider ("prev" or "next")
 */
  changeItem = (direction) => {
    switch(direction) {
      // previous image
      case "prev":
        this.setState({position: this.state.position - 1, timer: 0})
        // if the position is less than or equal to 0, set it to the image count minus 1 (for offset)
        if (this.state.position <= 0) {
          this.setState({position: images.length - 1})
        }
        break
      // next image
      case "next":
        this.setState({position: this.state.position + 1, timer: 0})
        // if the position is greater than or equal to the image count, then set it to zero
        if (this.state.position >= images.length - 1) {
          this.setState({position: 0, timer: 0})
        }
        break
        default:
      }
    }
  /**
   * updatePosition updates the index of the current slide by going backward or forward. Will be carried over as a prop.
   * @param i Index of the slide
   */
  updatePosition = (i) => {
    this.setState({position: i, timer: 0})
  }
  render() {
    const { position } = this.state;
    return (
      <div className="App">
        <section className="container" aria-label="Image Carousel">
        <h1>Image Carousel (React)</h1>
        <a href="/carousel-2.html">Javascript Verson</a> <br />
          <div className="carousel">
              <button className="button-previous" onClick={(event) => this.changeItem("prev")} aria-label="Left"><FontAwesomeIcon icon="angle-left" /></button>
              <button className="button-next" onClick={(event) => this.changeItem("next")} aria-label="Right"><FontAwesomeIcon icon="angle-right" /></button>
            <ul class="indicators">
            {[...Array(images.length)].map((_e, i) => 
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
export default App
