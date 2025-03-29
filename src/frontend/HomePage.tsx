import { Body } from "./components/body/body";
import { NewsArticle } from "./components/article/article";
import { Header } from "./components/header/header";

const HomePage = () => {
    const articles = [
        {
            id: 1,
            title: "Novo avanço na tecnologia de energia renovável",
            excerpt:
                "Cientistas desenvolvem painel solar com eficiência recorde de 45%",
            date: "2023-06-15",
            category: "Tecnologia",
            imageUrl:
                "https://via.placeholder.com/800x400?text=Energia+Renovável",
        },
        {
            id: 2,
            title: "Mercado financeiro reage às novas políticas econômicas",
            excerpt:
                "Bolsa de valores tem maior alta em 3 meses após anúncio do governo",
            date: "2023-06-14",
            category: "Economia",
        },
        // Adicione mais artigos conforme necessário
    ];

    return (
        <>
            <Header />
            <Body
                featuredArticle={
                    <NewsArticle
                        isFeatured
                        title={articles[0].title}
                        excerpt={articles[0].excerpt}
                        date={articles[0].date}
                        category={articles[0].category}
                        imageUrl={articles[0].imageUrl}
                    />
                }
            >
                {articles.slice(1).map((article) => (
                    <NewsArticle
                        key={article.id}
                        title={article.title}
                        excerpt={article.excerpt}
                        date={article.date}
                        category={article.category}
                        imageUrl={article.imageUrl}
                    />
                ))}
            </Body>
        </>
    );
};

export default HomePage;
