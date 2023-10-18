import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { RoutePaths } from '../common/routePaths';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={RoutePaths.HOME} element={<App />} />
        </Routes>
    );
};

export default Router;
