import { Navigate, Route, Routes } from 'react-router-dom';

import { About } from './About';
import { ArticleDetails } from './ArticleDetails';
import { BaseLayout } from '../Components/Layout';
import { Browse } from './Browse';
import { ContactUs } from './ContactUs';
import { Homepage } from './Homepage';
import { NotFound } from './NotFound';

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
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
