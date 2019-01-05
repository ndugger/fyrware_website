import StyledComponents from 'styled-components';

import Palette from 'client/ui/theme/palette';

export default {
    Card: StyledComponents.section`
        background: rgb(${ Palette.ui.card.toString() });
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.33);
        color: white;
        display: flex;
        position: relative;
    `,
    Tile: StyledComponents.section`
        background: rgb(${ Palette.ui.card.toString() });
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.33);
        display: flex;
        overflow: hidden;
        transform-origin: center;
        transition: all .2s ease;

        &:hover {
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
            transform: scale(${ (props: any) => props.scale });
        }
    `
};
