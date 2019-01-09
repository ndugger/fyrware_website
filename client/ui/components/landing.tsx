import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from 'client/ui/components/button';
import Canvas from 'client/ui/components/canvas';
import Flex from 'client/ui/components/flex';
import Logo from 'client/ui/components/logo';
import Tile from 'client/ui/components/tile';
import X from 'client/ui/components/x';

import Brand from 'client/ui/theme/brand';

interface LandingState {
    height: number;
    width: number;
}

// TODO paint and cache shapes for canvas performance improvements

export default class Landing extends React.Component<any, LandingState> {

    public state: LandingState = {
        height: window.innerHeight,
        width: window.innerWidth
    };

    private paint (context: CanvasRenderingContext2D) {
        const size = 80;
        const width = Math.ceil(this.state.width / size);
        const height = Math.ceil(this.state.height / size);

        context.clearRect(0, 0, this.state.width, this.state.height);
        context.save();
        context.translate(-8, 0);
        context.translate((this.state.width - (size * width)) / 2, (this.state.height - (size * height)) / 2);

        // paint grid
        for (let y = 0; y <= size * height + size; y += size) {
            for (let x = 9; x <= size * width + size; x += size) {
                context.save();

                // paint grid dot
                context.fillStyle = 'rgba(255, 255, 255, 0.3)';

                context.beginPath();
                context.arc(x, y, 2, 0, Math.PI * 2);
                context.fill();
                context.closePath();

                // paint grid horizontal lines
                if (x < size * width) {
                    context.fillStyle = context.createLinearGradient(x + 12, y - 1, x + size - 16, y + 1);
                    context.fillStyle.addColorStop(0, 'rgba(255, 255, 255, 0)');
                    context.fillStyle.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
                    context.fillStyle.addColorStop(1, 'rgba(255, 255, 255, 0)');

                    context.fillRect(x + 12, y - 1, size - 16, 2);
                }

                // paint grid vertical lines
                if (y < size * height) {
                    context.fillStyle = context.createLinearGradient(x - 1, y + 12, x + 1, y + size - 16);
                    context.fillStyle.addColorStop(0, 'rgba(255, 255, 255, 0)');
                    context.fillStyle.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
                    context.fillStyle.addColorStop(1, 'rgba(255, 255, 255, 0)');

                    context.fillRect(x - 1, y + 12, 2, size - 16);
                }

                context.restore();
            }
        }

        // paint grain animation
        const pattern = window.document.createElement('canvas');
        pattern.width = size;
        pattern.height = size;

        const grain = pattern.getContext('2d').createImageData(size, size);

        for (let i = 0; i < size * size * 4; i += 4) {
            const value = Math.floor(Math.random() * 255);

            grain.data[ i ] = value;
            grain.data[ i + 1 ] = value;
            grain.data[ i + 2 ] = value;
            grain.data[ i + 3 ] = 25;
        }

        pattern.getContext('2d').putImageData(grain, 0, 0);

        context.fillStyle = context.createPattern(pattern, 'repeat');

        context.scale(3, 1);
        context.fillRect(0, 0, this.state.width, this.state.height);
        context.restore();

        window.setTimeout(() => this.paint(context), 1000 / 30);
    }

    private handleCanvasMount (canvas: Canvas): void {
        const element = ReactDOM.findDOMNode(canvas) as HTMLCanvasElement;
        const context = element.getContext('2d');

        // @ts-ignore
        element.style.mixBlendMode = 'soft-light';

        this.paint(context);
    }

    public componentDidMount (): void {
        window.addEventListener('resize', () => this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        }));
    }

    public render (): React.ReactNode {
        const { height, width } = this.state;
        const cards = [
            {
                description: 'Git-based Package Manager for C++',
                title: 'grok'
            },
            {
                description: 'High Level Multi-Threaded Observable Library',
                title: 'fusion'
            },
            {
                description: 'Reactive Application Programming Framework',
                title: 'reactor'
            },
            {
                description: 'WebGPU Toolkit for C++ Web Applications',
                title: 'wtk'
            },
            {
                description: 'C++ Discord Bot, Powered By Reactor',
                title: 'talos'
            }
        ];

        return (
            <Brand.Container>
                <Brand.Photo/>
                <Canvas height={ height } width={ width } onMount={ canvas => this.handleCanvasMount(canvas) }/>
                <Brand.Content>
                    <Flex justify='flex-end'>
                        <X padding={ 24 }>
                            <Button glyph='menu'/>
                        </X>
                    </Flex>
                    <Flex direction='column' grow={ 1 } height='100%' justify='center' width='100%'>
                        <Flex justify='center' width='100%'>
                            <Flex width={ 1280 }>
                                <X paddingBottom={ 8 } marginRight={ 4 } marginTop={ -16 }>
                                    <Logo size={ 40 }/>
                                </X>
                                <X marginTop={ -6 }>
                                    <Brand.Logo>
                                        fyrware
                                    </Brand.Logo>
                                </X>
                            </Flex>
                        </Flex>
                        <Flex style={ { margin: '-12px 0 0', overflow: 'hidden' } }>
                            <Flex grow={ 1 } scroll='horizontal' style={ { margin: '0 0 -16px', overflow: 'auto', padding: `16px 0 36px ${ (width - 1280) / 2 }px` } } wrap='nowrap'>

                                { cards.map(card => (
                                    <X display='flex' flexShrink={ 0 } height={ 512 } paddingRight={ 24 } width={ 640 }>
                                        <Tile background={ `url(/assets/${ card.title }.jpg)` } scale={ (640 + 16) / 640 } style={ { flexGrow: 1 } } title={ card.title }>
                                            { card.description }
                                        </Tile>
                                    </X>
                                )) }

                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex justify='center'>
                        <X color='rgba(255, 255, 255, 0.25)' fontSize='0.75rem' padding='0 0 16px'>
                            Website & Software &copy; 2019 Nick Dugger. Illustrations By Tithi Luadthong.
                        </X>
                    </Flex>
                </Brand.Content>
            </Brand.Container>
        );
    }
}
