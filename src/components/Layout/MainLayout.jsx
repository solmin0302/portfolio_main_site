import React from 'react';
import styled from 'styled-components';

const MainLayoutBlock = styled.div`
  display: flex;
`;

export default function MainLayout({ children }) {
  return <MainLayoutBlock>{children}</MainLayoutBlock>;
}
