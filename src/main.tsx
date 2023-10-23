import ReactDOM from 'react-dom/client';
import './Main.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.tsx';
import Layout from './components/layouts/template/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename="/">
        <Layout>
            <Router />
        </Layout>
    </BrowserRouter>
);
