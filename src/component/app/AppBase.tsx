import { ReactNode } from 'react';
import SideMenuBase from '@appComponents/app/SideMenu/SideMenuBase';
import { AppContainer, MainContent, ContentArea } from '@appComponents/app/styles/AppBaseStyled';
import AppHeaderBase from '@appComponents/app/AppHeader/AppHeaderBase';

const AppBase = ({ children }: { children: ReactNode }) => {
  return (
    <AppContainer>
      <AppHeaderBase />
      <MainContent>
        <SideMenuBase />
        <ContentArea>{children}</ContentArea>
      </MainContent>
    </AppContainer>
  );
};

export default AppBase;
