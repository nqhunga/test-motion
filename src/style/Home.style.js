import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

import MyFont from '../font/StrangerThings.ttf';

injectGlobal`
  @font-face {
    font-family: MyFont;
    src: url('${MyFont}');
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100vh;
  color: #FFF;
  button {
    -webkit-text-stroke: 0px;
    background: #9E9E9E;
    background-image: -webkit-linear-gradient(top, #9E9E9E, #000000);
    background-image: -moz-linear-gradient(top, #9E9E9E, #000000);
    background-image: -ms-linear-gradient(top, #9E9E9E, #000000);
    background-image: -o-linear-gradient(top, #9E9E9E, #000000);
    background-image: linear-gradient(to bottom, #9E9E9E, #000000);
    -webkit-border-radius: 10;
    -moz-border-radius: 10;
    border-radius: 10px;
    -webkit-box-shadow: 0px 1px 3px #666666;
    -moz-box-shadow: 0px 1px 3px #666666;
    box-shadow: 0px 1px 3px #666666;
    font-family: Arial;
    color: #ffffff;
    font-size: 15px;
    padding: 10px 20px 10px 20px;
    border: solid #9E9E9E 2px !important;
    text-decoration: none;
  }
  button:hover {
    background: #9E9E9E;
    background-image: -webkit-linear-gradient(top, #9E9E9E, #B20008);
    background-image: -moz-linear-gradient(top, #9E9E9E, #B20008);
    background-image: -ms-linear-gradient(top, #9E9E9E, #B20008);
    background-image: -o-linear-gradient(top, #9E9E9E, #B20008);
    background-image: linear-gradient(to bottom, #9E9E9E, #B20008);
    text-decoration: none;
  }
`;

export const LeftBlock = styled.div`
  font-family: MyFont;
  color: #000;
  -webkit-text-stroke: 2.5px red;
  position: relative;
  height: 100%;
  width: 30%;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const RightBlock = styled.div`
  font-family: MyFont;
  color: #000;
  -webkit-text-stroke: 2.5px red;
  height: 100%;
  width: 30%;
  right: 0;
`;

export const ContentBlock = styled.div`
  z-index: 1;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3em;
  line-height: 50px;
  font-weight: 200;
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  line-height: 40px;
  font-weight: 200;
`;

export const Name = styled.h5`
  font-size: 1.4em;
  line-height: 28px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
`;

export const ButtonClose = styled.button`
  z-index: 100;
`;
