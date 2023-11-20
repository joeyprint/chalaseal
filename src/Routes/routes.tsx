import { Route, Routes } from 'react-router-dom';

import { ArticleDetails } from './ArticleDetails';
import { Articles } from './Articles';
import { Homepage } from './Homepage';
import { BaseLayout } from '../Components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Homepage />} />

        <Route path={'/browse'}>
          <Route index element={<Articles />} />
          <Route path={':articleId'} element={<ArticleDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
