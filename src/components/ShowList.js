import React from 'react'
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

const TheList = styled.div`
  float: left;
  height: 650px;
  width: 600px;
  background: red;
  transform: scale(${(props) => props.scale });
  position: absolute;
  z-index: 10;
  margin: 0 auto;

`;

const LogoContainer = styled.div`
  position: relative;
  height: 600px;
  width: 600px;
  bottom:0;
  left: 0;
  background: blue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2px;
  div img {
    width: 100%;
    height: 100%;
    transform: rotateY(${(props) => props.rotatey}deg);
  }
`;

class ShowList extends React.Component {


  render () {
    const {
      startAnimation,
      children
    } = this.props;

    return (
      <Motion
        defaultStyles={{ scale: 1}}
        style={{ scale: spring(startAnimation ? 1:0) }}
      >
        {(style) => (
          <TheList scale={style.scale}>
            {children}
            <LogoContainer>
              {charLogo.map((style,i) =>
                <Motion key={i}
                  defaultStyles={{ rotatey: 90 }}
                  style={{ rotatey: spring(startAnimation ? 0:90) }}
                >
                  {style =>
                    <div rotatey={style.rotatey}>
                      <img src={charLogo[i]} ></img>
                    </div>
                  }

                </Motion>

              )}
            </LogoContainer>
          </TheList>
        )}
      </Motion>
    );
  }
}

export default ShowList;
