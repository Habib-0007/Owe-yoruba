import Navbar from '../components/Navbar';

const PostProverb: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 px-4">
                <h1 className="text-3xl font-bold mb-4">POST /api/proverbs</h1>
                <p>
                    Add a new Yoruba proverb to the database. This endpoint allows you to store a proverb, its
                    translation, and meaning.
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
    "message": "Proverb added successfully",
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

export default PostProverb;