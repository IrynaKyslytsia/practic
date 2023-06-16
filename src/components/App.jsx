import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from 'pages/Home';
import { UsersPage } from 'pages/UsersPage';
import { UserDetailsPage } from 'pages/UserDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='users' element={<UsersPage />} />
      <Route path='users/:id' element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
