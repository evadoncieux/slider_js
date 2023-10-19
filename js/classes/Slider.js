'use strict';

class Slider {
    constructor(params) {
        // this._params.images = images;
        // this._params.area = area;
        // this._params.width = width;
        // this._params.height = height;
        this._params = {
            images: images,
            area: 'div.slider', //Selecteur CSS
            width:'100%', //optionel
            height:'100%' //optionel
        }

        this.domObject = document.createElement('div');
    }

    createSlider() {
        const slider = document.createElement('div');
        document.body.appendChild(slider);
        slider.classList.add('slider');

        slider.style.width = this.params.width;
        slider.style.height = this.params.height;


        this.slider = slider;
    }

}





export default Slider;