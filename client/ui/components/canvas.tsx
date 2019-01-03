import * as React from 'react';

interface CanvasProperties {
    height: number;
    onMount: ((canvas: Canvas) => void);
    width: number;
}

export default class Canvas extends React.Component<CanvasProperties> {

    public componentDidMount () {
        this.props.onMount(this);
    }

    public render (): React.ReactNode {
        const { height, width } = this.props;

        return <canvas height={ height } style={ { display: 'block' } } width={ width }/>;
    }
}
