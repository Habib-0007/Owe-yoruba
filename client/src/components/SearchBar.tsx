import React, { useState } from 'react';
import useSearchStore from '../store/useStore';

const SearchBar: React.FC = () => {
    const [localQuery, setLocalQuery] = useState('');
    const setQuery = useSearchStore((state) => state.setQuery);

    const handleSearch = () => {
        setQuery(localQuery);
    };

    return (
        <div className="flex items-center gap-2">
            <input
                type="text"
                className="border rounded px-4 py-2 w-full"
                placeholder="Search for a proverb..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;