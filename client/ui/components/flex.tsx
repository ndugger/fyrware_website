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
    width?: string | number;
}

export default class Flex extends React.Component<FlexProps> {

    public render (): React.ReactNode {
        const { align, basis, children, direction, grow, height, justify, maxHeight, maxWidth, shrink, width } = this.props;
        const style = {
            alignItems: align,
            display: 'flex',
            flexBasis: basis,
            flexDirection: direction,
            flexGrow: grow,
            flexShrink: shrink,
            height,
            justifyContent: justify,
            maxHeight,
            maxWidth,
            width
        };

        return (
            // @ts-ignore
            <div style={ style }>
                { children }
            </div>
        );
    }
}
