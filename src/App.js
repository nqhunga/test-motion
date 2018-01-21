import React, { Component } from 'react';


import EntranceAnimation from './components/EntranceAnimation';
import BoxAnimation from './components/BoxAnimation';
import ShowList from './components/ShowList';

import {
  ContentWrapper,
  Title,
  Subtitle,
  Name,
  LeftBlock,
  RightBlock,
  ContentBlock,
  ButtonClose
} from './style/Home.style';

class App extends Component {
  componentWillMount() {
    this.setState({
      showEntrance: false,
      showBox: false,
      showList: false

    });

    setTimeout(() => this.setState({ showEntrance: true }), 1000);
    setTimeout(() => this.setState({ showBox: true }), 2000);
  }

  clickHandler = () => {
    this.setState({
      showList: !this.state.showList
    });
  }

  render() {
    return (
      <EntranceAnimation startAnimation={this.state.showEntrance}>
        <ContentWrapper>

          <LeftBlock>
            <BoxAnimation startAnimation={this.state.showBox}>
              <ContentBlock>
                <Title>Left</Title>
                <button onClick={this.clickHandler.bind(null, '')}>Click here</button>
              </ContentBlock>
              <ShowList startAnimation={this.state.showList}>
                <ButtonClose onClick={this.clickHandler.bind(null, '')}>Close</ButtonClose>
              </ShowList>
          </BoxAnimation>
          </LeftBlock>

          <RightBlock>
            <BoxAnimation startAnimation={this.state.showBox}>
              <ContentBlock>
                <Title>Right</Title>
                <button>Click Here</button>
              </ContentBlock>
            </BoxAnimation>
          </RightBlock>

        </ContentWrapper>
      </EntranceAnimation>
    );
  }
}

export default App;
