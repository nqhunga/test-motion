import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion';

import elevenImage from '../assets/eleven/eleven_1.jpg';
import dustinImage from '../assets/dustin/dustin.jpg';
import mikeImage from '../assets/mike/mike.jpg';
import lucasImage from '../assets/lucas/lucas.jpg';
import willImage from '../assets/will/will_resize.jpg';
import groupImage from '../assets/group-all/poster_film_1.jpg';

const backgroundImage = [
  elevenImage,
  mikeImage,
  dustinImage,
  lucasImage,
  willImage
];

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Box = styled.div`
  flex-basis: ${(props) => props.width}%;
  background-image: url(${(props) => props.urlImage});
  background-position: center center;
  border-right: 1px solid red;
`;

const ContentWrapper = styled.div`
  flex-basis: 100%;
  background: #332;
  background-image: url(${groupImage});
  background-position: center center;
`;

class EntranceAnimation extends React.Component {
  render () {
    const {
        children,
        startAnimation
    } = this.props;

    return (
      <StaggeredMotion
        defaultStyles={[
          {width: 100},
          {width: 100},
          {width: 100},
          {width: 100},
          {width: 100},
          {width: 0}
        ]}
        styles={(prevStyles) => [
          { width: spring(startAnimation ? 0 : 100) },
          { width: spring(prevStyles[0].width) },
          { width: spring(prevStyles[1].width) },
          { width: spring(prevStyles[2].width) },
          { width: spring(prevStyles[3].width) },
          { width: spring(startAnimation ? 100 : 0 ) }
        ]}
      >
        {(styles) => (
          <Wrapper>

            <Box urlImage={backgroundImage[0]} width={styles[0].width}/>
            <Box urlImage={backgroundImage[1]} width={styles[1].width}/>
            <Box urlImage={backgroundImage[2]} width={styles[2].width}/>
            <Box urlImage={backgroundImage[3]} width={styles[3].width}/>
            <Box urlImage={backgroundImage[4]} width={styles[4].width}/>
              <ContentWrapper width={styles[5].width}>
                {children}
              </ContentWrapper>
          </Wrapper>
        )}

      </StaggeredMotion>

    );
  }
}

export default EntranceAnimation;
