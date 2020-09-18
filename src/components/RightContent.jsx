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
          <Link to="/">Hello</Link>
          <Link to="/work">Work</Link>
        </h1>
      </div>

      <Route path="/" exact component={RightContentIndex} />
      <Route path="/work" component={RightContentWork} />
    </RightContentBlock>
  );
}
