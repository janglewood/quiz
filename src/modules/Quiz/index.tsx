import { Row } from 'antd';
import { observer } from 'mobx-react-lite';

import { Categories } from './components/Categories';
import { QuizStage } from './components/QuizStage';

import { useStore } from '@/store';

export const Quiz = observer(() => {
  const { quizStore } = useStore();

  return (
    <Row align='middle' justify='center' className='h100 p-8'>
      {quizStore.clues.length ? <QuizStage /> : <Categories />}
    </Row>
  );
});
