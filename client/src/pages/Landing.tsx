import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <section className="py-10 px-4">
                <h2 className="text-2xl font-bold text-center mb-8">API Endpoints</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card
                        title="GET /api/proverbs"
                        description="Fetch all Yoruba proverbs with pagination and search."
                        link="/docs/get-proverbs"
                    />
                    <Card
                        title="GET /api/proverbs/:id"
                        description="Retrieve a specific proverb by its ID."
                        link="/docs/get-proverb-by-id"
                    />
                    <Card
                        title="POST /api/proverbs"
                        description="Add a new Yoruba proverb to the database."
                        link="/docs/post-proverb"
                    />
                    <Card
                        title="PUT /api/proverbs/:id"
                        description="Update an existing proverb by ID."
                        link="/docs/put-proverb"
                    />
                    <Card
                        title="DELETE /api/proverbs/:id"
                        description="Remove a proverb by its ID."
                        link="/docs/delete-proverb"
                    />
                </div>
            </section>
        </>
    );
};

export default Landing;