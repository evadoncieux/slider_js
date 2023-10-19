'use strict';

import Slider from "./Slider.js";

class Autoplay extends Slider {
    // ajouter le délai qui est modifiable par l'utilisateur

    constructor(params, delay) {
        super(params);
        this._delay = delay;
        this.idEvent = null;
    }
    // ajouter le bouton play qui lance/arrête le diapo

    createSlider() {

        super.createSlider();

        const playButton = document.createElement('button');
        playButton.classList.add("play");
        playButton.innerHTML = '<i class="icon-play"></i>';
        playButton.addEventListener('click', () => this.playSlider());
        this.slider.appendChild(playButton);

        const pauseButton = document.createElement('button');
        pauseButton.classList.add("play");
        pauseButton.innerHTML = '<i class="icon-pause"></i>';
        pauseButton.addEventListener('click', () => this.pauseSlider());
        this.slider.appendChild(pauseButton);
    }

    playSlider() {
        let autoplaySlider = setInterval(() => {
            document.querySelector(this.imageData[this.currentIndex].src).click();
        }, 2000);
    }

    pauseSlider() {
        clearInterval(autoplaySlider)
    }
}

export default Autoplay;