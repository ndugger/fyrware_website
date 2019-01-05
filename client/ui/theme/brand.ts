import StyledComponents from 'styled-components';

import Assets from 'client/ui/theme/assets';
import Palette from 'client/ui/theme/palette';

export default {
    Container: StyledComponents.div`
        background-color: rgb(${ Palette.ui.background.toString() });
        display: flex;
        flex-grow: 1;
        font-family: 'Heebo', sans-serif;
        height: 100%;
        position: relative;
        user-select: none;
        width: 100%;
    `,
    Content: StyledComponents.section`
        bottom: 0;
        display: flex;
        flex-direction: column;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
    `,
    Logo: StyledComponents.h1`
        color: rgb(${ Palette.secondary.main.toString() });
        font-size: 1.4rem;
        font-weight: 400;
        margin: 0;
        padding: 0;
    `,
    Photo: StyledComponents.div`
        background-image: url(${ Assets.scene.src.toString() });
        background-position: right bottom;
        background-size: cover;
        bottom: 0;
        display: block;
        left: 0;
        opacity: 0.10;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
    `
};
