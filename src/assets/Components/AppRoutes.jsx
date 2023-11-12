import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PopularList from './PopularList';
import Detail from './Detail';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

