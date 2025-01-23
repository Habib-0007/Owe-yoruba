interface CardProps {
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
    return (
        <div className="border rounded-lg p-4 bg-white shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
            <a href={link} className="text-blue-500 mt-4 inline-block">
                Learn More →
            </a>
        </div>
    );
};

export default Card;