import React from 'react';
import Navbar from '../components/Navbar';

const DeleteProverb: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 px-4">
                <h1 className="text-3xl font-bold mb-4">DELETE /api/proverbs/:id</h1>
                <p>
                    Remove a proverb from the database using its unique ID. This operation permanently deletes the
                    proverb.
                </p>

                <h2 className="text-xl font-bold mt-6">Path Parameters</h2>
                <ul className="list-disc ml-6">
                    <li>
                        <strong>id</strong>: The unique ID of the proverb to delete.
                    </li>
                </ul>

                <h2 className="text-xl font-bold mt-6">Example Response</h2>
                <pre className="bg-gray-100 p-4 rounded">
                    {`
{
    "message": "Proverb deleted successfully"
}
                    `}
                </pre>
            </section>
        </>
    );
};

export default DeleteProverb;