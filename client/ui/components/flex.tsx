import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface FlexProps {
    align?: string;
    basis?: string | number;
    direction?: string;
    grow?: number;
    height?: string | number;
    justify?: string;
    maxHeight?: string | number;
    maxWidth?: string | number;
    scroll?: string;
    shrink?: number;
    style?: any;
    width?: string | number;
    wrap?: string;
}

export default class Flex extends React.Component<FlexProps> {

    private handleWheel (event: React.UIEvent): void {

        if (this.props.scroll === 'horizontal') {
            // @ts-ignore
            ReactDOM.findDOMNode(this).scrollLeft += event.deltaY;
        }
    }

    public render (): React.ReactNode {
        const {
            align,
            basis,
            children,
            direction,
            grow,
            height,
            justify,
            maxHeight,
            maxWidth,
            shrink,
            style,
            width,
            wrap
        } = this.props;
        const flexStyle = {
            alignItems: align,
            display: 'flex',
            flexBasis: basis,
            flexDirection: direction,
            flexGrow: grow,
            flexShrink: shrink,
            flexWrap: wrap,
            height,
            justifyContent: justify,
            maxHeight,
            maxWidth,
            width,
            ...style
        };

        return (
            // @ts-ignore
            <div style={ flexStyle } onWheel={ e => this.handleWheel(e) }>
                { children }
            </div>
        );
    }
}
