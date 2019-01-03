import StyledComponents from 'styled-components';

export default {
    Container: StyledComponents.div`
        background-color: rgb(0, 20, 40);
        flex-grow: 1;
        font-family: 'Heebo', sans-serif;
        height: 100%;
        position: relative;
        width: 100%;
    `,
    Content: StyledComponents.section`
        bottom: 40px;
        display: flex;
        flex-direction: column;
        left: 40px;
        position: absolute;
        right: 40px;
        top: 40px;
        z-index: 1;
    `,
    Logo: StyledComponents.h1`
        color: white;
        font-size: 2rem;
        font-weight: 300;
        margin: 0;
        padding: 0;
    `,
    Photo: StyledComponents.div`
        background-image: url(assets/scene_hq.jpg);
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
