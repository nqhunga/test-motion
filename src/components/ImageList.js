import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

import dustinLogo from '../assets/dustin/dustin_logo.jpg';
import elevenLogo from '../assets/eleven/eleven_logo.jpg';
import willLogo from '../assets/will/will_logo.jpg';
import hopperLogo from '../assets/hopper/hopper_logo.jpg';
import mikeLogo from '../assets/mike/mike_logo.jpg';
import lucasLogo from '../assets/lucas/lucas_logo.jpg';
import nancyLogo from '../assets/nancy/nancy_logo.jpg';
import joyceLogo from '../assets/joyce/joyce_logo.jpg';
import jonathanLogo from '../assets/jonathan/jonathan_logo.jpg';

const charLogo = [
  dustinLogo,
  elevenLogo,
  willLogo,
  hopperLogo,
  mikeLogo,
  lucasLogo,
  nancyLogo,
  joyceLogo,
  jonathanLogo
];

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  transform: rotateY(${(props) => props.rotateY}deg);
`;

class ImageList extends React.Component {
  render () {
    const {
      startAnimation
    } = this.props;

    return (
      <Motion
        defaultStyles={{ rotateY: 90 }}
        style={{ rotateY: spring(startAnimation ? 90 : 0)}}
      >
        {charLogo.map((style, i) =>
          <Motion key={i} style={style}>
            {style =>
              <LogoContainer rotateY={style.rotateY}>
                <img src={charLogo[i]} />
              </LogoContainer>
            }
          </Motion>
        )}

      </Motion>
    );
  }
}

export default ImageList;
