import { Navigate, Route, Routes } from 'react-router-dom';

import { ArticleDetails } from './ArticleDetails';
import { Browse } from './Browse';
import { Homepage } from './Homepage';
import { BaseLayout } from '../Components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Homepage />} />

        <Route path={'/browse'} element={<Browse />} />
        <Route path={'/articles'}>
          <Route index element={<Navigate to={'/browse'} />} />
          <Route path={':articleId'} element={<ArticleDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
