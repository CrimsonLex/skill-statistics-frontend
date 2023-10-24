import { ReactNode } from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <main>
        <Navbar />
        <Outlet />
        {children}
    </main>
);

export default Layout;
