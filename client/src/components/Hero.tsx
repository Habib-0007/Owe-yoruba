import { Link } from "react-router-dom"


const Hero: React.FC = () => {
    return (
        <section className="bg-gray-100 text-gray-800 py-20 text-center">
            <h1 className="text-4xl font-bold">Explore Yoruba Proverbs API</h1>
            <p className="mt-4 text-lg">
                Fetch, create, update, and delete Yoruba proverbs with translations and meanings.
            </p>
            <Link to="/docs" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg">
                View Documentation
            </Link>
        </section>
    );
};

export default Hero;