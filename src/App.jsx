import React, { useState } from 'react';

import styled, { createGlobalStyle, css } from 'styled-components';
import { MdInvertColors } from 'react-icons/md';

import MainLayout from './components/Layout/MainLayout';
import LeftLayout from './components/Layout/LeftLayout';
import RightLayout from './components/Layout/RightLayout';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

const GlobalStyle = createGlobalStyle`
  body {
  /* align-items: stretch; */
  overflow: hidden;
  font-size: 1.25rem;
  background: white;
  ${(props) =>
    props.clicked &&
    css`
      background: black;
      color: white;
    `}
}
`;

const ThemeButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  /* position: absolute; */
  background: black;
  color: white;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.clicked &&
    css`
      background: white;
      color: black;
      transform: rotate(180deg);
    `}
  transition: 0.3s ease-in;

  .buttonIcon {
    transform: translate(25%, 25%);
    font-size: 2rem;
  }
`;

function App() {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <GlobalStyle clicked={clicked} />
      <MainLayout>
        <LeftLayout>
          <LeftContent />
          <ThemeButton onClick={onClick} clicked={clicked}>
            <MdInvertColors className="buttonIcon" />
          </ThemeButton>
        </LeftLayout>
        <RightLayout>
          <RightContent />
        </RightLayout>
      </MainLayout>
    </>
  );
}

export default App;
