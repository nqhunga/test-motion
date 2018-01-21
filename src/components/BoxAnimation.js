import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const AnimatedBox = styled.div`
  max-width: 600px;
  opacity: ${(props) => props.opacity};
  transform: translateY(${(props) => props.translateY}px);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;;
  height: 100%;
`;

class BoxAnimation extends React.Component {


  render () {
    const {
      startAnimation,
      children
    } = this.props;

    return (
      <Motion
        defaultStyles={{ opacity: 0, translateY: -200 }}
        style={{ opacity: spring(startAnimation ? 1 : 0), translateY: spring(startAnimation ? 0 : -200) }}
      >
        {(style) => (
          <AnimatedBox opacity={style.opacity} translateY={style.translateY}>
            {children}
          </AnimatedBox>
        )}
      </Motion>
    );
  }
}

export default BoxAnimation;
