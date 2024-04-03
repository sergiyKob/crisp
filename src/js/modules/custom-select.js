// import choices.js from 'choices.js';
import choices from '../../../node_modules/choices.js/public/assets/scripts/choices.min.js'

const multiDefault = () => {
    const elements = document.querySelectorAll('.multi-default');

    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            // classNames: {
            //     containerOuter: 'choices multi-default__choices',
            //     containerInner: 'multi-default__inner',
            // }
        });
    });
};

multiDefault();
export default multiDefault;