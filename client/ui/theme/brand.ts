import StyledComponents from 'styled-components';

export default {
    Container: StyledComponents.section`
        background-color: rgb(0, 20, 40);
        height: 100%;
        width: 100%;
    `,
    Photo: StyledComponents.div`
        background-image: url(assets/scene_hq.jpg);
        background-position: center center;
        background-size: cover;
        display: block;
        height: 100%;
        opacity: 0.1;
        width: 100%;
    `
};
