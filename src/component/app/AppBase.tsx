import { ReactNode } from 'react';
import SideMenuBase from '@appComponents/app/SideMenu/SideMenuBase';
import {
    AppContainer,
    HeaderContainer,
    MainContent,
    ContentArea
} from '@appComponents/app/styled/AppBaseStyled';

const AppBase = ({ children }: { children: ReactNode }) => {
    return (
        <AppContainer>
            <HeaderContainer />
            <MainContent>
                <SideMenuBase />
                <ContentArea>{children}</ContentArea>
            </MainContent>
        </AppContainer>
    );
};

export default AppBase;
