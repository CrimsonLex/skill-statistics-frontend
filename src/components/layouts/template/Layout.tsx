import { ReactNode } from 'react';
import Navbar from '../Navbar';
import AuthNavbar from '../AuthNavbar'; // Import AuthNavbar

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    const handleSignOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <main>
            {isAuthenticated ? (
                <AuthNavbar onSignOut={handleSignOut} />
            ) : (
                <Navbar />
            )}
            {children}
        </main>
    );
};

export default Layout;
