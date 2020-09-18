import React from 'react';
import styled from 'styled-components';

const RightLayoutBlock = styled.div`
  width: 75%;
  height: 100vh;
  padding: 50px;
`;

export default function RightLayout({ children }) {
  return <RightLayoutBlock>{children}</RightLayoutBlock>;
}
