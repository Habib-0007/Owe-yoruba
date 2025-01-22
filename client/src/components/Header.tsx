import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Yoruba Proverbs API</h1>
                <p className="text-gray-400">Explore the wisdom of Yoruba proverbs</p>
            </div>
        </header>
    );
};

export default Header;