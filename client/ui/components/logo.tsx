import * as React from 'react';

import Palette from 'client/ui/theme/palette';

interface LogoProps {
    color?: string;
    size: number;
}

export default class Logo extends React.Component<LogoProps> {

    public static defaultProps = {
        color: `rgb(${ Palette.secondary.main.toString() })`
    };

    public render (): React.ReactNode {
        const { color, size } = this.props;

        return (
            <svg style={ { fill: color, height: size, width: size } } viewBox='0 0 243.01 380.34'>
                <path d='M121.53,380.34a16,16,0,0,1-16-16v-71a16,16,0,0,1,32,0v71A16,16,0,0,1,121.53,380.34Z'/>
                <path d={ `M243,241.58q0,3.33-.19,6.61a157.12,157.12,0,0,1-16.89,64.07,120.92,120.92,0,0,1-18.58,23.89,16,16,
                    0,0,1-22.62,0,15.81,15.81,0,0,1-3.64-5.62,16,16,0,0,1,3.64-17,89.37,89.37,0,1,0-126.38,0,16,16,0,0,1,2.94,
                    18.59,16,16,0,0,1-25.56,4,120.56,120.56,0,0,1-31.3-54.06s0,0,0,0A171.52,171.52,0,0,1,.24,251.16Q0,245.42,
                    0,239.45c.25-29.37,8-56.62,21.52-79.11,10-17,25.55-39.7,42-61,34.64-44.86,44.1-55,47.25-97L111,0l1.84,
                    1c.37.24,37.61,21.05,39.93,84.39.27,7.51.76,13.83,1.37,19.12,2.19,18.92,6.1,24.74,8.49,24.86h.05c2.34,0,
                    6-4.87,9.21-17.37A160.42,160.42,0,0,0,175.44,92l.43-3.33,2,2.43c1.94,2.33,35.95,43.8,53.62,89.23.31.7.59,
                    1.43.84,2.16l1.08,2.88c1,2.89,2,5.81,2.89,8.72.3,1,.58,1.92.85,2.92.56,2,1.08,3.94,1.55,5.93.54,2.25,1,
                    4.5,1.42,6.75.19,1,.38,2,.54,3,.11.57.19,1.13.27,1.66A160.9,160.9,0,0,1,243,241.58Z` }/>
            </svg>
        );
    }
}
