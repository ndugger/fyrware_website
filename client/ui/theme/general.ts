import StyledComponents from 'styled-components';

import Palette from 'client/ui/theme/palette';

export default {
    Button: StyledComponents.button`
        background: none;
        border: 1px solid rgb(${ Palette.secondary.main.toString() });
        color: white;
        line-height: 0;
        padding: 8px;
        outline: none;
        transition: background 0.12s ease;

        &:hover {
            background: rgba(${ Palette.secondary.main.toString() }, 0.15);
        }
    `,
    Card: StyledComponents.section`
        background: rgb(${ Palette.ui.card.toString() });
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.33);
        color: white;
        display: flex;
        position: relative;
    `,
    Tile: StyledComponents.section`
        background: rgb(${ Palette.ui.card.toString() });
        border-top: 1px solid rgb(${ Palette.secondary.main.toString() });
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
