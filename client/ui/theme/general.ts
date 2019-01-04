import StyledComponents from 'styled-components';

import Palette from 'client/ui/theme/palette';

export default {
    Card: StyledComponents.section`
        background: rgb(${ Palette.ui.card.toString() });
        color: white;
    `
};
