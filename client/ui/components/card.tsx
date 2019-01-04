import * as React from 'react';

import General from 'client/ui/theme/general';

interface CardProps {
    grow?: number;
    padding?: number;
}

export default class Card extends React.Component<CardProps> {

    public static defaultProps = {
        grow: 1,
        padding: 16
    };

    public render (): React.ReactNode {
        const { grow, padding } = this.props;

        return (
            <General.Card style={ { flexGrow: grow, padding } }/>
        );
    }
}
