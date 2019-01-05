import * as React from 'react';

import General from 'client/ui/theme/general';

interface CardProps {
    background?: string;
    grow?: number;
    padding?: number;
    style?: any;
}

export default class Card extends React.Component<CardProps> {

    public static defaultProps = {
        grow: 1,
        padding: 16
    };

    public render (): React.ReactNode {
        const { background, children, grow, padding, style } = this.props;

        return (
            <General.Card style={ { background, backgroundPosition: 'center center', backgroundSize: 'cover', flexGrow: grow, padding, ...style } }>
                { children }
            </General.Card>
        );
    }
}
