import React from 'react';
import styled from 'styled-components';

const LeftLayoutBlock = styled.div`
  position: relative;
  width: 25%;
  height: 100vh;
  padding: 50px;
`;

export default function LeftLayout({ children }) {
  return <LeftLayoutBlock>{children}</LeftLayoutBlock>;
}
