import * as React from 'react';

import Brand from 'client/ui/theme/brand';

export default class Landing extends React.Component {

    public render (): React.ReactNode {
        return (
            <Brand.Container>
                <Brand.Photo/>
            </Brand.Container>
        );
    }
}
