import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { useStore } from '@/store';

export const QuizStage = observer(() => {
  const {
    quizStore: { currentQuestion, applyAnswer, setStage, stage, setRecord },
    userStore,
  } = useStore();
  const navigate = useNavigate();

  const onFinish = (answer: string) => {
    applyAnswer(answer);

    if (stage === 9) {
      setRecord(userStore.name);
      navigate('/leaderboard');
    }
  };

  return (
    <Col span={24}>
      <Row justify='center'>
        <Col span={16}>
          <Typography.Title level={1}>{currentQuestion.question}</Typography.Title>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={12}>
          <Form
            // We're have to update initial value every time stage changed
            key={stage}
            layout='vertical'
            onFinish={({ answer }) => {
              onFinish(answer);
            }}
            initialValues={{
              answer: currentQuestion.userAnswer || currentQuestion.answer,
            }}
          >
            <Form.Item
              name='answer'
              required={false}
              rules={[{ required: true, message: 'Please enter your answer' }]}
            >
              <Input size='large' />
            </Form.Item>
            <Row justify='center'>
              <Space size={24}>
                <Button
                  type='primary'
                  htmlType='button'
                  onClick={() => setStage(stage - 1)}
                  disabled={stage === 0}
                >
                  Previous question
                </Button>
                <Button type='primary' htmlType='submit'>
                  {stage === 9 ? 'Finish' : 'Next question'}
                </Button>
              </Space>
            </Row>
          </Form>
        </Col>
      </Row>
    </Col>
  );
});
