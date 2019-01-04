import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Canvas from 'client/ui/components/canvas';
import Card from 'client/ui/components/card';
import Flex from 'client/ui/components/flex';

import Brand from 'client/ui/theme/brand';

interface LandingState {
    height: number;
    width: number;
}

export default class Landing extends React.Component<any, LandingState> {

    public state: LandingState = {
        height: window.innerHeight,
        width: window.innerWidth
    };

    private paint (context: CanvasRenderingContext2D) {
        window.requestAnimationFrame(() => {
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

            this.paint(context);
        });
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

        return (
            <Brand.Container>
                <Brand.Photo/>
                <Canvas height={ height } width={ width } onMount={ canvas => this.handleCanvasMount(canvas) }/>
                <Brand.Content>
                    <Flex align='center' grow={ 1 } justify='center'>
                        <Flex direction='column' height={ 800 } width={ 1280 }>
                            <Flex shrink={ 1 }>
                                <Brand.Logo>fyrware</Brand.Logo>
                            </Flex>
                            <Flex grow={ 1 }>
                                <Card>foo</Card>
                            </Flex>
                        </Flex>
                    </Flex>
                </Brand.Content>
            </Brand.Container>
        );
    }
}
