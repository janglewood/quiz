import { Routes, Route, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

// Modules
import { Onboarding } from '@/modules/Onboarding';
import { Quiz } from '@/modules/Quiz';
import { Leaderboard } from '@/modules/Leaderboard';

export const RouteManager = observer(() => {
  const { userStore } = useStore();

  return (
    <Routes>
      {userStore.name ? (
        <>
          <Route path='/' element={<Quiz />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </>
      ) : (
        <Route path='/onboarding' element={<Onboarding />} />
      )}
      <Route path='*' element={<Navigate to={userStore.name ? '/' : '/onboarding'} replace />} />
    </Routes>
  );
});
