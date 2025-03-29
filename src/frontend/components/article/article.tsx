interface NewsArticleProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl?: string;
    isFeatured?: boolean;
}

export const NewsArticle = ({
    title,
    excerpt,
    date,
    category,
    imageUrl,
    isFeatured = false,
}: NewsArticleProps) => {
    return (
        <article
            className={`bg-white rounded-lg overflow-hidden shadow-md ${
                isFeatured ? "md:col-span-3" : ""
            }`}
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-blue-600 font-semibold">
                        {category}
                    </span>
                    <time className="text-sm text-gray-500" dateTime={date}>
                        {new Date(date).toLocaleDateString()}
                    </time>
                </div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{excerpt}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Ler mais
                </button>
            </div>
        </article>
    );
};
