import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileInvoice, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {
  render() {
    return (
      <NavigationWrapper>
        <h1>Finances</h1>
        <ul>
          <li>
            <Link prefetch href="/">
              <a href="/"><Icon><FontAwesomeIcon icon={faChartBar} /></Icon> Expenses</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/time-tracking">
              <a href="/time-tracking"><Icon><FontAwesomeIcon icon={faClock} /></Icon> Time tracking</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/invoices">
              <a href="/invoices"><Icon><FontAwesomeIcon icon={faFileInvoice} /></Icon> Invoices</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/clients">
              <a href="/clients"><Icon><FontAwesomeIcon icon={faUsers} /></Icon> Clients</a>
            </Link>
          </li>
        </ul>
      </NavigationWrapper>
    );
  }
}

const NavigationWrapper = styled.nav`
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
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
    align-items: center;
    color: ${props => props.theme.colors.text.primary};
    display: flex;
    height: 60px;
    padding: 0 10px;
    text-decoration: none;
    transition: .2s background-color, .2s color;

    &:hover {
      background-color: ${props => props.theme.colors.background.secondary};
      color: ${props => props.theme.colors.text.primary};
    }
  }
`;

const Icon = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  width: 40px;

  svg {
    height: 30px;
    width: 30px;
  }
`;

export default Navigation;
