"use strict";

class Slider {
  constructor(params) {
    this.imageData = params.images;
    this.area = document.querySelector(params.area);
    this.currentIndex = 0;

    this.sliderWidth = params.width;
    this.sliderHeight = params.height;

    this.createSlider();
  }

  createSlider() {
    this.slider = document.createElement('div');
    this.slider.classList.add("slider-content");

    this.slider.style.width = this.sliderWidth;
    this.slider.style.height = this.sliderHeight;

    this.imgElement = document.createElement('img');
    this.imgElement.src = this.imageData[this.currentIndex].src;
    this.slider.appendChild(this.imgElement);

    this.area.appendChild(this.slider);

    const prevButton = document.createElement('button');
    prevButton.addEventListener('click', () => this.prevImg());
    this.slider.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.addEventListener('click', () => this.nextImg());
    this.slider.appendChild(nextButton);

    this.area.appendChild(this.slider);
  }
  prevImg() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.imgElement.src = this.imageData[this.currentIndex].src;
    }
  }

  nextImg() {
    if (this.currentIndex < this.imageData.length - 1) {
      this.currentIndex++;
      this.imgElement.src = this.imageData[this.currentIndex].src;
    }
  }
};

export default Slider;
