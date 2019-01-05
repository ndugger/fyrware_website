import * as React from 'react';

export default class X extends React.Component<any> {

    public render (): React.ReactNode {
        const { children, ...style } = this.props;
        return <div style={ style }>{ children }</div>;
    }
}
