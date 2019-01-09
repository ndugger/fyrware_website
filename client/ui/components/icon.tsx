import * as React from 'react';

interface IconProps {
    glyph: string;
    size?: number;
}

export default class Icon extends React.Component<IconProps> {

    public render (): React.ReactNode {
        const { glyph, size = 24 } = this.props;

        return (
            <i className='material-icons' style={ { fontSize: size } }>
                { glyph }
            </i>
        );
    }
}
