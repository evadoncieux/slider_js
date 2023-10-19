'use strict';

import Slider from "./Slider.js";

class Autoplay extends Slider {
    // ajouter le délai qui est modifiable par l'utilisateur

    constructor(params, delay) {
        super(params);
        this._delay = delay * 1000;
        this.idEvent = null;
    }
    // ajouter le bouton play qui lance/arrête le diapo

    createSlider() {
        const playButton = document.createElement('button');
        playButton.classList.add("play");
        playButton.innerHTML = '<i class="icon-play"></i>';
        playButton.addEventListener('click', () => this.playSlider());
        super.slider.appendChild(playButton);

        const pauseButton = document.createElement('button');
        pauseButton.classList.add("play");
        pauseButton.innerHTML = '<i class="icon-play"></i>';
        pauseButton.addEventListener('click', () => this.pauseSlider());
        super.slider.appendChild(pauseButton);
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