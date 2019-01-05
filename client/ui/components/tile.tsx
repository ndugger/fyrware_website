import * as React from 'react';

import Card from 'client/ui/components/card';

import General from 'client/ui/theme/general';

interface TileProps {
    background?: string;
    scale?: number;
    style?: any;
}

export default class Tile extends React.Component<TileProps> {

    public static defaultProps = {
        scale: 0
    };

    public render (): React.ReactNode {
        const { background, children, scale, style } = this.props;

        return (
            // @ts-ignore
            <General.Tile scale={ scale } style={ style }>
                <Card background={ background } padding={ 0 } style={ { opacity: 0.75 } }>
                    { children }
                </Card>
            </General.Tile>
        );
    }
}
