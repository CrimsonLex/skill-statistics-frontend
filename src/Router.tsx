import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<App />} />
            <Route path="/signup" element={<App />} />
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>;
};

export default Router;
