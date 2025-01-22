import React from 'react';
import Navbar from '../components/Navbar';

const PutProverb: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 px-4">
                <h1 className="text-3xl font-bold mb-4">PUT /api/proverbs/:id</h1>
                <p>
                    Update an existing Yoruba proverb in the database. You can modify the proverb, its translation,
                    or meaning.
                </p>

                <h2 className="text-xl font-bold mt-6">Request Body</h2>
                <pre className="bg-gray-100 p-4 rounded">
                    {`
{
    "proverb": "Ẹni tó bá ṣeé tó ṣeé ni aláàánú.",
    "translation": "Whoever does good deserves to be shown mercy.",
    "meaning": "Good deeds should be reciprocated with kindness."
}
                    `}
                </pre>

                <h2 className="text-xl font-bold mt-6">Example Response</h2>
                <pre className="bg-gray-100 p-4 rounded">
                    {`
{
    "message": "Proverb updated successfully",
    "proverb": {
        "id": "63e2b5f4ab7d4b6d9a7cbb90",
        "proverb": "Ẹni tó bá ṣeé tó ṣeé ni aláàánú.",
        "translation": "Whoever does good deserves to be shown mercy.",
        "meaning": "Good deeds should be reciprocated with kindness."
    }
}
                    `}
                </pre>
            </section>
        </>
    );
};

export default PutProverb;