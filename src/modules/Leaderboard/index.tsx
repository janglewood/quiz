import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Table, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import { TableData } from '@/interfaces/table';

import { getTableData } from '@/helpers';

import { useStore } from '@/store';

const columns: {
  title: Capitalize<keyof TableData>;
  dataIndex: keyof TableData;
  key: keyof TableData;
}[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Record',
    dataIndex: 'record',
    key: 'record',
  },
];

export const Leaderboard = observer(() => {
  const {
    quizStore: { record, reset },
    userStore: { name },
  } = useStore();
  const navigate = useNavigate();

  const resetGame = useCallback(() => {
    reset();
    navigate('/categories');
  }, [navigate, reset]);

  const data = getTableData();

  return (
    <Row align='middle' justify='center' className='h100 p-8'>
      <Col span={24}>
        <Typography.Title level={2}>Congrats! 🎉 Your score is {record}</Typography.Title>
        <Col span={20} className='leaderboard-table__wrapper'>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowClassName={(record) => (record.name === name ? 'current-user-row' : '')}
          />
        </Col>
        <Row align='middle' justify='center'>
          <Button type='primary' size='large' onClick={resetGame} htmlType='button'>
            Try again
          </Button>
        </Row>
      </Col>
    </Row>
  );
});
