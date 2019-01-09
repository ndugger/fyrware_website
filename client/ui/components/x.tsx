import * as React from 'react';

export default class X extends React.Component<any> {

    public static defaultProps = {
        tag: 'div'
    };

    public render (): React.ReactNode {
        const { children, tag, ...style } = this.props;

        return (
            <this.props.tag style={ style }>
                { children }
            </this.props.tag>
        );
    }
}
