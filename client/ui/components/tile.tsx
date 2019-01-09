import * as React from 'react';

import Button from 'client/ui/components/button';
import Card from 'client/ui/components/card';
import Flex from 'client/ui/components/flex';
import Icon from 'client/ui/components/icon';
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
                        <X padding='20px 28px 24px' position='relative' overflow='hidden'>
                            <X background={ background } backgroundPosition='bottom center' backgroundSize='auto 512px' filter='blur(12px)' position='absolute' top={ -12 } right={ -12 } bottom={ -12 } left={ -12 }/>
                            <X backgroundColor='rgba(0, 20, 40, 0.33)' position='absolute' top={ 0 } right={ 0 } bottom={ 0 } left={ 0 }/>
                            <Flex align='center' style={ { position: 'relative', zIndex: 1 } }>
                                <X flexGrow={ 1 }>
                                    <X color={ `rgb(${ Palette.secondary.main.toString() })` } fontFamily='Rajdhani, cursive' fontSize='1.4rem' fontWeight={ 600 }>
                                        <X display='inline-block' height={ 0 } marginLeft={ -8 } marginRight={ -8 } position='relative' tag='span' top={ 7 }>
                                            <Icon glyph='chevron_left' size={ 28 }/>
                                        </X>
                                        { title }
                                        <X display='inline-block' height={ 0 } marginLeft={ -8 } position='relative' tag='span' top={ 7 }>
                                            <Icon glyph='chevron_right' size={ 28 }/>
                                        </X>
                                    </X>
                                    <X marginTop={ 6 } fontSize='0.85rem'>
                                        { children }
                                    </X>
                                </X>
                                <X position='relative' top={ 2 }>
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
