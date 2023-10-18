import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import SignIn from '../components/layouts/login/signIn/SignIn';
import SignUp from '../components/layouts/login/signUp/SignUp';
import { RoutePaths } from '../common/routePaths';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={RoutePaths.HOME} element={<App />} />
            <Route path={RoutePaths.LOGIN} element={<SignIn />} />
            <Route path={RoutePaths.SIGNUP} element={<SignUp />} />
        </Routes>
    );
};

export default Router;
