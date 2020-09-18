import React from 'react';
import styled from 'styled-components';

const LeftContentBlock = styled.div`
  font-weight: 600;
  .icon-container {
    h1 {
      font-size: 1.25rem;
      font-weight: 800;
    }
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: red;
      }
    }
  }
  .information-container {
    margin-top: 5rem;
    ul {
      a {
        text-decoration: none;
        color: inherit;
      }
      list-style-type: none;
      padding-left: 0;
    }
  }
  .sns-container {
    margin-top: 2rem;
    ul {
      list-style-type: none;
      padding-left: 0;

      li:hover {
        color: red;
      }
      li a {
        color: inherit;
      }
    }
  }
  .copyright {
    position: absolute;
    top: initial;
    bottom: 7rem;
    left: 50px;
    right: initial;
  }
`;

export default function LeftContent() {
  return (
    <LeftContentBlock>
      <div className="icon-container">
        <h1>
          <a href="/">
            SEO SOLMIN<sup>™</sup>
          </a>
        </h1>
      </div>
      <div className="information-container">
        <ul>
          <li>
            <a href="/">solgo123@gmail.com</a>
          </li>
          <li>Seoul, Korea</li>
        </ul>
      </div>
      <div className="sns-container">
        <ul>
          <li>
            <a href="https://github.com/solmin0302">Github ➞</a>
          </li>
          <li>
            <a href="https://www.notion.so/1630c14f17c84b88b5c2d13f8b0ebcf7?v=2bf635f99bed466a8464433e47b5e5b5">
              Notion ➞
            </a>
          </li>
          <li>
            <a href="/" style={{ textDecoration: 'line-through' }}>
              Instagram ➞
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">
        2020/06
        <sup style={{ verticalAlign: 'bottom', fontSize: '0.75rem' }}>®</sup>
      </p>
    </LeftContentBlock>
  );
}
