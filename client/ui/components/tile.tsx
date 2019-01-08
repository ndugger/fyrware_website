import * as React from 'react';

import Button from 'client/ui/components/button';
import Card from 'client/ui/components/card';
import Flex from 'client/ui/components/flex';
import X from 'client/ui/components/x';

import General from 'client/ui/theme/general';
import Palette from 'client/ui/theme/palette';

interface TileProps {
    background?: string;
    scale?: number;
    style?: any;
    title?: string;
}

export default class Tile extends React.Component<TileProps> {

    public static defaultProps = {
        scale: 0
    };

    public render (): React.ReactNode {
        const { background, children, scale, style, title } = this.props;

        return (
            // @ts-ignore
            <General.Tile scale={ scale } style={ style }>
                <Card background={ background } padding={ 0 } style={ { opacity: 0.75 } }>
                    <Flex direction='column' grow={ 1 } height='100%' width='100%'>
                        <Flex grow={ 1 }/>
                        <X padding={ 24 } position='relative' overflow='hidden'>
                            <X background={ background } backgroundPosition='bottom center' backgroundSize='auto 512px' filter='blur(12px)' position='absolute' top={ -12 } right={ -12 } bottom={ -12 } left={ -12 }/>
                            <X backgroundColor='rgba(0, 20, 40, 0.33)' position='absolute' top={ 0 } right={ 0 } bottom={ 0 } left={ 0 }/>
                            <Flex align='center' style={ { position: 'relative', zIndex: 1 } }>
                                <X flexGrow={ 1 }>
                                    <X color={ `rgb(${ Palette.secondary.main.toString() })` } fontSize='1.33rem' fontWeight={ 300 } fontStyle='italic'>
                                        { title }
                                    </X>
                                    <X marginTop={ 2 } fontSize='0.88rem'>
                                        { children }
                                    </X>
                                </X>
                                <X>
                                    <Button glyph='chevron_right'/>
                                </X>
                            </Flex>
                        </X>
                    </Flex>
                </Card>
            </General.Tile>
        );
    }
}
