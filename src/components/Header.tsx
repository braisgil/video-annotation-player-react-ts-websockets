// Header component for the application.

import React from 'react';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="bg-blue-500 p-4 text-white relative">
            <h1 className="text-2xl">Reach Industries Frontend Assessment</h1>
            <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4">
                ☰
            </button>
        </header>
    );
}

export default Header;
