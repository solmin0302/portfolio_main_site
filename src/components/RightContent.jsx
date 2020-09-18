import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import RightContentIndex from './RightContentIndex';
import RightContentWork from './RightContentWork';

const RightContentBlock = styled.div`
  font-weight: 600;

  .menu-bar-container {
    h1 {
      font-size: 1.25rem;
    }
    a {
      text-decoration: none;
      color: inherit;
      margin-right: 1rem;
    }
    a:hover {
      cursor: pointer;
      color: red;
    }
    a:active {
      text-decoration: underline;
    }
  }
  .content-container {
    margin-top: 5rem;
    .introduce {
      width: 80%;
    }
  }
`;

export default function RightContent() {
  return (
    <RightContentBlock>
      <div className="menu-bar-container">
        <h1>
          <Link to="/portfolio_main_site/">Hello</Link>
          <Link to="/portfolio_main_site/work">Work</Link>
        </h1>
      </div>

      <Route path="/portfolio_main_site/" exact component={RightContentIndex} />
      <Route path="/portfolio_main_site/work" component={RightContentWork} />
    </RightContentBlock>
  );
}
