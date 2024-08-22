import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
`;

export const ContentArea = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  padding: 20px;
  overflow-y: scroll;
`;
