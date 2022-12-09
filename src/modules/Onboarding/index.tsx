import { Button, Col, Form, Input, Row } from 'antd';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

export const Onboarding = observer(() => {
  const { userStore } = useStore();
  const handleSubmit = ({ name }: { name: string }) => {
    userStore.setName(name);
  };

  return (
    <Row align='middle' justify='center' className='h100'>
      <Col span={12}>
        <Form layout='vertical' onFinish={handleSubmit}>
          <Form.Item
            label='Your name'
            name='name'
            required={false}
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input size='large' />
          </Form.Item>
          <Row justify='center'>
            <Button type='primary' htmlType='submit'>
              Let&apos;s play
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
});
