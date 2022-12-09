import { FC, ReactNode } from 'react';
import { ConfigProvider, Layout as Container } from 'antd';

import { Header } from '@/components/Header';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#a191ff',
            colorPrimaryHover: '#5639fc',
          },
        },
      }}
    >
      <Container>
        <Header />
        <Container.Content>{children}</Container.Content>
      </Container>
    </ConfigProvider>
  );
};
