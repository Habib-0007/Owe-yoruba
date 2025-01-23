import Navbar from '../components/Navbar';

const GetProverbById: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 px-4">
                <h1 className="text-3xl font-bold mb-4">GET /api/proverbs/:id</h1>
                <p>
                    Retrieve a specific proverb by its unique ID. This endpoint is useful for fetching detailed
                    information about a single proverb.
                </p>

                <h2 className="text-xl font-bold mt-6">Path Parameters</h2>
                <ul className="list-disc ml-6">
                    <li>
                        <strong>id</strong>: The unique ID of the proverb to retrieve.
                    </li>
                </ul>

                <h2 className="text-xl font-bold mt-6">Example Request</h2>
                <pre className="bg-gray-100 p-4 rounded">
                    GET /api/proverbs/63e2b5f4ab7d4b6d9a7cbb90
                </pre>

                <h2 className="text-xl font-bold mt-6">Example Response</h2>
                <pre className="bg-gray-100 p-4 rounded">
                    {`
{
    "id": "63e2b5f4ab7d4b6d9a7cbb90",
    "proverb": "Ẹni tó bá ṣeé tó ṣeé ni aláàánú.",
    "translation": "Whoever does good deserves to be shown mercy.",
    "meaning": "Good deeds should be reciprocated with kindness."
}
                    `}
                </pre>
            </section>
        </>
    );
};

export default GetProverbById;