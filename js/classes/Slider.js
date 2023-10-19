"use strict";

class Slider {
  constructor(params) {
    this.images = params.images;
    this.area = document.querySelector(params.area);
    this.currentIndex = 0;

    this.sliderWidth = params.width;
    this.sliderHeight = params.height;

    this.createSlider();


  }

  createSlider() {
    this.slider = document.createElement('div');
    this.slider.classList.add("slider");

    this.slider.style.width = this.sliderWidth;
    this.slider.style.height = this.sliderHeight;

    this.images = document.createElement('img');
    this.area.appendChild(this.slider);

    const prevButton = document.createElement('button');
    this.area.appendChild(prevButton);

    const nextButton = document.createElement('button');
    this.area.appendChild(nextButton);



    this.area.appendChild(this.slider);

  }
}

export default Slider;
