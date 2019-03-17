import React, { Component } from 'react';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="container" aria-label="Image Carousel">
          <div className="carousel">
            <button className="button-backward" aria-label="Left">Left</button>
            <button className="button-forward" aria-label="Right">Right</button>
            <ul class="indicators">
              <li>O</li>
              <li>O</li>
              <li>O</li>
              <li>O</li>
              <li>O</li>
            </ul>
            <div class="item active">
              <img src="img/dikaseva-34881-unsplash.jpg" alt="..." />
            </div>
            <div class="item">
              <img src="img/mark-basarab-122141-unsplash.jpg" alt="..." />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
