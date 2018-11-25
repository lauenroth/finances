import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from './Navigation';

class MainContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <MainContent>
          {this.props.children}
        </MainContent>
      </React.Fragment>
    );
  }
}

const MainContent = styled.main`
  flex-basis: calc(100% - 220px);
  padding: 20px;
`;

export default MainContainer;
