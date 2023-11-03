import { Route, Routes } from 'react-router-dom';

import { ArticleDetails } from './ArticleDetails';
import { Articles } from './Articles';
import { Homepage } from './Homepage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Homepage />} />

      <Route path={'/articles'}>
        <Route index element={<Articles />} />
        <Route path={':articleId'} element={<ArticleDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
