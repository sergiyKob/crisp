import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider = document.getElementById('range-slider');

if (slider) {
    noUiSlider.create(slider, {
        start: [50, 150],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 250
        }
    });

    const input0 = document.getElementById('range-slider-input-0');
    const input1 = document.getElementById('range-slider-input-1');
    const inputs = [input0, input1];


    slider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        slider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    })
}

export default slider;