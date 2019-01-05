import * as React from 'react';

interface FlexProps {
    align?: string;
    basis?: string | number;
    direction?: string;
    grow?: number;
    height?: string | number;
    justify?: string;
    maxHeight?: string | number;
    maxWidth?: string | number;
    shrink?: number;
    style?: any;
    width?: string | number;
    wrap?: string;
}

export default class Flex extends React.Component<FlexProps> {

    public render (): React.ReactNode {
        const { align, basis, children, direction, grow, height, justify, maxHeight, maxWidth, shrink, style, width, wrap } = this.props;
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
            <div style={ flexStyle }>
                { children }
            </div>
        );
    }
}
