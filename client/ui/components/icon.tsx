import * as React from 'react';

interface IconProps {
    glyph: string;
}

export default class Icon extends React.Component<IconProps> {

    public render (): React.ReactNode {
        const { glyph } = this.props;

        return (
            <i className='material-icons'>
                { glyph }
            </i>
        );
    }
}
