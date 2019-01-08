import * as React from 'react';

import Icon from 'client/ui/components/icon';

import General from 'client/ui/theme/general';

interface ButtonProps {
    glyph?: string;
}

export default class Button extends React.Component<ButtonProps> {

    public render (): React.ReactNode {
        const { children, glyph } = this.props;

        if (glyph && !children) {
            return (
                <General.Button>
                    <Icon glyph={ glyph }/>
                </General.Button>
            );
        }

        return (
            <General.Button>
                { children }
            </General.Button>
        );
    }
}
