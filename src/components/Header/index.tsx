import { FC, useCallback } from 'react';
import { Layout as Container, Row, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { useStore } from '@/store';

import { ReactComponent as RefreshIcon } from '@/assets/icons/refresh.svg';

export const Header: FC = observer(() => {
  const {
    userStore,
    quizStore: { reset, isGameStarted, stage },
  } = useStore();
  const navigate = useNavigate();

  const resetGame = useCallback(() => {
    reset();
    navigate('/categories');
  }, [navigate, reset]);

  return (
    <Container.Header>
      <Row align='middle' justify='space-between'>
        <Typography.Text>{userStore.name ? `${userStore.name}` : 'Quiz game'}</Typography.Text>
        {isGameStarted && <Typography.Text>{`Question ${stage + 1}`}</Typography.Text>}
        {userStore.name && <RefreshIcon onClick={resetGame} />}
      </Row>
    </Container.Header>
  );
});
