import { Button, Col, List, Row, Spin, Typography } from 'antd';

import { useCategories } from './hooks';

export const Categories = () => {
  const { categories, isLoading, chosenCategoryId, onCategoryChange, onCategorySave } =
    useCategories();

  return isLoading ? (
    <Spin size='large' />
  ) : (
    <Col span={24}>
      <Row justify='center'>
        <Typography.Title>Choose a category</Typography.Title>
      </Row>
      <Row justify='center'>
        <List
          itemLayout='horizontal'
          grid={{ column: 3, gutter: 24 }}
          dataSource={categories}
          renderItem={({ id, title }) => (
            <List.Item
              key={id}
              style={{
                backgroundColor: chosenCategoryId === id ? '#a191ff' : 'transparent',
              }}
              onClick={() => onCategoryChange(id)}
            >
              <Typography.Text>{title}</Typography.Text>
            </List.Item>
          )}
        />
      </Row>
      <Row justify='center'>
        <Button size='large' type='primary' onClick={onCategorySave} disabled={!chosenCategoryId}>
          Start challenge
        </Button>
      </Row>
    </Col>
  );
};
