import Navbar from '../components/Navbar';

const GetProverbs: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 px-4">
                <h1 className="text-3xl font-bold mb-4">GET /api/proverbs</h1>
                <p>Fetch all Yoruba proverbs from the database with optional search and pagination.</p>
                <h2 className="text-xl font-bold mt-6">Query Parameters</h2>
                <ul className="list-disc ml-6">
                    <li><strong>limit</strong>: Number of proverbs per page (default: 10).</li>
                    <li><strong>page</strong>: Page number (default: 1).</li>
                    <li><strong>search</strong>: Search keyword for filtering proverbs.</li>
                </ul>
            </section>
        </>
    );
};

export default GetProverbs;