import React from 'react';
import styled from 'styled-components';

class Navigation extends React.Component {
  render() {
    return (
      <NavigationWrapper>
        <h1>Finances</h1>
        <ul>
          <li><a href="#expenses">Expenses</a></li>
          <li><a href="#time-tracking">Time tracking</a></li>
          <li><a href="#invoices">Invoices</a></li>
        </ul>
      </NavigationWrapper>
    );
  }
}

const NavigationWrapper = styled.nav`
  background-color: #202a55;
  color: #f3f3f3;
  flex-basis: 220px;

  h1 {
    font-size: 25px;
    font-weight: normal;
    margin: 0;
    padding: 20px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    font-size: 19px;
    list-style: none;
  }
  a {
    color: #f3f3f3;
    display: block;
    padding: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Navigation;
